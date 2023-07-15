enum UserRole {
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
  userRole: UserRole;
};
