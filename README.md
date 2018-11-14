# Prettier configuration

Prettier configuration used in Ackee's JavaScript projects.

## Installation

1.  Install the config `prettier-config-ackee`:

    ```bash
    $ yarn add -D prettier-config-ackee
    ```

    or with npm`:

    ```bash
    $ npm i -D prettier-config-ackee
    ```

2.  Create a new file called `prettier.config.js` in the root of your project:

    ```js
    module.exports = require('prettier-config-ackee');
    ```

3.  Add prettier plugin to your editor

    [Prettier - Editor Integration](https://prettier.io/docs/en/editors.html)

---

## Usage with ESLint

If you're using ESLint, you want to turn off all rules that are unnecessary or might conflict with Prettier.

1.  Install [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier):

    ```bash
     $   yarn add -D eslint-config-prettier
    ```

    or

    ```bash
    $   npm i -D eslint-config-prettier
    ```

2.  Then, add eslint-config-prettier to the "extends" array in your .eslintrc.\* file (or in `eslintConfig` object placed in `package.json`). Make sure to put it last, so it gets the chance to override other configs.

    ```json
    {
    	"extends": ["ackee", "prettier"]
    }
    ```

---

## Adding Prettier into existing codebase

After adding Prettier to your project, you probably want to format all current code. Why? Because if you don't do that, then when you create your next MR, most of the changes is going to be caused by the new code formatting.

1. Install `prettier`
   ```bash
   $   yarn add -D prettier
   ```
   or
   ```bash
   $   npm i -D prettier
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

---

## How to propose a change to the config

1. Create MR with your update.
2. Post link to the MR to [#webari](https://ackee.slack.com/messages/C07BZ9K32) Slack channel.
3. Let the team to vote.
