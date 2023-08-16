import getServerSessionWithOptions from "@/utils/api/getServerSessionWithOptions";
import {HomeworkAPI} from "@/utils/api/sdk/HomeworkAPI";


class APIClient {
    private currentApiToken: null | string = null
    private homeworkAPI = new HomeworkAPI()

    async callApiWithSession() {
        const {apiToken} = await getServerSessionWithOptions()
        console.log("apitoken", apiToken)
        this.currentApiToken = apiToken

        // Object.keys( ) => services[key] = Clazz(key)
        return {
            getHomeworkService: () => this.homeworkAPI.getHomeworkService(this.fetchWithHeaders()),

        }
    }


    private fetchWithHeaders() {
        const token = this.currentApiToken
        console.log("from fetch", token)
        return (URL: string) => fetch(URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }
}

const apiClient = new APIClient()

export default apiClient
