import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { retrieveList } from "../services/products";

const itemsPerPage = 100;

export default function Products() {
	const [searchParams, setSearchParams] = useSearchParams();
	const offset = Number(searchParams.get("offset") ?? 0);
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const setOffset = useCallback((value: number) => {
		setSearchParams({ offset: value.toString() });
	}, []);

	const { data, isPending, isError } = useQuery({
		queryKey: ["products", itemsPerPage, offset],
		queryFn: () => retrieveList({ limit: itemsPerPage, offset }),
	});

	return (
		<>
			<div>Products</div>

			{isPending && <div>Loading...</div>}

			{isError && <div>Something went wrong</div>}

			{data && (
				<>
					<ul>
						{data.map((product) => (
							<li key={product.id}>
								<Link to={`./${product.id}`}>{product.title}</Link>
							</li>
						))}
					</ul>

					<div>
						<button
							type="button"
							disabled={offset === 0}
							onClick={() => setOffset(offset - itemsPerPage)}
						>
							Previous
						</button>
						{offset / itemsPerPage + 1} page
						<button
							type="button"
							onClick={() => setOffset(offset + itemsPerPage)}
						>
							Next
						</button>
					</div>
				</>
			)}
		</>
	);
}
