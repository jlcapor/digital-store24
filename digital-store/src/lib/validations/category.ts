import * as z from "zod";

export const categorySchema = z.object({
  name: z
    .string()
    .min(1, { message: "El nombre de la categoría es obligatorio." })
    .max(255),
  slug: z.string().optional(),
  image: z.string().min(1, { message: "La imagen es obligatoria" }).optional(),
});
