exports.importOrderGroups = [
  ["^(react/(.*)$)|^(react$)|^(react-native(.*)$)", "^(next/(.*)$)|^(next$)"],

  ["^~(.*)$"],

  ["^[./]"],
] 

exports.generateImportOrder = (
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
exports.config = {
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
