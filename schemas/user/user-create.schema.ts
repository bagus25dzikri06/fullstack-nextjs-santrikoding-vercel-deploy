// import zod
import { z } from "zod";

/** 
 * Zod schema untuk validasi pembuatan user
 */
export const createUserSchema = z.object({
    name: z.string().min(2, "Name must have minimum 2 characters"),
    email: z.string().trim().email("Invalid e-mail"),
    password: z.string().min(8, "Password must have minimum 8 characters")
});

export type CreateUserInput = z.infer<typeof createUserSchema>;