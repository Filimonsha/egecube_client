import baseBackendApi from "@/redux/api/baseQuery";
import {Lecture} from "@/types/backend/lecture";

const lectureApi = baseBackendApi.injectEndpoints({
  endpoints: (build) => ({
    getAvailableLecturesByListenerId: build.query<Array<Lecture>, number>({
      query: (listenerId) =>
        `lectures-management/listeners/${listenerId}/lectures`,
    }),
  }),
});

export const { useGetAvailableLecturesByListenerIdQuery } = lectureApi;
