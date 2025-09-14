import { cn } from "@neolaner/ui/lib/utils";
import UserAvatar from "./user-avatar";

export default function UserDetails({
  className,
  userData,
  showEmailOrId,
}: {
  className?: string;
  userData?: {
    email?: string | null;
    publicId?: string | null;
    name?: string | null;
    image?: string | null;
  } | null;
  showEmailOrId?: "email" | "id";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 py-1.5 text-left text-sm",
        className
      )}
    >
      <UserAvatar userData={{ image: userData?.image, name: userData?.name }} />
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate text-left font-semibold">
          {userData?.name}
        </span>
        <span className="truncate text-left text-xs text-muted-foreground">
          {showEmailOrId === "email"
            ? userData?.email
            : `@${userData?.publicId}`}
        </span>
      </div>
    </div>
  );
}
