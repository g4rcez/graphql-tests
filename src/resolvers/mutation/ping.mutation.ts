import { Resolver } from "../../types";

export const mutationPing: Resolver<any, { ms: number }, any> = async (_, { ms }) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ms: `${ms}`,
                name: String.name
            });
        }, ms);
    });
