import { createUnplugin } from "unplugin";
import grayMatter from "gray-matter";
import MarkdownIt from "markdown-it";
import Shiki from "markdown-it-shiki";
import { parseDocument } from "htmlparser2";
import { getElementsByTagName } from "domutils";
import serializeDom from "dom-serializer";
import { compileTemplate } from "@vue/compiler-sfc";

const markdownIt = new MarkdownIt({
  html: true,
  linkify: true,
});

markdownIt.use(Shiki);

const unplugin = createUnplugin(() => ({
  name: "content",

  enforce: "pre",

  transformInclude(id) {
    return /\.md$/.test(id);
  },

  transform(code, id) {
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
    const component = compileTemplate({
      source: transformedHtml,
      filename: id,
      id,
    });

    return `
    const data = ${JSON.stringify(data)};
    ${component.code.replace("export function", "function")}

    export default { ...data, body: { render } };
    `;
  },
}));

export default unplugin.vite;
