import { optional, number, string, object, parse, unknown, pipe, transform } from 'valibot';

const envSchema = object({
    ENV: optional(string(), 'dev'),
    DATABASE: string(),
    HOST: string(),
    USER: string(),
    PORT: pipe(unknown(), transform(Number)),
    MAX: optional(number(), 10),
});

export const vEnv = parse(envSchema, process.env);
