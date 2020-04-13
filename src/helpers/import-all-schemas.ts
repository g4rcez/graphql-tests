import { readFileSync } from "fs";
import glob from "glob";

export const removeGqlUnusedStrings = (str = ""): string =>
    str.replace(/#.*/gi, "").replace("\n", "").replace(/\s+/g, " ");

export const importAllSchemas = async (regex: string, debugFn = console.log): Promise<string> =>
    new Promise((resolve) => {
        glob(regex, (_, match) => {
            debugFn(match);
            resolve(match.reduce((acc, el) => acc + readFileSync(el, { encoding: "utf-8" }), ""));
        });
    });
