import {JWT, User} from "next-auth";

export enum USER_ROLE {
  User = "USER",
  Admin = "ADMIN",
  Teacher = "TEACHER",
  Mentor = "MENTOR",
}

export type ApplicationUser = {
  userId: number;
  userMail: string;
  userPhone: string;
  firstName: string;
  lastName: string;
  accountSuspended: boolean;
  userRole: USER_ROLE;
};

export type AuthResponse = {
  accessToken: string,
  refreshToken: string,
  userData: ApplicationUser | null
}

export type UserSession = User & JWT

export type UserBase = {
  userMail: string;
  userPhone: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type UserCredentials = {
  userMail: string;
  password: string;
};
