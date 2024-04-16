import { Link, Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<nav style={{ marginBottom: "3rem" }}>
				<Link to="/products" style={{ marginRight: "1rem" }}>
					Products
				</Link>
				<Link to="/basket" style={{ marginRight: "1rem" }}>
					Basket
				</Link>
			</nav>
			<Outlet />
		</>
	);
}
