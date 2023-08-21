import Credentials from "next-auth/providers/credentials";
import {AuthResponse, UserSession} from "@/types/backend/user";
import {User} from "next-auth";
import {REFRESH_TOKEN_ENDPOINT} from "@/auth/consts/routes";

export const credentialsProvider = Credentials({
  name: "credentials",
  // TODO проставить тип, Вадим!!
  credentials: {
    email: {label: 'email', type: 'email', required: true},
    password: {label: 'password', type: 'password', required: true},
  },
  async authorize(credentials): Promise<UserSession | null> {
    // signing through back
    if (typeof credentials !== "undefined") {
      const res = await fetch(REFRESH_TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userMail: credentials.email,
          password: credentials.password,
        }),
      });
      if (!res.ok) return null
      const response = await res.json() as AuthResponse;

      const session = {
        ...response.userData as User,
        accessToken: response.accessToken,
        refreshToken: response.refreshToken
      } as UserSession
      console.log(session)

      return session
    } else {
      return null;
    }
  }

})
