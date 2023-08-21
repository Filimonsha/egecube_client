import getServerSessionWithOptions from "@/utils/api/getServerSessionWithOptions";
import { HomeworkAPI } from "@/utils/api/sdk/HomeworkAPI";
import { SubjectAPI } from "@/utils/api/sdk/SubjectAPI";
import { getSession } from "next-auth/react";
import {UserSession} from "@/types/backend/user";
import {Session} from "next-auth";

export type FetchWithHeaders = <T>(
  URL: string,
  method?: string,
  body?: any,
) => Promise<T | undefined>;

export interface IAPI {
  getService(fetchWithHeaders: FetchWithHeaders): {
    [key: string]: (...args: any) => Promise<any>;
  };
}

class APIClient {
  private homeworkAPI = new HomeworkAPI();
  private subjectAPI = new SubjectAPI();

  callApiWithSession(server: boolean = true) {
    return {
      homeworkService: this.homeworkAPI.getService(this.fetchWithHeaders(server)),
      subjectService: this.subjectAPI.getService(this.fetchWithHeaders(server)),
    };
  }

  private fetchWithHeaders(server: boolean) {
    const fetchCallback: FetchWithHeaders = async (
      URL: string,
      method: string = "GET",
      body?: any,
    ) => {
      const { user } = server
        ? await getServerSessionWithOptions()
        : await getSession() as Session

      try {
        const response = await fetch(URL, {
          headers: {
            Authorization: `Bearer ${(user! as UserSession).accessToken}`,
          },
          method,
          body,
        });
        return await response.json();
      } catch (e) {
        return undefined;
      }
    };

    return fetchCallback;
  }
}

const apiClient = new APIClient();

export default apiClient;
