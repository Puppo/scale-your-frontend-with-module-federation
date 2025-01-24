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
				<Route path="/products">
					<Route
						index
						path="*"
						element={
							<Suspense>
								<Products />
							</Suspense>
						}
					/>
				</Route>
				<Route path="/basket">
					<Route
						index
						path="*"
						element={
							<Suspense>
								<Basket />
							</Suspense>
						}
					/>
				</Route>
				<Route path="/users">
					<Route
						index
						path="*"
						element={
							<Suspense>
								<Users />
							</Suspense>
						}
					/>
				</Route>
			</Route>
			<Route index element={<Navigate to="products" replace />} />
		</Routes>
	);
}
