        # Javascript Vue.js Frontend Application — Node 18

        **Scenario:** 1 - Monolithic  
        **Project type:** Vue.js Frontend Application  
        **Customer Version:** 18  
        **Syntax:** ES2022 / Node.js 18 — native fetch, Object.hasOwn, .at(), Error.cause, optional chaining, nullish coalescing

        ## Source of truth

        - Mapping matrix: `Final_Enterprise_Mapping_Matrix 1.xlsx` (JavaScript sheet)
        - Syntax / tool fixture patterns: `Golden_Repo_Lite` → `Javascript_18.0.0`
        - This branch contains **only** Node 18 syntax (no cross-version merge)

        ## Linked tools (12)

        - `diff-cover`
- `eslint`
- `eslint-plugin-security`
- `eslint-plugin-sonarjs`
- `jscpd`
- `lizard`
- `mocha`
- `npm-audit`
- `npm-ls`
- `nyc`
- `pydriller`
- `stryker-js`

        ## Mandatory commands

        ```bash
        npm install
        npm run build
        npm test
        npm run test:coverage
        npm run lint
        npm run lint:security
        npm run lint:sonarjs
        npm run jscpd
        npm run audit
        npm run ls
        npm run lizard
        npm run pydriller
        npm run diff-cover
        npm run stryker
        ```

        Python analyzers:

        ```bash
        pip install -r requirements-tools.txt
        ```

        ## Layout

        | Path | Purpose |
        |---|---|
        | `src/` | Vue app + domain JS (ES2022 / Node.js 18) |
        | `test/` | Mocha specs (nyc / stryker) |
        | `tool-fixtures/` | Intentional eslint-security / jscpd / lizard samples |
        | `tool-matrix.json` | Excel-derived tool + version metadata |
