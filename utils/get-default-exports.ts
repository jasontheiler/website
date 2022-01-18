type GlobImports = Record<
  string,
  Record<string, any> | (() => Promise<Record<string, any>>)
>;

export const getDefaultExports = async <T>(
  globImports: GlobImports
): Promise<T[]> => {
  const modules = await Promise.all(
    Object.values(globImports).map(async (module) => {
      if (typeof module === "function") return await module();
      else return module;
    })
  );

  return modules
    .filter((module) => module.default)
    .map((module) => module.default);
};
