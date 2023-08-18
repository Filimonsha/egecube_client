import NextAuth, {AuthOptions, JWT, User} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {AuthResponse, UserSession} from "@/types/backend/user";
export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: {label: 'email', type: 'email', required: true},
        password: {label: 'password', type: 'password', required: true},
      },

      authorize: async function (credentials): Promise<UserSession | null> {
        // login through back
        if (typeof credentials !== "undefined") {
          const res = await fetch("http://localhost:8080/api/users/tokens/refresh", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userMail: credentials.email,
              password: credentials.password,
            }),
          });

          const response = await res.json() as AuthResponse;
          if (!res.ok) return null

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

    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    // @ts-ignore
    async jwt({ token, user }) {
      if (typeof user !== "undefined") {
        // user has just signed in so the user object is populated
        return user as unknown as JWT;
      }
      return token;
    },
    async session({ session, token}) {
      session.user = Object.keys(token).reduce(
        (p, c) => {
          // strip unnecessary properties
          if (c !== "iat" && c !== "exp" && c !== "jti" && c !== "apiToken") {
            return {...p, [c]: token[c]};
          } else {
            return p;
          }
        },
        {},
      );

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
