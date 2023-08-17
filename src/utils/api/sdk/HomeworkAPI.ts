import {BASE_URL} from "@/utils/api/sdk/const";
import {FetchWithHeaders, IAPI} from "@/utils/api/sdk/sdk";
import {IHomeworkRequest, IHomework} from "@/types/backend/homework";

const HOMEWORK_SERVICE_BASE_URL = BASE_URL + "/homeworks-management"
const ALL_HOMEWORK_URL = HOMEWORK_SERVICE_BASE_URL + "/homeworks"

export class HomeworkAPI implements IAPI{

    getService(fetchWithHeaders: FetchWithHeaders) {

        return {
            getAllHomework(forTeacher: boolean, userId: number) {

                return fetchWithHeaders<Array<IHomework>>(ALL_HOMEWORK_URL + `?${forTeacher ? "creatorId" : "solverId"}=${userId}`)
            },
            getHomework(homeworkId: string) {
                return fetchWithHeaders<IHomework>(ALL_HOMEWORK_URL + `/${homeworkId}`)
            },

            createHomework(homework: IHomeworkRequest) {
                return fetchWithHeaders<>(ALL_HOMEWORK_URL, "POST", homework)
            },


        }
    }
}
