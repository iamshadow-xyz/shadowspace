import React from "react";
import SubmitButton from "../utils/submit-button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "@/lib/auth";

export default function SignInButton() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google", {
            redirectTo: "/",
          });
        }}
      >
        <SubmitButton className="w-full" text="continue with Google" icon={<FcGoogle />} />
      </form>
    </div>
  );
}
