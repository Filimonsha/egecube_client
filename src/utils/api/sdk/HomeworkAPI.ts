import {BASE_URL} from "@/utils/api/sdk/const";
import {FetchWithHeaders, IAPI} from "@/utils/api/sdk/sdk";
import {IHomeworkRequest, IHomework, ITask} from "@/types/backend/homework";

const HOMEWORK_SERVICE_BASE_URL = BASE_URL + "/homeworks-management"
const ALL_HOMEWORK_URL = HOMEWORK_SERVICE_BASE_URL + "/homeworks"
const getHomeworkRoute = (homeworkId:string) => `${ALL_HOMEWORK_URL}/${homeworkId}`

export class HomeworkAPI implements IAPI{

    getService(fetchWithHeaders: FetchWithHeaders) {

        return {
            getAllHomework(forTeacher: boolean, userId: number) {

                return fetchWithHeaders<Array<IHomework>>(ALL_HOMEWORK_URL + `?${forTeacher ? "creatorId" : "solverId"}=${userId}`)
            },
            getHomework(homeworkId: string) {
                return fetchWithHeaders<IHomework>(getHomeworkRoute(homeworkId))
            },

            createHomework(homework: IHomeworkRequest) {
                return fetchWithHeaders<IHomework>(ALL_HOMEWORK_URL, "POST", homework)
            },
            addTasksToHomework(homeworkId:string,tasks:Array<ITask>){
                return fetchWithHeaders<IHomework>(`${getHomeworkRoute(homeworkId)}/tasks`,'POST',tasks)
            }


        }
    }
}
