import { configureStore } from "@reduxjs/toolkit";
import baseBackendApi from "@/redux/api/baseQuery";
import userSlice from "@/redux/slice/userBaseSlice";

const store = configureStore({
  reducer: {
    userBase: userSlice,
    [baseBackendApi.reducerPath]: baseBackendApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseBackendApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
