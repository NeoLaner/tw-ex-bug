import { loginSchema } from "@workspace/shared/schema";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export function EmailField({
  form,
}: {
  form: UseFormReturn<z.infer<typeof loginSchema>>;
}) {
  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem className="flex flex-col gap-1">
          <FormLabel htmlFor="email">Email</FormLabel>

          <FormControl>
            <Input placeholder="m@example.com" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
