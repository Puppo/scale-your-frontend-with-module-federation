import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Basket = lazy(() => import("./routes/Basket"));

export default function BasketRoutes() {
	return (
		<Suspense>
			<Routes>
				<Route index element={<Basket />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</Suspense>
	);
}
