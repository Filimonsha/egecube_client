import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {game_actions, rest_addr} from "@/components/quiz/api/addresses";
import {createApi} from "@reduxjs/toolkit/query/react";
import {StartRequest} from "@/components/quiz/types/types";
import {GameState} from "@/components/quiz/types/gameStates";
import {GameActionRequest} from "@/components/quiz/types/gameActions";

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
        postAction: build.query<GameState, GameActionRequest>({
            query: (request) => ({
                url: `/${request.gameId}/${game_actions}`,
                method: "POST",
                body: request.action
            })
        })
    })
})

export const {
    useLazyGetGameStateQuery,
    useLazyStartGameQuery,
    useLazyPostActionQuery
} = gameApi