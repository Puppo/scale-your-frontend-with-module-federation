import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Products = lazy(() => import("./routes/Products"));
const ProductDetail = lazy(() => import("./routes/productId/ProductDetail"));

export default function ProductsRoutes() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route index element={<Products />} />
				<Route path="/:productId" element={<ProductDetail />} />
			</Routes>
		</Suspense>
	);
}
