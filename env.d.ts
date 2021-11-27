declare module "*.md" {
  import { DefineComponent } from "vue";
  const content: Record<string, any> & { body: DefineComponent<{}, {}, any> };
  export default content;
}
