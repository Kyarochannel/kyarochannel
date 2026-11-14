// Eleventy configuration — the "machine" settings.
// You rarely need to touch this file.

import markdownIt from "markdown-it";
import markdownItFigures from "markdown-it-image-figures";

export default function (eleventyConfig) {
  // Make Markdown images (![caption](file)) become nicely-styled figures
  // with the caption shown underneath. So photos in posts "just work".
  const md = markdownIt({ html: true, linkify: true, typographer: true });
  md.use(markdownItFigures, { figcaption: "alt", lazy: true, link: true });
  eleventyConfig.setLibrary("md", md);

  // Copy these folders straight through to the finished site, untouched:
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  // A "collection" is a group of content Eleventy gathers automatically.
  // These let the homepage, blog page, and articles page build their lists
  // from whatever posts actually exist — no manual updating.

  // All blog posts, newest first:
  eleventyConfig.addCollection("blog", (api) =>
    api.getFilteredByGlob("src/blog/*.md").reverse()
  );

  // All articles, newest first:
  eleventyConfig.addCollection("articles", (api) =>
    api.getFilteredByGlob("src/articles/*.md").reverse()
  );

  // A nice readable date filter, e.g. "1 November 2026"
  eleventyConfig.addFilter("prettyDate", (dateObj) => {
    const d = new Date(dateObj);
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    // Markdown and HTML files both get processed with Nunjucks templating
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
