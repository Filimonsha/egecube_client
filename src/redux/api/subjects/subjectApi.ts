import baseBackendApi from "@/redux/api/baseQuery";
import { Subject } from "@/types/backend/subject";

const subjectApi = baseBackendApi.injectEndpoints({
  endpoints: build => ({
    getSubjects: build.query<Array<Subject>, void>({
      query: () => "/subjectsManagement/subjects",
    }),
  }),
});

export const { useGetSubjectsQuery } = subjectApi;
