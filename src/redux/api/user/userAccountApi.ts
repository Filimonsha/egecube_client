import { User, UserBase } from "@/types/backend/user";
import baseBackendApi from "@/redux/api/baseQuery";

const userAccountApi = baseBackendApi.injectEndpoints({
  endpoints: (build) => ({
    getUserById: build.query<User, number>({
      query: (userId) => `users/accounts/${userId}`,
    }),
    getUserByEmail: build.query<User, string>({
      query: (userEmail) => `users/accounts?name=${userEmail}`
    }),
    createUser: build.mutation<number, UserBase>({
      query: (userBase) => ({
        url: "users/accounts",
        method: "POST",
        body: userBase,
      }),
    }),
  }),
});

export const { useGetUserByIdQuery, useCreateUserMutation, useGetUserByEmailQuery } = userAccountApi;
