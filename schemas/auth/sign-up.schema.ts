// import zod
import { z } from "zod";

/**
 * Zod schema untuk validasi sign-up
 */
export const signUpSchema = z.object({
  name: z.string().min(2, "Name must have minimum 2 characters"),
  email: z.string().trim().email("Invalid e-mail"),
  password: z.string().min(8, "Password must have minimum 8 characters"),
  termsAccepted: z.literal(true, {
    message: "Please, approve the Terms & Privacy Policy!",
  }),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;