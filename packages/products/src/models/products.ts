import { z } from "zod";

export const Product = z.object({
	id: z.number(),
	title: z.string(),
	price: z.number(),
	description: z.string(),
	category: z.string(),
	image: z.string(),
	rating: z.object({
		rate: z.number(),
		count: z.number(),
	}),
});
export const ProductList = z.array(Product);

export type Product = z.infer<typeof Product>;
