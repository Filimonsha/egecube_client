import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "name", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        if (typeof credentials !== "undefined") {
          console.log(credentials);
          const res = await fetch("http://localhost:8080/api/users/tokens", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userMail: credentials.email,
              password: credentials.password,
            }),
          });

          const response = await res.json();
          if (!res.ok) {
            return null;
          }
          //TODO
          const userRequest = await fetch(
            `http://localhost:8080/api/users/accounts/${1}`,
            {
              headers: { Authentication: `Bearer ${response.token}` },
            },
          );
          console.log("a", response);
          const user = await userRequest.json();
          console.log("user", user);
          if (userRequest.ok) {
            return { ...user, apiToken: response.token };
          }

          return null;
        } else {
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (typeof user !== "undefined") {
        // user has just signed in so the user object is populated
        return user as JWT;
      }
      return token;
    },
    async session({ session, token, user }) {
      const sanitizedToken: { [key: string]: any } = Object.keys(token).reduce(
        (p, c) => {
          // strip unnecessary properties
          if (c !== "iat" && c !== "exp" && c !== "jti" && c !== "apiToken") {
            return { ...p, [c]: token[c] };
          } else {
            return p;
          }
        },
        {},
      );

      session.apiToken = token.apiToken;
      session.user = sanitizedToken;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
