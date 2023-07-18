import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userApi} from "@/redux/api/userApi";
import {roomApi} from "@/components/quiz/api/roomApi";
import {gameApi} from "@/components/quiz/api/gameApi";


const reducer = combineReducers({
    [userApi.reducerPath]: userApi.reducer,
    [roomApi.reducerPath]: roomApi.reducer,
    [gameApi.reducerPath]: gameApi.reducer
})


const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(
            userApi.middleware, roomApi.middleware, gameApi.middleware
        )
})

export default store