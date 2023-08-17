import getServerSessionWithOptions from "@/utils/api/getServerSessionWithOptions";
import {HomeworkAPI} from "@/utils/api/sdk/HomeworkAPI";
import {SubjectAPI} from "@/utils/api/sdk/SubjectAPI";
import {getSession} from "next-auth/react";

export type FetchWithHeaders = <T>(URL: string, method?: string, body?: any) => Promise<T | undefined>

export interface IAPI {
    getService(fetchWithHeaders: FetchWithHeaders): { [key: string]: (...args) => Promise<any> }
}

class APIClient {
    private currentApiToken: null | string = null
    private homeworkAPI = new HomeworkAPI()
    private subjectAPI = new SubjectAPI()

    callApiWithSession(server:boolean = true) {


        // Object.keys( ) => services[key] = Clazz(key)
        return {
            homeworkService: this.homeworkAPI.getService(this.fetchWithHeaders(server)),
            subjectService: this.subjectAPI.getService(this.fetchWithHeaders(server))
        }
    }


    private fetchWithHeaders(server:boolean) {

        const fetchCallback: FetchWithHeaders = async (URL: string, method: string = "GET", body?: any) => {

            const {apiToken} = server ? await getServerSessionWithOptions() : await getSession()
            console.log(apiToken,'ds')
            try {
                const response = await fetch(URL, {
                    headers: {
                        Authorization: `Bearer ${apiToken}`,
                    },
                    method,
                    body
                })
                return await response.json()
            } catch (e){
                console.error(e,"error")
                return undefined
            }
        }

        return fetchCallback
    }
}

const apiClient = new APIClient()

export default apiClient
