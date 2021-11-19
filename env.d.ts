declare module "*.md" {
  const content: Record<string, any> & { body: string };
  export default content;
}
