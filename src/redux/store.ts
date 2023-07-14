import { configureStore } from "@reduxjs/toolkit";
import baseBackendApi from "@/redux/api/baseQuery";

const store = configureStore({
  reducer: {
    [baseBackendApi.reducerPath]: baseBackendApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseBackendApi.middleware),
});

export default store;
