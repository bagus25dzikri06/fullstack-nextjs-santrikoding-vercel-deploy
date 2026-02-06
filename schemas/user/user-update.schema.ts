// import zod
import { z } from "zod";

/**
 * Zod schema untuk validasi edit user
 */
export const updateUserSchema = z.object({
    id: z.string().uuid("Invalid user ID"),
    name: z.string().min(2, "Name must have minimum 2 characters"),
    email: z.string().email("Invalid e-mail"),
    password: z
        .string()
        .optional()
        .or(z.literal(""))
        .refine((v) => !v || v.length >= 8, "Password must have minimum 8 characters"),
});

export type UpdateUserInput = z.infer<typeof updateUserSchema>;