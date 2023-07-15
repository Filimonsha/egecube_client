import { User } from "@/types/backend/user";
import baseBackendApi from "@/redux/api/baseQuery";

const userApi = baseBackendApi.injectEndpoints({
  endpoints: (build) => ({
    getUserById: build.query<User, number>({
      query: (userId) => `users/accounts/${userId}`,
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;
