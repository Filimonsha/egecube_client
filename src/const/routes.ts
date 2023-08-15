export const BASE_URL = "http://localhost:8080/api/";
export const LECTURES_API_LISTENERS = "lectures-management/listeners";
export const LISTENER_LECTURES = "/lectures";
export const SUBJECTS_API_SUBJECTS = "/subjectsManagement/subjects";
export const SUBJECTS_API_PARTICIPANT_ID =
  "subjectsManagement/participants/participants";
export const USERS_API_ACCOUNTS = "users/accounts";
export const USERS_API_TOKENS = "/users/tokens";
export const USERS_API_ACCOUNTS_BY_EMAIL = USERS_API_ACCOUNTS + "?name=";
export const MAIN_ROUTE = "/";
export const REGISTER_ROUTE = "/register";
export const LOGIN_ROUTE = "/login";
export const PROFILE_ROUTE = "/profile";
export const PROFILE_HOMEWORK_ROUTE = `${PROFILE_ROUTE}/homework`;
export const PROFILE_SCHEDULE_ROUTE = `${PROFILE_ROUTE}/schedule`;
export const PROFILE_MATERIALS_ROUTE = `${PROFILE_ROUTE}/edu_materials`;

export const getLecturesByListenerIdRoute = (listenerId: number) =>
  LECTURES_API_LISTENERS + "/" + listenerId + LISTENER_LECTURES;

export const getParticipantByUserIdRoute = (userId: number) =>
  SUBJECTS_API_PARTICIPANT_ID + "/" + userId;

export const getUserByIdRoute = (userId: number) =>
  USERS_API_ACCOUNTS + "/" + userId;

export const getUserByEmailRoute = (userEmail: string) =>
  USERS_API_ACCOUNTS_BY_EMAIL + userEmail;
