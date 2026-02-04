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
            const content = `
<!DOCTYPE html>
<html>
<head>
  <title>Authentication</title>
</head>
<body>
  <script>
    (function() {
      function sendMessage(message) {
        if (window.opener) {
          window.opener.postMessage(message, '*');
        }
      }
      
      var token = ${JSON.stringify(tokenData)};
      
      if (token.error) {
        sendMessage('authorization:github:error:' + JSON.stringify(token));
      } else {
        sendMessage('authorization:github:success:' + JSON.stringify({
          token: token.access_token,
          provider: 'github'
        }));
      }
      
      window.close();
    })();
  </script>
  <p>Authenticating... you can close this window if it doesn't close automatically.</p>
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
