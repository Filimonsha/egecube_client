import { BASE_URL } from "@/utils/api/sdk/const";
import { FetchWithHeaders, IAPI } from "@/utils/api/sdk/sdk";
import {
    IHomeworkRequest,
    IHomework,
    ITaskRequest,
    IHomeworkAnswer,
    ISolver
} from "@/types/backend/homework-management/homework";

const HOMEWORK_SERVICE_BASE_URL = BASE_URL + "/homeworks-management";
const ALL_HOMEWORK_URL = HOMEWORK_SERVICE_BASE_URL + "/homeworks";
const getHomeworkRoute = (homeworkId: string) => `${ALL_HOMEWORK_URL}/${homeworkId}`;

const ALL_SOLVERS = HOMEWORK_SERVICE_BASE_URL + "/solvers";
const getSolverRoute = (solverId: number) => `${ALL_SOLVERS}/${solverId}`;
const getAllUserHomework = (solverId: number, subjectId: number) => `${getSolverRoute(solverId)}/homeworks?subjectId=${subjectId}`;
const getAllUserHomeworkAnswers = (solverId: number) => `${getSolverRoute(solverId)}/answers`;

export class HomeworkServiceAPI implements IAPI {

    getService(fetchWithHeaders: FetchWithHeaders) {

        return {
            getAllHomework(userId: number) {
                return fetchWithHeaders<Array<IHomework>>(ALL_HOMEWORK_URL + `creatorId${userId}`);
            },
            getHomework(homeworkId: string) {
                return fetchWithHeaders<IHomework>(getHomeworkRoute(homeworkId));
            },
            createHomework(homework: IHomeworkRequest) {
                return fetchWithHeaders<IHomework>(ALL_HOMEWORK_URL, "POST", homework);
            },
            getSolverAllHomework(solverId: number, subjectId: number) {
                return fetchWithHeaders<Array<IHomework>>(getAllUserHomework(solverId, subjectId));
            },
            getSolverHomeworkAnswers(solverId: number) {
                return fetchWithHeaders<Array<IHomeworkAnswer>>(getAllUserHomeworkAnswers(solverId));
            },
            addTasksToHomework(homeworkId: string, tasks: Array<ITaskRequest>) {
                return fetchWithHeaders<IHomework>(`${getHomeworkRoute(homeworkId)}/tasks`, "POST", tasks);
            },
            getSolverById(solverId){
                return fetchWithHeaders<ISolver>(getSolverRoute(solverId))
            }

        };
    }
}
