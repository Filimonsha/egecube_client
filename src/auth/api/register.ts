import {UserBase} from "@/types/backend/user";
import {signIn} from "next-auth/react";

export async function registerUser(userData: UserBase): Promise<boolean> {
  const regRes = await fetch("http://localhost:8080/api/users/accounts", {
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
  return signRes != undefined && signRes.ok;
}