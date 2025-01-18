import * as z from "zod";

export const ContactFormSchema = z.object({
  firstName: z.string().min(1, "Zorunlu Alan").max(50),
  lastName: z.string().min(1, "Zorunlu Alan").max(50),
  email: z.string().email("Geçersiz email adresi"),
  phone: z
    .string()
    .regex(/^[0-9+\-\s]*$/, "Geçersiz telefon numarası")
    .optional(),
  message: z
    .string()
    .min(10, "Mesajınız en az 10 karakter içermelidir.")
    .max(1000, "Mesajınızın uzunluğu 1000 karakteri geçmemelidir.")
    .refine((value) => !/script|<|>|&|{|\}/i.test(value), {
      message: "Mesajınızda zararlı içerik bulunmaktadır.",
    }),
  agreeToTerms: z.boolean().refine((value) => value, {
    message: "Gizlilik politikasını onaylayınız.",
  }),
});
export type ContactForm = z.infer<typeof ContactFormSchema>;
