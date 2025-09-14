import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function UserAvatar({
  userData,
}: {
  className?: string;
  userData?: { image?: string | null; name?: string | null };
}) {
  return (
    <Avatar className="h-8 w-8 rounded-lg">
      <AvatarImage src={userData?.image ?? ""} alt={userData?.name ?? ""} />
      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
    </Avatar>
  );
}
