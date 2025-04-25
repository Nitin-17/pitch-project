import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(20),
  link: z
    .string()
    .url()
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");

        return contentType?.startsWith("image/");
      } catch {
        return false;
      }
    }),
  pitch: z.string().min(10),
});

/* A more accurated validation */
/* 

import { z } from "zod";

const imageExtensionRegex = /\.(jpeg|jpg|png|gif|webp|svg)$/i;

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(20),
  link: z
    .string()
    .url()
    .refine((url) => imageExtensionRegex.test(url), {
      message: "Link must end with an image file extension (.jpg, .png, etc.)",
    })
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");
        return contentType?.startsWith("image/");
      } catch (err) {
        return false;
      }
    }, {
      message: "URL must point to an actual image file",
    }),
  pitch: z.string().min(10),
});

*/
