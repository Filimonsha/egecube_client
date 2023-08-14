import { User, UserBase } from "@/types/backend/user";
import baseBackendApi from "@/redux/api/baseQuery";
import { USERS_API_ACCOUNTS, USERS_API_ACCOUNTS_BY_EMAIL } from "@/const/routes";

const userAccountApi = baseBackendApi.injectEndpoints({
  endpoints: (build) => ({
    getUserById: build.query<User, number>({
      query: (userId) => USERS_API_ACCOUNTS + "/" + userId,
    }),
    getUserByEmail: build.query<User, string>({
      query: (userEmail) => USERS_API_ACCOUNTS_BY_EMAIL + userEmail
    }),
    createUser: build.mutation<number, UserBase>({
      query: (userBase) => ({
        url: USERS_API_ACCOUNTS,
        method: "POST",
        body: userBase,
      }),
    }),
  }),
});

export const { useGetUserByIdQuery, useCreateUserMutation, useGetUserByEmailQuery } = userAccountApi;
