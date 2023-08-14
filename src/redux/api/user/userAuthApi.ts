import baseBackendApi from "@/redux/api/baseQuery";
import { UserCredentials } from "@/types/backend/user";

const userAuthApi = baseBackendApi.injectEndpoints({
  endpoints: (build) => ({
    authorizeUser: build.mutation<void, UserCredentials>({
      query: (userCreds) => ({
        url: "/users/tokens",
        method: "POST",
        body: userCreds,
      }),
    }),
  }),
});

export const { useAuthorizeUserMutation } = userAuthApi;
