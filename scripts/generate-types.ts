const { generate } = require("@graphql-codegen/cli");
const { join } = require("path");

async function doSomething() {
  await generate(
    {
      schema: "http://localhost:4000",
      silent: true,
      generates: {
        [join("..", process.cwd(), "/global.d.ts")]: {
          plugins: ["typescript"],
        },
      },
    },
    true
  );
}

doSomething();
