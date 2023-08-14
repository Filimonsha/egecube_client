import { SUBJECTS_API_SUBJECTS } from "@/const/routes";
import baseBackendApi from "@/redux/api/baseQuery";
import { Subject } from "@/types/backend/subject";

const subjectApi = baseBackendApi.injectEndpoints({
  endpoints: (build) => ({
    getSubjects: build.query<Array<Subject>, void>({
      query: () => SUBJECTS_API_SUBJECTS,
    }),
  }),
});

export const { useGetSubjectsQuery } = subjectApi;
