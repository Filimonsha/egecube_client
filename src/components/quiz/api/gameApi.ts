import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {rest_addr} from "@/components/quiz/api/addresses";
import {createApi} from "@reduxjs/toolkit/query/react";
import {GameAction, GameActionRequest, GameState, StartRequest} from "@/components/quiz/types/types";

const baseQuery = fetchBaseQuery({
    baseUrl: rest_addr,
    prepareHeaders: headers => {
        headers.set("Content-Type", "application/json")
        return headers
    }
})

export const gameApi = createApi({
    reducerPath: "gameApi",
    baseQuery,
    endpoints: (build) => ({
        getGameState: build.query<GameState, string>({
            query: (gameId) => ({
                url: `/${gameId}`,
                method: "GET"
            })
        }),
        startGame: build.query<GameState, StartRequest>({
            query: (request) => ({
                url: `/${request.gameId}`,
                method: "POST",
                body: request.userId
            })
        }),
        postAnswer: build.query<GameState, GameActionRequest>({
            query: (request) => ({
                url: `/${request.gameId}`,
                method: "POST",
                body: request.action
            })
        })
    })
})

export const {
    useLazyGetGameStateQuery,
    useLazyStartGameQuery,
    useLazyPostAnswerQuery
} = gameApi