import { generate } from "@graphql-codegen/cli";
import { writeFileSync } from "fs";
import { join } from "path";

async function doSomething(): Promise<void> {
    const saveFile = join(process.cwd(), "src", "/schemas.d.ts");
    const [schema] = await generate({
        schema: "http://localhost:5000",
        silent: true,
        generates: {
            [saveFile]: {
                plugins: ["typescript"]
            }
        }
    });
    const data = schema.content;
    writeFileSync(saveFile, data);
}

doSomething();
