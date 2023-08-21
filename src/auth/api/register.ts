import {UserBase} from "@/types/backend/user";
import {signIn} from "next-auth/react";
import {USER_ACCOUNTS_ENDPOINT} from "@/auth/consts/routes";

export async function registerUser(userData: UserBase): Promise<boolean> {
  const regRes = await fetch(USER_ACCOUNTS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!regRes.ok) return false

  const signRes = await signIn("credentials", {
    email: userData.userMail,
    password: userData.password
  })
  return signRes !== undefined && signRes.ok;
}