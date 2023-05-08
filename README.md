# Node Project Base configuration files and scripts

Used to add the base configuration to all projects going forwards.
Add scripts to have any of the dependency managers add the required node_modules for the given configs.

Files:

- .editorconfig
- .eslintrc.json
- .gitignore
- .npmrc
- .nvmrc
- .prettierrc
- audit-ci.jsonc
- tsconfig.json
- README.md


Planned features:
Create a cli
allow user to determine package manager
set NPM, yarnrc, or pnpm version, etc. 
generate package.json and install the following devDeps
    Also could run a generic setup for NextJs, Vite, React, RN? 
yarn add -D

npm i --save-dev

pnpm 

eslint eslint-config-prettier eslint-plugin-prettier @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser audit-ci prettier ts-node typescript
