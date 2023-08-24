import {BASE_URL} from "@/utils/api/sdk/const";
import {FetchWithHeaders, IAPI} from "@/utils/api/sdk/sdk";
import {SimpleTask, SimpleTaskDto} from "@/types/backend/simpletask";

const TASKS_SERVICE_URL = BASE_URL + "/tasks"
const SUBJECT_TASKS_URL = TASKS_SERVICE_URL + "/subject"

const addCountParameter = (url: string, count: number) => {
  return url + `?count=${count}`
}

export class SimpleTaskAPI implements IAPI {
  getService(fetchWithHeaders: FetchWithHeaders) {
    return {
      getNumberOfTasks(count: number) {
        return fetchWithHeaders<Array<SimpleTaskDto>>(addCountParameter(TASKS_SERVICE_URL, count))
      },
      getNumberOfSubjectTasks(subject: number, count: number) {
        return fetchWithHeaders<Array<SimpleTaskDto>>(addCountParameter(SUBJECT_TASKS_URL + `/${subject}`, count))
      },
      addTaskToRepository(task: SimpleTask) {
        return fetchWithHeaders<SimpleTaskDto>(TASKS_SERVICE_URL, "POST", task)
      }
    }
  }

}