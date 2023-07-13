import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/games/quiz",
    prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json")
        return headers
    }
})

export const roomApi = createApi({
    reducerPath: "roomApi",
    baseQuery: baseQuery,
    endpoints: (build) => ({
        standInQueue: build.query<number, number>({
            query: (userId) => ({
                url: "/rooms",
                method: "POST",
                body: userId
            })
        }),
        getOutOfQueue: build.query<number, number>({
            query: (roomId) => ({
                url: `/rooms/${roomId}`,
                method: "DElETE"
            })
        })
    }),
});

export const {
    useLazyStandInQueueQuery,
    useLazyGetOutOfQueueQuery
} = roomApi