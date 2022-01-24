import { createUnplugin } from "unplugin";
import grayMatter from "gray-matter";
import MarkdownIt from "markdown-it";
import { getHighlighter } from "shiki";
import { parseDocument } from "htmlparser2";
import { getElementsByTagName } from "domutils";
import serializeDom from "dom-serializer";
import { compileTemplate } from "@vue/compiler-sfc";

const unplugin = createUnplugin(() => ({
  name: "content",

  enforce: "pre",

  transformInclude(id) {
    return /\.md$/.test(id);
  },

  async transform(code, id) {
    const highlighter = await getHighlighter({});

    const markdownIt = new MarkdownIt({
      html: true,
      linkify: true,
      highlight(code, lang, attrs) {
        const fileName = attrs.match(/(?<=\[).*(?=\])/)?.shift();
        const highlightedLines = attrs
          .match(/(?<={)(\d+(|-\d+),)*\d+(|-\d+)(?=})/)
          ?.shift()
          ?.split(",")
          ?.reduce((lines, n) => {
            if (!n.includes("-")) return [...lines, parseInt(n)];

            const [start, end] = n
              .split("-")
              .map((n) => parseInt(n))
              .sort();

            return [
              ...lines,
              ...Array.from({ length: end - start + 1 }, (_, i) => i + start),
            ];
          }, [] as number[]);

        return highlighter.codeToHtml(code, {
          lang,
          lineOptions: highlightedLines?.map((line) => ({
            line,
            classes: ["highlight"],
          })),
        });
      },
    });

    const { data, content } = grayMatter(code);
    const html = markdownIt.render(content);
    const dom = parseDocument(html, {
      lowerCaseTags: false,
      lowerCaseAttributeNames: false,
    });

    for (const codeElement of getElementsByTagName("code", dom)) {
      codeElement.attribs["v-pre"] = "";
    }

    for (const aElement of getElementsByTagName("a", dom)) {
      aElement.tagName = "AppLink";

      const href = aElement.attribs["href"];
      if (!href) continue;

      delete aElement.attribs["href"];
      aElement.attribs["to"] = href;
    }

    const transformedHtml = serializeDom(dom);
    const results = compileTemplate({
      source: transformedHtml,
      filename: id,
      id,
    });

    return `
    const data = ${JSON.stringify(data)
      // Turns all valid date strings into `Date` objects.
      .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, (value) =>
        isNaN(Date.parse(value.slice(1, -1))) ? value : `new Date(${value})`
      )};

    ${results.code
      // Removes all top-level `export` keywords.
      .replace(
        /(?<![\[({<][^\])}>]*)export[^.]*?(?=function)(?![^\[({<]*[\])}>])/g,
        ""
      )};

    export default {
      ...data,
      body: {
        name: "${id.split("/").pop()}",
        render,
      },
    };
    `;
  },
}));

export default unplugin.vite;
