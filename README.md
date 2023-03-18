# Rainbow

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Steps to generate your own library

# Step 1

If you don't have a library yet, the first step is to run `ng g library [YOUR_LIBRARY_NAME]`

# Step 2

Add public-api.ts and ng-package.json file to each component

public-api.ts should contain all exports from component and should look as following.
Example:
`export * from './calendar.component';`

ng-package.json should have following structure:
`{
  "$schema": "../../../../node_modules/ng-packagr/ng-package.schema.json",
  "lib": {
    "entryFile": "public-api.ts"
  }
}`
$schema should navigate to path of ng-package schema file

Root folder of the library should also contain public-api.ts and ng-package.json

public-api.ts should have default export as following:
`export default {};`

ng-package.json would look the same, except additional information of where the the library should be built
`{
  "$schema": "../../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../dist/cool-lib",
  "lib": {
    "entryFile": "public-api.ts"
  }
}`
`dest` is the output directory of the library
