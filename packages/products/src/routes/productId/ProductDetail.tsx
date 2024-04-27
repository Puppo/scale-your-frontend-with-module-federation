import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { z } from "zod";
import { retrieveById } from "../../services/products";
import useParamsTypeSafe from "../../utils/useParamsTypeSafe";

const ProductDetailParams = z.object({
	productId: z.coerce.number(),
});

export default function ProductDetail() {
	const { productId } = useParamsTypeSafe(ProductDetailParams);

	const { data, isPending, isError } = useQuery({
		queryKey: ["products", productId],
		queryFn: () => retrieveById(productId),
	});

	return (
		<>
			<div>Product Detail</div>

			{isPending && <div>Loading...</div>}

			{isError && <div>Something went wrong</div>}

			{data && (
				<>
					<div>
						<span>Title: </span>
						<strong>{data.title}</strong>
					</div>
					<div>
						<span>Price: </span>
						<strong>{data.price}</strong>
					</div>
					<div>{data.description}</div>
				</>
			)}

			<div>
				<Link to="../">Back to Products</Link>
			</div>
		</>
	);
}
