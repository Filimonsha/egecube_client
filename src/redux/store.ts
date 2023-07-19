import {combineReducers, configureStore} from "@reduxjs/toolkit";
import baseBackendApi from "@/redux/api/baseQuery";
import userSlice from "@/redux/slice/userBaseSlice";

const reducer = combineReducers({
  userBase: userSlice,
  [baseBackendApi.reducerPath]: baseBackendApi.reducer,
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseBackendApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
