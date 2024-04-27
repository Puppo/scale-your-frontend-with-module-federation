import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

interface NavBarProps {
	items: Array<{
		label: string;
		link: string;
	}>;
}

export default function NavBar({ items }: NavBarProps) {
	return (
		<nav className={styles.container}>
			{items.map(({ label, link }) => (
				<Link key={label} to={link}>
					{label}
				</Link>
			))}
		</nav>
	);
}
