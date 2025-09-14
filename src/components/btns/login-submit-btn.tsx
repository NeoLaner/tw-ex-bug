import type { loginSchema } from "@workspace/shared/schema";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";
import { SubmitBtn } from "./submit-btn";

export function LoginSubmitBtn({
  form,
}: {
  form: UseFormReturn<z.infer<typeof loginSchema>>;
}) {
  return (
    <SubmitBtn
      disabled={!form.formState.isValid}
      pendingMessage="Login you in..."
      type="submit"
      className="w-full"
    >
      Login
    </SubmitBtn>
  );
}
