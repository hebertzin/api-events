import { z } from "zod";

export const activityValidationSchema = z.object({
  name: z
    .string({
      message: "Name must be a string",
    })
    .min(1, { message: "Name is required" }),
  description: z
    .string({ message: "Description must be a string" })
    .min(1, { message: "Description  is required" }),
  userID: z
    .string({ message: "User id must be a valid string" })
    .uuid({ message: "Must be a valid id" })
    .min(1, { message: "User id is required" }),
  location: z
    .string({ message: "Location must be a string" })
    .min(1, { message: "Location is required" }),
});
