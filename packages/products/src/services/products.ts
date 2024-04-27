import { Product, ProductList } from "../models/products";

const BASE_API_URL = "https://fakestoreapi.com";

export const retrieveList = ({ limit = 100, offset = 0 }) => {
	const url = new URL(`${BASE_API_URL}/products`);
	url.searchParams.set("limit", limit.toString());
	url.searchParams.set("offset", offset.toString());
	return fetch(url.toString())
		.then((response) => response.json())
		.then(ProductList.parse);
};

export const retrieveById = (id: number) => {
	return fetch(`${BASE_API_URL}/products/${id}`)
		.then((response) => response.json())
		.then(Product.parse);
};
