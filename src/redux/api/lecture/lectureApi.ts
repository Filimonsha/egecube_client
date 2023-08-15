import { getLecturesByListenerIdRoute } from "@/const/routes";
import baseBackendApi from "@/redux/api/baseQuery";
import { Lecture } from "@/types/backend/lecture";

const lectureApi = baseBackendApi.injectEndpoints({
  endpoints: (build) => ({
    getAvailableLecturesByListenerId: build.query<Array<Lecture>, number>({
      query: (listenerId) => getLecturesByListenerIdRoute(listenerId),
    }),
  }),
});

export const { useGetAvailableLecturesByListenerIdQuery } = lectureApi;
