import { SUBJECTS_API_PARTICIPANT_ID } from "@/const/routes";
import baseBackendApi from "@/redux/api/baseQuery";
import { Participant } from "@/types/backend/participant";

const participantApi = baseBackendApi.injectEndpoints({
  endpoints: (build) => ({
    getParticipantByUserId: build.query<Participant, number>({
      query: (userId) => SUBJECTS_API_PARTICIPANT_ID + "/" + userId,
    }),
  }),
});

export const { useGetParticipantByUserIdQuery } = participantApi;
