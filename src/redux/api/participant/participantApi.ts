import { getParticipantByUserIdRoute } from "@/const/routes";
import baseBackendApi from "@/redux/api/baseQuery";
import { Participant } from "@/types/backend/participant";

const participantApi = baseBackendApi.injectEndpoints({
  endpoints: (build) => ({
    getParticipantByUserId: build.query<Participant, number>({
      query: (userId) => getParticipantByUserIdRoute(userId),
    }),
  }),
});

export const { useGetParticipantByUserIdQuery } = participantApi;
