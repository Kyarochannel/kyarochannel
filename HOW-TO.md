# How to use your site

Your site is now built by a little "machine" (Eleventy). You write posts as
simple text files; it builds all the HTML pages for you.

## To write a new blog post

1. Make a new file in `src/blog/` ending in `.md`
   (e.g. `src/blog/my-new-post.md`).
2. At the top, put this little header (called "front matter"):

   ---
   layout: layouts/post.njk
   title: My new post
   date: 2026-11-15
   category: Blog
   excerpt: A one-line teaser that shows on the homepage and blog list.
   nav: blog
   ---

3. Below the second `---`, just write. Plain text. Blank line between
   paragraphs. `## A heading` makes a subheading. `> a line` makes a quote.
4. Save. The post appears automatically on the homepage, the blog list, and
   at its own address.

## To write an article instead

Same thing, but put the file in `src/articles/`, set `category: Articles`,
`nav: articles`, and add two lines:
   backLink: /articles/
   backLabel: articles

## To add a photo to a post

Put the image in `src/images/` and write, in your post:
   ![description](/images/myphoto.jpg)

## To preview locally before publishing

Run:  npx @11ty/eleventy --serve
Then open the address it prints. It rebuilds as you save.

## When it goes live

Cloudflare builds the site the same way whenever you push to GitHub —
you just write the `.md` file, commit, and it's live. (We'll set that up next.)
