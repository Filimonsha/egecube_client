import { combineReducers, configureStore } from "@reduxjs/toolkit";
import baseBackendApi from "@/redux/api/baseQuery";
import userCredentialsReducer from "@/redux/slice/userCredentialsSlice";

const reducer = combineReducers({
  user: userCredentialsReducer,
  [baseBackendApi.reducerPath]: baseBackendApi.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseBackendApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
