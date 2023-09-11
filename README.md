![ackee|prettier-config-ackee](assets/ackee_git_fronted_prettier_config.png)

# Prettier configuration

Shared Prettier configuration accross Ackee's projects.

## Table of contents

-   [Installation](#installation)
-   [Usage with ESLint](#usage-with-eslint)
-   [Adding Prettier into existing codebase](#adding-prettier-into-existing-codebase)
-   [An option change proposal](#an-option-change-proposal)

---

## <a name="installation"></a>Installation

1.  Install the config `prettier-config-ackee`:

    ```bash
    $ yarn add -D prettier-config-ackee
    ```

2.  Create a new file called `prettier.config.mjs` in the root of your project:

    ```js
    import { config } from '@ackee/prettier-config'
    
    export default config
    ```

3.  Add prettier plugin to your editor

    [Prettier - Editor Integration](https://prettier.io/docs/en/editors.html)

---

## <a name="usage-with-eslint"></a>Usage with ESLint

If you're using ESLint, you want to turn off all rules that are unnecessary or might conflict with Prettier.

1.  Install [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier):

    ```bash
     $   yarn add -D eslint-config-prettier
    ```


2.  Then, add eslint-config-prettier to the "extends" array in your .eslintrc.\* file (or in `eslintConfig` object placed in `package.json`). Make sure to put `prettier` as the last one, so it can override other configs.

    ```json
    {
        "extends": ["ackee", "prettier"]
    }
    ```

---

## <a name="adding-prettier-into-existing-codebase"></a>Adding Prettier into existing codebase

After adding Prettier to your project, you probably want to format all current code. Why? Because if you don't do that, then when you create your next MR, most of the changes is going to be caused by the new code formatting.

1. Install `prettier`
    ```bash
    $   yarn add -D prettier
    ```
2. Add script to the `package.json` of your project:
    ```json
    {
        "scripts": {
            "prettier": "prettier --config ./prettier.config.js --write 'src/**/*.{js,md,scss,css,jsx}'"
        }
    }
    ```
    This script is going to recursively format code (code = files that match the `*.{js,md,scss,css,jsx}` glob pattern) in your `src/` directory with Prettier rules from `prettier.config.js` file.

## <a name="an-option-change-proposal"></a>An option change proposal

**To discuss**

You can find current options to discuss at [github issues](https://github.com/AckeeCZ/prettier-config-ackee/issues) page.
