declare namespace NodeJS {
    export interface ProcessEnv {
        NODE_ENV: "development" | "production" | "test" | "staging";
        PORT: number;
    }
}
