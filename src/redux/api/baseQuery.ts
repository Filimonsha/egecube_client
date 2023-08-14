import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/api/",
});
const reducerPath = "userApi";

const baseBackendApi = createApi({
  reducerPath: reducerPath,
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

export default baseBackendApi;
