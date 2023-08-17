import {FetchWithHeaders, IAPI} from "@/utils/api/sdk/sdk";
import {BASE_URL} from "@/utils/api/sdk/const";
import {ICourse} from "@/types/backend/subject";

const SUBJECT_SERVICE_BASE_URL = BASE_URL + "/subjects-management"
const ALL_SUBJECTS_URL = SUBJECT_SERVICE_BASE_URL + "/subjects"
const getSubjectRoute = (subjectId: number) => `${ALL_SUBJECTS_URL}/${subjectId}`
const getCoursesRoute = (subjectId: number) => `${getSubjectRoute(subjectId)}/courses`
const COURSES_BY_SUBJECT_URL = ALL_SUBJECTS_URL + "/courses"


export class SubjectAPI implements IAPI {
    getService(fetchWithHeaders: FetchWithHeaders) {
        return {
            getCoursesBySubjectId(subjectId: number) {
                console.log(getCoursesRoute(subjectId))
                return fetchWithHeaders<Array<ICourse>>(getCoursesRoute(subjectId))
            }
        };
    }


}
