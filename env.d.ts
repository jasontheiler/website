declare module "*.md" {
  import { VNode } from "vue";
  const content: Record<string, any> & { body: () => VNode };
  export default content;
}

declare type Content = Record<string, any> & {
  body: () => import("vue").VNode;
};

declare type Project = Content & {
  order: number;
  title: string;
};

declare type Note = Content & {
  title: string;
  description: string;
  createdAt: Date;
};

declare type Tool = Content & {
  category: string;
  name: string;
  link: string;
};
