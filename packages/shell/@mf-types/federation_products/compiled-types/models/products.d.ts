import { z } from "zod";
export declare const Product: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    price: z.ZodNumber;
    description: z.ZodString;
    category: z.ZodString;
    image: z.ZodString;
    rating: z.ZodObject<{
        rate: z.ZodNumber;
        count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        rate: number;
        count: number;
    }, {
        rate: number;
        count: number;
    }>;
}, "strip", z.ZodTypeAny, {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}, {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}>;
export declare const ProductList: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    price: z.ZodNumber;
    description: z.ZodString;
    category: z.ZodString;
    image: z.ZodString;
    rating: z.ZodObject<{
        rate: z.ZodNumber;
        count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        rate: number;
        count: number;
    }, {
        rate: number;
        count: number;
    }>;
}, "strip", z.ZodTypeAny, {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}, {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}>, "many">;
export type Product = z.infer<typeof Product>;
