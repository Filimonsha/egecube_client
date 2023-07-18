import { User, UserBase } from "@/types/backend/user";
import baseBackendApi from "@/redux/api/baseQuery";

const userApi = baseBackendApi.injectEndpoints({
  endpoints: (build) => ({
    getUserById: build.query<User, number>({
      query: (userId) => `users/accounts/${userId}`,
    }),
    createUser: build.mutation<UserBase, number>({
      query: (userBase) => ({
        url: "users/accounts",
        method: "POST",
        body: userBase,
      }),
    }),
  }),
});

export const { useGetUserByIdQuery, useCreateUserQuery } = userApi;
