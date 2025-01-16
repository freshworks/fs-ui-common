# FS UI Common

## Link a temporary version of the library to your stack environment

If you want to link the `fs-ui-common` with your new changes which are not yet merged and released, for testing your application with the new changes in your stack environment then follow the below steps.

- Create a new branch with your squad name(see if it exists already and use that if available).

- Merge your new branch into that branch. If you face lot of conflicts, then purge the squad branch and recreate it from the main branch and then merge your branch. (Make sure all your squad FEs are aware of this change, so that they can also merge their changes in the newly created squad branch)

- Check whether the `dist` folder is commented in the .gitignore file in your squad branch, if not comment it out.

- Run `pnpm build`, commit and publish the dist changes to the origin.

- Get the commit hash and use that to link it in your application package.json as below,

```js
  dependencies: {
    "@freshworks/fs-ui-common": "git+ssh://git@github.com/freshworks/fs-ui-common.git#dd221cf32b6aed958cc2969d188d45358ec78f8e",
  }
```
