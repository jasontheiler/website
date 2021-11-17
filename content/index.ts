import { createUnplugin } from "unplugin";
import Yaml from "js-yaml";
import grayMatter from "gray-matter";
import MarkdownIt from "markdown-it";
import Shiki from "markdown-it-shiki";

const markdownIt = new MarkdownIt({ html: true });

markdownIt.use(Shiki);

const unplugin = createUnplugin(() => ({
  name: "content",
  enforce: "pre",
  transformInclude(id) {
    return /\.(md|yml|yaml)$/.test(id);
  },
  transform(code, id) {
    if (/\.md$/.test(id)) {
      const { data, content } = grayMatter(code);

      return `export default ${JSON.stringify({
        ...data,
        body: markdownIt.render(content),
      })};`;
    }

    if (/\.(yml|yaml)$/.test(id))
      return `export default ${JSON.stringify(Yaml.load(code))};`;
  },
}));

export default unplugin.vite;
