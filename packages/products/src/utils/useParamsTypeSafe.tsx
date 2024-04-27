import { useParams } from "react-router-dom";
import type { ZodType, ZodTypeDef, z } from "zod";

const useParamsTypeSafe = <
	Schema extends ZodType<Output, Def, Input>,
	Output,
	Def extends ZodTypeDef,
	Input,
>(
	schema: Schema,
): z.infer<Schema> => {
	const params = useParams();
	return schema.parse(params);
};

export default useParamsTypeSafe;
