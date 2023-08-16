import NextAuth, {DefaultSession} from "next-auth";

declare module "next-auth" {
    interface User {
        userId: number
        userMail: string
        userPhone: string
        firstName: string
        lastName: string
        accountSuspended: boolean
        userRole: string
    }

    interface Session {
        user: User
        apiToken: string
    }

    interface JWT {
        apiToken: string
    }


}
