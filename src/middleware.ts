import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      return token !== null;
    },
  },
});

export const config = { matcher: ["/homework", "/profile"] };
