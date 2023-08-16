export enum USER_ROLE {
  User = "USER",
  Admin = "ADMIN",
  Teacher = "TEACHER",
  Mentor = "MENTOR",
}

export type User = {
  userId: number;
  userMail: string;
  userPhone: string;
  firstName: string;
  lastName: string;
  accountSuspended: boolean;
  userRole: USER_ROLE;
};

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
