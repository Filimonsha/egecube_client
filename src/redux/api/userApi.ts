import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from "@/types/user";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/api/users/",
});

// type User = {
//   userId: number;
//   userMail: string;
//   userPhone: string;
//   firstName: string;
//   lastName: string;
//   accountSuspended: boolean;
//   userRole: UserRole;
// };
//
// enum UserRole {}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getUserById: build.query<User, number>({
      query: (userId) => `${userId}`,
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;
