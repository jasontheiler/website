---
title: Example
description: This is just a simple example!
createdAt: 2021-11-27T03:29:45.497Z
---

## Headers

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Emphasis

Emphasis, aka italics, with _underscores_.

Strong emphasis, aka bold, with **asterisks**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Lists

1. First ordered list item
2. Another item
   - Unordered sub-list.
3. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.
   Note that this line is separate, but within the same paragraph.
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

- Unordered list can use asterisks

* Or minuses

- Or pluses

## Links

[I'm an inline-style link](https://github.com)

[I'm an inline-style link with title](https://github.com "GitHub's Homepage")

[I'm an inline-style link to a relative page](/posts)

## Code and syntax highlighting

Inline `code` has `back-ticks` around it.

```shell [shell]
npm i -g pnpm

changed 1 package, and audited 2 packages in 1s

1 package is looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```vue [pages/posts/[slug].vue] {5-9,13-14}
<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content("posts", params.slug).fetch();
    const [prevPost, nextPost] = await $content("posts")
      .only(["slug", "title"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return {
      post,
      prevPost,
      nextPost,
    };
  },
};
</script>
```

## Tables

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | 1600€ |
| col 2 is      |   centered    |   12€ |
| zebra stripes |   are neat    |    1€ |

## Horizontal rule

Three or more Hyphens:

---

## Blockquotes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

Quote break.
