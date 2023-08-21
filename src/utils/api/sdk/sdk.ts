import getServerSessionWithOptions from "@/utils/api/getServerSessionWithOptions";
import {HomeworkAPI} from "@/utils/api/sdk/HomeworkAPI";
import {SubjectAPI} from "@/utils/api/sdk/SubjectAPI";
import {getSession} from "next-auth/react";

export type FetchWithHeaders = <T,K>(URL: string, method?: string, body?: any) => Promise<T | undefined>

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
            console.log(body,'ds')
            try {
                const response = await fetch(URL, {
                    headers: {
                        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyUmlnaHRzIjoiVVNFUiIsInR5cGUiOiJhY2Nlc3MiLCJ1c2VySWQiOiIxIiwic3ViIjoiZmlsYmVyb2xAbWFpbC5jb20iLCJpYXQiOjE2OTI0NTc4NTIsImV4cCI6MTY5MjQ1ODQ1Mn0.9wemSBcdQDL5iu6fs7h6RUuiS5Km7EQitUYL7fA0DIdFYx0SoG6_bIv-pH5s3usLv0o3GSYeujFEJFTV0RdbZw"}`,
                        "Content-Type": "application/json"
                    },
                    method,
                    body:JSON.stringify(body)
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
