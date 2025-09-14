import { ChevronsUpDown } from "lucide-react";
import type { ButtonProps } from "react-day-picker";
import { SidebarMenuButton } from "../ui/sidebar";
import UserDetails from "../user/user-details";

export default function NavUserBtn({
  userData,
  ...props
}: {
  userData?: {
    email?: string | null;
    name?: string | null;
    image?: string | null;
  } | null;
  props?: ButtonProps;
}) {
  return (
    <SidebarMenuButton
      dir="ltr"
      size="lg"
      className="data-[stateopen]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      {...props}
    >
      <UserDetails userData={userData} />
      <ChevronsUpDown className="ml-auto size-4" />
    </SidebarMenuButton>
  );
}
