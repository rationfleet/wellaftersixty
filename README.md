# WellAfterSixty Website

A health and wellness blog for seniors, built with React Router v7 (formerly Remix) and Tailwind CSS.

---

## 🚀 Quick Start

### Running the site locally

1. Open Terminal and navigate to this folder:
   ```bash
   cd /Users/nap/Code/stitch_remix_of_wellaftersixty_homepage/wellaftersixty
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to: **http://localhost:5173**

---

## 📝 How to Add a New Blog Post

Adding a new blog post is simple! Just follow these steps:

### Step 1: Create a new file

Create a new file in the `content/blog/` folder. Name it with dashes between words, like:
- `my-new-article.md`
- `healthy-eating-tips.md`
- `exercise-for-beginners.md`

### Step 2: Add the front matter

At the top of the file, add this information (customize for your article):

```markdown
---
title: "Your Article Title Here"
slug: your-article-slug
category: Nutrition
author: Your Name
authorTitle: Your Title (e.g., "Registered Dietitian")
date: 2024-01-15
readTime: 5 min read
excerpt: A brief description of your article (1-2 sentences)
image: /images/your-image.jpg
---
```

### Step 3: Write your content

Below the front matter, write your article using simple formatting:

```markdown
# Main Title

This is a regular paragraph.

## Section Heading

Another paragraph here.

### Smaller Heading

- Bullet point 1
- Bullet point 2
- Bullet point 3

**Bold text** and *italic text* are easy!
```

### Step 4: Add an image (optional)

Save your article image to the `public/images/` folder, then reference it in the front matter.

---

## 📂 Folder Structure

```
wellaftersixty/
├── app/                    # Application code (don't touch unless needed)
│   ├── components/         # Reusable UI pieces
│   ├── routes/             # Pages
│   └── app.css             # Styles
├── content/
│   ├── blog/               # 📝 YOUR BLOG POSTS GO HERE
│   └── products/           # 🛒 YOUR PRODUCTS GO HERE
├── public/
│   └── images/             # 🖼️ YOUR IMAGES GO HERE
└── README.md               # This file
```

---

## 🛒 How to Add a New Product

Products can be added to the `content/products/` folder in a similar format to blog posts.

---

## 🌐 Deploying Your Site

When you're ready to put your site online:

### Option 1: Vercel (Recommended - Free)

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Connect your repository
3. Click "Deploy" - done!

### Option 2: Netlify (Also Free)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop the `build` folder after running `npm run build`

---

## 📞 Need Help?

If you need assistance:
1. Check that the development server is running (`npm run dev`)
2. Make sure all files are saved
3. Try refreshing the browser

---

## ⌨️ Useful Commands

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |

---

Made with ❤️ for WellAfterSixty
