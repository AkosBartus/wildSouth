import { z } from "zod"

export const UserSchema = z.object({
    id: z.string(),
    name: z.string(),
    balance: z.number()
})

export type User = z.infer<typeof UserSchema>