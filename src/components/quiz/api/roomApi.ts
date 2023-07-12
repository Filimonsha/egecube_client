import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/games"
})

export const roomApi = createApi({
    reducerPath: "roomApi",
    baseQuery: baseQuery,
    endpoints: (build) => ({
        standInQueue: build.query<Number>({
            query: () => "/rooms",
            method: "POST"
        }),
        getOutOfQueue: build.query<Number>({
            query: (roomId) => `/rooms/${roomId}`,
            method: "DELETE"
        })
    }),
});

export const { use } = roomApi