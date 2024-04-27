import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";

const Products = lazy(() => import("../pages/Products"));
const Basket = lazy(() => import("../pages/Basket"));
const Users = lazy(() => import("../pages/Users"));

export default function ShellRoutes() {
	return (
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
				<Route
					path="/users/*"
					element={
						<Suspense>
							<Users />
						</Suspense>
					}
				/>
			</Route>
			<Route index element={<Navigate to="products" replace />} />
		</Routes>
	);
}
