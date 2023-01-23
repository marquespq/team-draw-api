// eslint-disable-next-line @typescript-eslint/no-var-requires
const { projectPrefix } = require('./package.json');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'scope-enum': [0],
    'function-rules/scope-enum': [
      2,
      'always',
      (parsed) => {
        const { header } = parsed;
        const shouldTestPrefix =
          header.includes('!') ||
          header.includes('fix') ||
          header.includes('feat') ||
          header.includes('refactor');
        if (!shouldTestPrefix || header.includes(projectPrefix)) {
          return [true];
        }
        return [
          false,
          `scope deve conter nome da task. Ex.: ${projectPrefix}-*`,
        ];
      },
    ],
  },
};
