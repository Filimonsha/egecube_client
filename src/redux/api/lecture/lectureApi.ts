import { LECTURES_API_LISTENERS, LISTENER_LECTURES } from "@/const/routes";
import baseBackendApi from "@/redux/api/baseQuery";
import { Lecture } from "@/types/backend/lecture";

const lectureApi = baseBackendApi.injectEndpoints({
  endpoints: (build) => ({
    getAvailableLecturesByListenerId: build.query<Array<Lecture>, number>({
      query: (listenerId) =>
        LECTURES_API_LISTENERS + "/" + listenerId + LISTENER_LECTURES,
    }),
  }),
});

export const { useGetAvailableLecturesByListenerIdQuery } = lectureApi;
