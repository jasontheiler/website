import { createUnplugin } from "unplugin";
import grayMatter from "gray-matter";
import MarkdownIt from "markdown-it";
import { getHighlighter } from "shiki";
import { parseDocument } from "htmlparser2";
import { getElementsByTagName } from "domutils";
import serializeDom from "dom-serializer";
import { compileTemplate } from "@vue/compiler-sfc";
import { genImport } from "knitwork";
import { addVitePlugin, addWebpackPlugin, defineNuxtModule } from "@nuxt/kit";

const unplugin = createUnplugin(() => ({
  name: "content",
  enforce: "pre",

  transformInclude(id) {
    return /\.md$/.test(id);
  },

  async transform(code, id) {
    const highlighter = await getHighlighter({
      theme: "github-dark",
    });

    const markdownIt = new MarkdownIt({
      html: true,
      linkify: true,

      highlight(code, lang, attrs) {
        const filename = attrs.match(/(?<=\[).*(?=\])/)?.shift();
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

        return highlighter
          .codeToHtml(code, {
            lang,
            lineOptions: highlightedLines?.map((line) => ({
              line,
              classes: ["highlight"],
            })),
          })
          .replace(
            /^<pre(.|[^.])*?>/,
            `<pre${filename ? ` data-filename="${filename}"` : ""}${
              highlightedLines ? " data-highlighted" : ""
            }>`
          );
      },
    });

    const { data, content } = grayMatter(code);
    const template = markdownIt.render(content);
    const dom = parseDocument(template, {
      lowerCaseTags: false,
      lowerCaseAttributeNames: false,
    });

    for (const codeElement of getElementsByTagName("code", dom)) {
      codeElement.attribs["v-pre"] = "";
    }

    for (const aElement of getElementsByTagName("a", dom)) {
      aElement.tagName = "AppLink";
    }

    const transformedTemplate = serializeDom(dom);
    const results = compileTemplate({
      id,
      filename: id,
      source: transformedTemplate,
      compilerOptions: {
        inline: true,
      },
    });

    return `
    ${genImport("~/components/App/AppLink.ts", "AppLink")};

    const data = ${JSON.stringify(data)
      // Turns all valid date strings into `Date` objects.
      .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, (value) =>
        isNaN(Date.parse(value.slice(1, -1))) ? value : `new Date(${value})`
      )};

    ${results.preamble};

    export default {
      ...data,
      body: {
        name: "${id.split("/").pop()}",
        components: {
          AppLink,
        },
        render: ${results.code},
      },
    };
    `;
  },
}));

export default defineNuxtModule({
  meta: {
    name: "content",
  },

  setup() {
    addVitePlugin(unplugin.vite());
    addWebpackPlugin(unplugin.webpack());
  },
});
