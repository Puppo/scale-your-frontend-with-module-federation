import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "federation_ui/ErrorBoundary";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Products = lazy(() => import("./routes/Products"));
const ProductDetail = lazy(() => import("./routes/productId/ProductDetail"));

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		},
	},
});

export default function ProductsRoutes() {
	return (
		<ErrorBoundary fallback={<div>Something went wrong</div>}>
			<QueryClientProvider client={queryClient}>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route index element={<Products />} />
						<Route path="/:productId" element={<ProductDetail />} />
					</Routes>
				</Suspense>
			</QueryClientProvider>
		</ErrorBoundary>
	);
}
