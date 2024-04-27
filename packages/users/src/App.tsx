import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "federation_ui/ErrorBoundary";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import type { User } from "./models/users";

const Login = lazy(() => import("./routes/Login"));

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		},
	},
});

interface ProductsRoutesProps {
	onUser: (user: User) => void;
}

export default function ProductsRoutes({ onUser }: ProductsRoutesProps) {
	return (
		<ErrorBoundary fallback={<div>Something went wrong</div>}>
			<QueryClientProvider client={queryClient}>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/login" element={<Login onUserLogin={onUser} />} />
						<Route index element={<Navigate to="login" replace />} />
					</Routes>
				</Suspense>
			</QueryClientProvider>
		</ErrorBoundary>
	);
}
