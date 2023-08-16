import {BASE_URL} from "@/utils/api/sdk/const";
import {FetchWithHeaders} from "@/utils/api/sdk/sdk";
import {Homework} from "@/types/backend/homework";

const HOMEWORK_SERVICE_BASE_URL = BASE_URL + "/homewroks-management"
const ALL_HOMEWORK_URL = HOMEWORK_SERVICE_BASE_URL + "/homeworks"

export class HomeworkAPI {

    getHomeworkService(fetchWithHeaders: FetchWithHeaders) {

        return {
            getAllHomework(forTeacher: boolean, userId: number) {

                return fetchWithHeaders<Array<Homework>>(ALL_HOMEWORK_URL + `?${forTeacher ? "creatorId" : "solverId"}=${userId}`)
            },
            getHomework(homeworkId: string) {
                return fetchWithHeaders<Homework>(ALL_HOMEWORK_URL + `/${homeworkId}`)
            },

            createHomework(homework: Homework) {
                return fetchWithHeaders<>(ALL_HOMEWORK_URL, "POST", homework)
            },

        }
    }
}
