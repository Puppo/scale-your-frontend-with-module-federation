import ErrorBoundary from "federation_ui/ErrorBoundary";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Basket = lazy(() => import("./routes/Basket"));

export default function BasketRoutes() {
	return (
		<ErrorBoundary fallback={<div>Something went wrong</div>}>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route index element={<Basket />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</Suspense>
		</ErrorBoundary>
	);
}
