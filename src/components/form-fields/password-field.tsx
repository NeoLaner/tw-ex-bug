import { loginSchema } from "@workspace/shared/schema";
import type { ReactNode } from "react";
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

export function PasswordField({
  form,
  forgetPass,
}: {
  form: UseFormReturn<z.infer<typeof loginSchema>>;
  forgetPass?: ReactNode;
}) {
  return (
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem className="flex flex-col gap-1">
          <div className="flex items-center">
            <FormLabel htmlFor="password">Password</FormLabel>
            {forgetPass}
          </div>
          <FormControl>
            <Input type="password" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
