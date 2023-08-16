import {BASE_URL} from "@/utils/api/sdk/const";

const HOMEWORK_SERVICE_BASE_URL = BASE_URL + "/homewroks-management"
const HOMEWORKS_URL = HOMEWORK_SERVICE_BASE_URL + "/homeworks"

export class HomeworkAPI {

    getHomeworkService(fetchWithHeaders: (URL: string) => Promise<Response>) {

        return {
            async getAllHomework() {
                return await fetchWithHeaders(HOMEWORKS_URL)
            }
        }
    }
}
