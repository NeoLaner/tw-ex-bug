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

import { productSchema } from "@workspace/shared/schema/product-schema";

export function ProductTitleField({
  form,
}: {
  form: UseFormReturn<z.infer<typeof productSchema>>;
}) {
  return (
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem className="flex flex-col gap-1">
          <FormLabel htmlFor="email">Product Title</FormLabel>
          <FormControl>
            <Input placeholder="Enter product title..." {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
