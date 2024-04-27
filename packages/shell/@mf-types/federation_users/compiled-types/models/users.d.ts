import { z } from "zod";
export declare const LoginResponse: z.ZodObject<{
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
}, {
    token: string;
}>;
export type LoginResponse = z.infer<typeof LoginResponse>;
export declare const User: z.ZodObject<{
    id: z.ZodNumber;
    email: z.ZodString;
    username: z.ZodString;
    name: z.ZodObject<{
        firstname: z.ZodString;
        lastname: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        firstname: string;
        lastname: string;
    }, {
        firstname: string;
        lastname: string;
    }>;
}, "strip", z.ZodTypeAny, {
    id: number;
    email: string;
    username: string;
    name: {
        firstname: string;
        lastname: string;
    };
}, {
    id: number;
    email: string;
    username: string;
    name: {
        firstname: string;
        lastname: string;
    };
}>;
export type User = z.infer<typeof User>;
