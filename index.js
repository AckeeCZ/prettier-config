export const importOrderGroups = [
  ["^(react/(.*)$)|^(react$)|^(react-native(.*)$)", "^(next/(.*)$)|^(next$)"],

  ["^~/(.*)$"],

  ["^[./]"],
] 

export const generateImportOrder = (
  groups,
) => {
  const result = [];
  const groupBreak = "";

  for (const group of groups) {
    result.push(...group, groupBreak);
  }

  return result;
};

/**
 * @type {import('@ianvs/prettier-plugin-sort-imports').PrettierConfig}
 */
export const config = {
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: "avoid",
  printWidth: 120,
  tabWidth: 4,

  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: generateImportOrder(importOrderGroups),

  /**
   * >=5.x
   */
  importOrderTypeScriptVersion: "5.0.0",
} 
