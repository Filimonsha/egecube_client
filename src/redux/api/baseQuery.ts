import { BASE_URL } from "@/const/routes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});
const reducerPath = "userApi";

const baseBackendApi = createApi({
  reducerPath: reducerPath,
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

export default baseBackendApi;
