import { z } from "zod";

export const SlotMachineSchema = z.object({
  id: z.string(),
  name: z.string(),
  payoutRate: z.number(),
});

export type SlotMachine = z.infer<typeof SlotMachineSchema>;