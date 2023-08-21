import NextAuth, {AuthOptions, JWT} from "next-auth";
import {credentialsProvider} from "@/auth/providers/credentialsProvider";

export const authOptions: AuthOptions = {
  providers: [ credentialsProvider ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (typeof user !== "undefined") {
        // user has just signed in so the user object is populated
        return user as unknown as JWT;
      }
      if (trigger === "update") {
        console.log("token",token)
        console.log("session",session)
        return {...token, ...session }
      }
      return token;
    },
    async session({ session, token}) {
      session.user = Object.keys(token).reduce(
        (p, c) => {
          // strip unnecessary properties
          if (c !== "iat" && c !== "exp" && c !== "jti") {
            return {...p, [c]: token[c]};
          } else return p
        },
        {},
      );
      return session;
    },
  },
  pages: {
    signIn: "/signin"
  }
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
