import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu"
import UserAvatar from "./user-avatar";
import { auth } from "@/lib/auth";
import SignOutButton from "../auth/signout";
import Link from "next/link";

export default async function UserDropdown() {
  const session = await auth()
  const user = session?.user
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar src={user?.image || ""} name={user?.name || ""} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Link href="/profile">Profile</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href="/settings">Settings</Link></DropdownMenuItem>
        <DropdownMenuItem><SignOutButton /></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
