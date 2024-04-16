import { Link } from "react-router-dom";

export default function Basket() {
	return (
		<>
			<div>Basket</div>

			<div>
				<Link to="../products">Back to products</Link>
			</div>
		</>
	);
}
