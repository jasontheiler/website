declare module "*.md" {
  import { VNode } from "vue";
  const content: Record<string, any> & { body: () => VNode };
  export default content;
}
