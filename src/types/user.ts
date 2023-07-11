enum UserRole {
  User,
  Admin,
  Teacher,
  Mentor
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
