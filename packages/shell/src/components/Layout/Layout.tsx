import Footer from "federation_ui/Footer";
import Header from "federation_ui/Header";
import NavBar from "federation_ui/NavBar";
import type { ComponentProps } from "react";
import { Outlet } from "react-router-dom";
import { useUser } from "../../context/userContext";
import styles from "./Layout.module.css";

const buildLinks = (
	user: unknown | null,
): ComponentProps<typeof NavBar>["items"] => {
	const userLinks = [
		{
			label: "Products",
			link: "/products",
		},
	];

	if (user) {
		userLinks.push({
			label: "Basket",
			link: "/basket",
		});
	} else {
		userLinks.push({
			label: "Login",
			link: "users",
		});
	}

	return userLinks;
};

export default function Layout() {
	const { user } = useUser();

	const links = buildLinks(user);

	return (
		<div className={styles.container}>
			<Header />
			<NavBar items={links} />
			<div className={styles.content}>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
