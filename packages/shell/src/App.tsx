import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";

const Products = lazy(() => import("federation_products/Products"));
const Basket = lazy(() => import("federation_basket/Basket"));

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						path="/products/*"
						element={
							<Suspense>
								<Products />
							</Suspense>
						}
					/>
					<Route
						path="/basket/*"
						element={
							<Suspense>
								<Basket />
							</Suspense>
						}
					/>
				</Route>
				<Route index element={<Navigate to="products" replace />} />
			</Routes>
		</BrowserRouter>
	);
}
