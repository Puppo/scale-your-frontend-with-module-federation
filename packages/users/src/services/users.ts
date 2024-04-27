import * as jose from "jose";
import { LoginResponse, User } from "../models/users";

const BASE_API_URL = "https://fakestoreapi.com";

export const login = (username: string, password: string) => {
	const url = new URL(`${BASE_API_URL}/auth/login`);
	return fetch(url.toString(), {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username, password }),
	})
		.then((response) => response.json())
		.then(LoginResponse.parse)
		.then((response) => response.token)
		.then(jose.decodeJwt)
		.then((payload) => Number.parseInt(payload.sub ?? "", 10))
		.then(retrieveById);
};

export const retrieveById = (id: number) => {
	return fetch(`${BASE_API_URL}/users/${id}`)
		.then((response) => response.json())
		.then(User.parse);
};
