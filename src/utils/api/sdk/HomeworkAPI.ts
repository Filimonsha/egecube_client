import {BASE_URL} from "@/utils/api/sdk/const";

const HOMEWORK_SERVICE_BASE_URL = BASE_URL + "/homewroks-management"
const ALL_HOMEWORK_URL = HOMEWORK_SERVICE_BASE_URL + "/homeworks"

export class HomeworkAPI {

    getHomeworkService(fetchWithHeaders: (URL: string) => Promise<Response>) {

        return {
            getAllHomework(creatorId: number) {
                console.log(ALL_HOMEWORK_URL + `?creatordId=${creatorId}`)
                return fetchWithHeaders(ALL_HOMEWORK_URL + `?creatorId=${creatorId}`)
            },
            getHomework(homeworkId: string) {
                return fetchWithHeaders(ALL_HOMEWORK_URL + `/${homeworkId}`)
            },

        }
    }
}
