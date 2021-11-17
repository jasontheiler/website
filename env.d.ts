declare module "*.md" {
  const content: Record<string, any> & { body: string };
  export default content;
}

declare module "*.yml" {
  const content: Record<string, any>;
  export default content;
}

declare module "*.yaml" {
  const content: Record<string, any>;
  export default content;
}
