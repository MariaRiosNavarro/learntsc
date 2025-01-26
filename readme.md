# TSC

# Watch mode one file

`tsc index.ts -w`

# Watch all files

`tsc -init`

- Es will created:

```sh
Created a new tsconfig.json with:

target: es2016
module: commonjs
strict: true
esModuleInterop: true
skipLibCheck: true
forceConsistentCasingInFileNames: true
```

And now to observer all .ts :

`tsc -watch`
