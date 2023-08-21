import {ApplicationUser} from "@/types/backend/user";

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

  interface JWT {
    accessToken: string,
    refreshToken: string
  }
}
