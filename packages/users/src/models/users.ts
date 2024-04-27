import { z } from "zod";

export const LoginResponse = z.object({
	token: z.string(),
});

export type LoginResponse = z.infer<typeof LoginResponse>;

export const User = z.object({
	id: z.number(),
	email: z.string().email(),
	username: z.string(),
	name: z.object({
		firstname: z.string(),
		lastname: z.string(),
	}),
});

export type User = z.infer<typeof User>;
