type ParsedContent = import("@nuxt/content/dist/runtime/types").ParsedContent;

declare type Project = ParsedContent & {
  title: string;
};

declare type Note = ParsedContent & {
  title: string;
  createdAt: string;
};

declare type Tool = ParsedContent & {
  category: string;
  name: string;
  link: string;
};
