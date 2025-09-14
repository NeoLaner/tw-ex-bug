"use client";
import { useEffect } from "react";
import type { Path, UseFormReturn } from "react-hook-form";
import { toast } from "sonner";

type ServerState<T> =
  | {
      success?: false;
      type?: string;
      error?:
        | Array<{ fieldName: Path<T>; message: string | undefined }>
        | string;
    }
  | {
      success: true;
      data: object;
    };

/**
 * Custom hook to handle server-side error processing for forms
 * @param serverState - The server response state from useActionState
 * @param form - The form instance from useForm
 */
export function useServerErrorHandler<T extends object>(
  serverState: ServerState<T> | null | undefined,
  form: UseFormReturn<T>
) {
  useEffect(() => {
    if (serverState && !serverState?.success) {
      if (serverState.type === "input" && Array.isArray(serverState.error)) {
        serverState.error.forEach((err) => {
          if (err.message === undefined) return;
          form.setError(
            err.fieldName,
            { message: err.message },
            { shouldFocus: true }
          );
        });
      } else if (typeof serverState.error === "string") {
        toast.error(serverState.error);
      }
    }
  }, [serverState, form]);
}
