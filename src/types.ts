import { DataSource } from "./data-sources";

export type AnyArg = {
    [key: string]: string | number;
};
export type Args<T> = {
    [key in keyof T]: T[key];
};

type Context = {
    dataSources: DataSource;
};
export type Resolver<Parent extends unknown, Arguments extends AnyArg, Model extends any> = (
    parent: Parent,
    args: Args<Arguments>,
    context: Context,
    info: unknown
) => Model;

export type ID = string;
