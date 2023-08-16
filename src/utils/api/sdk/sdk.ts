import getServerSessionWithOptions from "@/utils/api/getServerSessionWithOptions";
import {HomeworkAPI} from "@/utils/api/sdk/HomeworkAPI";


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

        return async (URL: string) => {
            const {apiToken} = await getServerSessionWithOptions()

            return (await fetch(URL, {
                headers: {
                    Authorization: `Bearer ${apiToken}`,
                }
            })).json()
        }
    }
}

const apiClient = new APIClient()

export default apiClient
