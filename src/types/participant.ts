import { Subject } from "@/types/subject";
import Course from "@/types/course";

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
