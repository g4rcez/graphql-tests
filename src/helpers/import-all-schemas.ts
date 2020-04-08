import { readFileSync } from "fs";
import glob from "glob";

export const importAllSchemas = async (regex: string): Promise<string> =>
  new Promise((resolve) => {
    let str = "";
    glob(regex, (_, match) => {
      console.log(match);
      match.forEach((el) => {
        const s = readFileSync(el, { encoding: "utf-8" })
          .replace(/#.*/gi, "")
          .replace("\n", "")
          .replace(/\s+/g, " ");
        str += s;
      }, "");
      resolve(str);
    });
  });
