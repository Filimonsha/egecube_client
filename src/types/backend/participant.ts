import { Subject } from "@/types/backend/subject";
import Course from "@/types/backend/course";

enum ParticipantRole {}

export type Participant = {
  id: number;
  name: string;
  secondName: string;
  email: string;
  participantRole: ParticipantRole;
  relatedSubjects: Array<Subject>;
  relatedCourses: Array<Course>;
};
