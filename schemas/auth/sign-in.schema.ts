// import zod
import { z } from "zod";

/**
 * Zod schema untuk validasi sign-in
 */
export const signInSchema = z.object({
  email: z.string().trim().email("Invalid e-mail"),
  password: z.string().min(8, "Password must have minimum 8 characters"),
});

export type SignInInput = z.infer<typeof signInSchema>;