# Adding photos to the gallery

Posting photos is two steps. No HTML.

## The two steps

1. **Put your photo files** into `src/images/gallery/`
   (e.g. `cytadela-01.jpg`, `cytadela-02.jpg`).
   Use lowercase names, no spaces (hyphens are fine).

2. **Open `src/_data/photos.json`** and add a group at the TOP of the list,
   like this:

   {
     "title": "Cytadela Park",
     "date": "November 2026",
     "photos": [
       { "file": "cytadela-01.jpg", "caption": "autumn on the hill" },
       { "file": "cytadela-02.jpg", "caption": "the old walls" }
     ]
   },

   - Keep the comma after the `}` if other groups follow.
   - Newest group goes at the top (it shows first).
   - `caption` can be anything; `date` and `title` are optional.

That's it. The gallery page, and the "recent photos" row on the homepage,
update themselves.

## About photo size (optional but nice)

Photos straight from a camera/phone are large (5–10 MB each). They'll still
work, just load slower. To make the site snappy, you can shrink them first:

- Easiest: go to **squoosh.app** (free, nothing to install), drag your photo
  in, set width to about **1600px**, download, use that file.
- This keeps them sharp on screen while cutting the file size a lot.

Not required to start — post full-size if you like and optimise later.

## Tip for naming a batch

Name a batch by place + number so they stay tidy and sorted:
`cytadela-01.jpg`, `cytadela-02.jpg`, `cytadela-03.jpg` …

---

## Putting a photo INSIDE a blog post or article

Even easier — one line, right where you want it in your writing:

    ![your caption here](/images/myphoto.jpg)

- Put the image in `src/images/` (or `src/images/gallery/`, either works).
- The text in the brackets `[ ]` becomes the caption shown under the photo.
- It's automatically framed, captioned, and clickable to enlarge.

So a photo-walk post looks like:

    The light was lovely by the time I reached the top.

    ![The old walls catching the sun](/images/cytadela-03.jpg)

    I stayed longer than I meant to.

That's it — thematic, photo-driven writing with no HTML.
