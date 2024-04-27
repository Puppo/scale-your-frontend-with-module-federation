import type { ZodType, ZodTypeDef, z } from "zod";
declare const useParamsTypeSafe: <Schema extends ZodType<Output, Def, Input>, Output, Def extends ZodTypeDef, Input>(schema: Schema) => z.infer<Schema>;
export default useParamsTypeSafe;
