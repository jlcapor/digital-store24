import {z} from "zod"

export const authSchema = z.object({
  name: z.string().refine((data) => !!data, { message: "El nombre es obligatorio" }),
  email: z.string().email({
    message: "Por favor, ingresa una dirección de correo válida",
  }),
  password: z
    .string()
    .min(8, {
      message: "La contraseña debe tener al menos 8 caracteres",
    })
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial",
    }),
})
