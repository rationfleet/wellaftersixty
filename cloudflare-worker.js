// OAuth handler for Decap CMS
export default {
  async fetch(request) {
    const url = new URL(request.url)

    const CLIENT_ID = 'Ov23litv8L8qlwI6MT2r'
    const CLIENT_SECRET = '3a61c66c6feb4aa65ec3dc8e4c83741e515e0e60'

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      })
    }

    // Start OAuth flow - redirect to GitHub
    if (url.pathname === '/auth') {
      const authUrl = new URL('https://github.com/login/oauth/authorize')
      authUrl.searchParams.set('client_id', CLIENT_ID)
      authUrl.searchParams.set('scope', 'repo,user')
      return Response.redirect(authUrl.toString(), 302)
    }

    // Handle OAuth callback from GitHub
    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code')

      if (!code) {
        return new Response('Missing code parameter', { status: 400 })
      }

      // Exchange code for access token
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code: code
        })
      })

      const tokenData = await tokenResponse.json()

      // Build the HTML response that sends token back to opener window
      const hasError = tokenData.error;
      const content = `
<!DOCTYPE html>
<html>
<head>
  <title>${hasError ? 'Authentication Failed' : 'Authentication Successful'}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: #fff;
      padding: 20px;
    }
    .container {
      text-align: center;
      max-width: 400px;
    }
    .icon {
      font-size: 64px;
      margin-bottom: 20px;
    }
    .title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    .message {
      color: #a0aec0;
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    .status {
      background: rgba(255,255,255,0.1);
      border-radius: 8px;
      padding: 12px 20px;
      font-size: 13px;
      color: #68d391;
    }
    .status.error {
      color: #fc8181;
    }
    .spinner {
      width: 24px;
      height: 24px;
      border: 3px solid rgba(255,255,255,0.3);
      border-top-color: #68d391;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 16px;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .close-btn {
      display: inline-block;
      margin-top: 16px;
      padding: 10px 24px;
      background: #4a5568;
      color: #fff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
    }
    .close-btn:hover { background: #5a6678; }
  </style>
</head>
<body>
  <div class="container" id="content">
    ${hasError ? `
      <div class="icon">❌</div>
      <div class="title">Authentication Failed</div>
      <div class="message">
        Unable to complete GitHub authentication.<br>
        <strong>Error:</strong> ${tokenData.error_description || tokenData.error || 'Unknown error'}
      </div>
      <div class="status error">Please close this window and try again</div>
      <button class="close-btn" onclick="window.close()">Close Window</button>
    ` : `
      <div class="spinner"></div>
      <div class="title">Authentication Successful!</div>
      <div class="message">Connecting to your admin dashboard...</div>
      <div class="status" id="status">Sending credentials to CMS...</div>
    `}
  </div>
  <script>
    (function() {
      var token = ${JSON.stringify(tokenData)};
      var hasOpener = !!window.opener;
      var statusEl = document.getElementById('status');
      var contentEl = document.getElementById('content');
      
      function showError(msg) {
        contentEl.innerHTML = \`
          <div class="icon">⚠️</div>
          <div class="title">Connection Issue</div>
          <div class="message">\${msg}</div>
          <div class="status error">Please return to the admin page and try again</div>
          <button class="close-btn" onclick="window.close()">Close Window</button>
        \`;
      }
      
      function sendMessage(message) {
        if (window.opener) {
          try {
            window.opener.postMessage(message, '*');
            return true;
          } catch (e) {
            return false;
          }
        }
        return false;
      }
      
      // Handle error case
      if (token.error) {
        sendMessage('authorization:github:error:' + JSON.stringify(token));
        return; // Let user see the error and close manually
      }
      
      // Handle success case
      if (!hasOpener) {
        showError('This window was opened incorrectly.<br>The admin panel connection was lost.');
        return;
      }
      
      // Try to send the token
      var sent = sendMessage('authorization:github:success:' + JSON.stringify({
        token: token.access_token,
        provider: 'github'
      }));
      
      if (sent) {
        if (statusEl) statusEl.textContent = 'Success! Closing window...';
        setTimeout(function() {
          window.close();
          // If window didn't close (popup blockers), show success message
          setTimeout(function() {
            if (statusEl) {
              statusEl.textContent = 'You can now close this window';
            }
          }, 500);
        }, 1000);
      } else {
        showError('Unable to communicate with the admin panel.');
      }
    })();
  </script>
</body>
</html>
      `

      return new Response(content, {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      })
    }

    return new Response('Not found', { status: 404 })
  }
}
