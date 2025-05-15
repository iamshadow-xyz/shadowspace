import React from "react";
import { Button } from "../ui/button";
import SubmitButton from "../utils/submit-button";
import { LogOut } from "lucide-react";
import { signOut } from "@/lib/auth";

export default function SignOutButton() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <SubmitButton text="Sign Out" icon={<LogOut />} variant="destructive" />
      </form>
    </div>
  );
}
