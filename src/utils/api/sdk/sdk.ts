import getServerSessionWithOptions from "@/utils/api/getServerSessionWithOptions";
import {HomeworkAPI} from "@/utils/api/sdk/HomeworkAPI";
import {Homework} from "@/types/backend/homework";

export type FetchWithHeaders = <T>(URL: string, method?: string, body?: any) => Promise<T | undefined>

class APIClient {
    private currentApiToken: null | string = null
    private homeworkAPI = new HomeworkAPI()

    callApiWithSession() {


        // Object.keys( ) => services[key] = Clazz(key)
        return {
            homeworkService: this.homeworkAPI.getHomeworkService(this.fetchWithHeaders()),

        }
    }


    private fetchWithHeaders() {

        const fetchCallback: FetchWithHeaders = async (URL: string, method: string = "GET", body?: any) => {
            const {apiToken} = await getServerSessionWithOptions()
            try {
                const response = await fetch(URL, {
                    headers: {
                        Authorization: `Bearer ${apiToken}`,
                    },
                    method,
                    body
                })
            } catch {
                return undefined
            }
        }

        return fetchCallback
    }
}

const apiClient = new APIClient()

export default apiClient
