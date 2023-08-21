import baseBackendApi from "@/redux/api/baseQuery";
import { Participant } from "@/types/backend/participant";

const participantApi = baseBackendApi.injectEndpoints({
  endpoints: build => ({
    getParticipantByUserId: build.query<Participant, number>({
      query: userId => `subjectsManagement/participants/participants/${userId}`,
    }),
  }),
});

export const { useGetParticipantByUserIdQuery } = participantApi;
