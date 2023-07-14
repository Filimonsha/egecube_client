import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userApi} from "@/redux/api/userApi";
import {roomApi} from "@/components/quiz/api/roomApi";


const reducer =  combineReducers({
    [userApi.reducerPath]: userApi.reducer,
    [roomApi.reducerPath]:roomApi.reducer
})


const store = configureStore({
        reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat( userApi.middleware, roomApi.middleware )
})

export default store