export const getDefaultExports = async <T>(
  globImport: Record<
    string,
    Record<string, any> | (() => Promise<Record<string, any>>)
  >
): Promise<T[]> => {
  const modules = await Promise.all(
    Object.values(globImport).map(async (module) => {
      if (typeof module === "function") return await module();
      else return module;
    })
  );

  return modules
    .filter((module) => module.default)
    .map((module) => module.default);
};
