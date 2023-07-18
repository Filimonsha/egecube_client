import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {rest_addr} from "@/components/quiz/api/addresses";
import {RoomPlayers} from "@/components/quiz/types";


const baseQuery = fetchBaseQuery({
    baseUrl: rest_addr,
    prepareHeaders: headers => {
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
    baseQuery,
    endpoints: (build) => ({
            standInQueue: build.query<RoomPlayers, QueueRequest>({
            query: (query) => ({
                url: "/rooms",
                method: "POST",
                body: query.userId
            })
        }),
        getOutOfQueue: build.query<RoomPlayers, QueueRequest>({
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