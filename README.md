        # Javascript Vue.js Frontend Application — Node 24

        **Scenario:** 1 - Monolithic  
        **Project type:** Vue.js Frontend Application  
        **Customer Version:** 24  
        **Syntax:** ES2024+ / Node.js 24 — latest V8 with Node 24 — Promise.withResolvers, Set methods, toSorted, Object.hasOwn

        ## Source of truth

        - Mapping matrix: `Final_Enterprise_Mapping_Matrix 1.xlsx` (JavaScript sheet)
        - Syntax / tool fixture patterns: `Golden_Repo_Lite` → `Javascript_24.0.0`
        - This branch contains **only** Node 24 syntax (no cross-version merge)

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
        | `src/` | Vue app + domain JS (ES2024+ / Node.js 24) |
        | `test/` | Mocha specs (nyc / stryker) |
        | `tool-fixtures/` | Intentional eslint-security / jscpd / lizard samples |
        | `tool-matrix.json` | Excel-derived tool + version metadata |
