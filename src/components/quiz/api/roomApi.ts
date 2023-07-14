import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/games/quiz",
    prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json")
        return headers
    }
})

export type QueueRequest = {
    userId: number,
    roomId: number | undefined
}

export const roomApi = createApi({
    reducerPath: "roomApi",
    baseQuery: baseQuery,
    endpoints: (build) => ({
        standInQueue: build.query<number, QueueRequest>({
            query: (query) => ({
                url: "/rooms",
                method: "POST",
                body: query.userId
            })
        }),
        getOutOfQueue: build.query<number, QueueRequest>({
            query: (query) => ({
                url: `/rooms/${query.roomId}`,
                method: "DElETE",
                body: query.userId
            })
        })
    }),
});

export const {
    useLazyStandInQueueQuery,
    useLazyGetOutOfQueueQuery
} = roomApi