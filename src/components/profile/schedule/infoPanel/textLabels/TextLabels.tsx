"use client";

import styles from "./labels.module.css";
import TextLabel from "@/components/profile/schedule/infoPanel/textLabels/labels/TextLabel";
import { useEffect } from "react";
import { useGetSubjectsQuery } from "@/redux/api/subjects/subjectApi";
import { Subject } from "@/types/backend/subject";
import { useGetParticipantByUserIdQuery } from "@/redux/api/participant/participantApi";
import Course from "@/types/backend/course";

const TextLabels = () => {
  const { data: participant, isLoading: participantIsLoading } =
    useGetParticipantByUserIdQuery(2);
  const { data: subjects, isLoading: subjectsIsLoading } =
    useGetSubjectsQuery();

  const printSubjects = (subjects: Array<Subject>) => {
    let str = "";
    if (subjects)
      subjects.forEach(
        (subject, index) =>
          (str += subject.name + (index == subjects.length - 1 ? "" : ", ")),
      );
    return str;
  };

  const printCourses = (courses: Array<Course>) => {
    let str = "";
    if (courses)
      courses.forEach(
        (course, index) =>
          (str += course + (index == courses.length - 1 ? "" : ", ")),
      );
    return str;
  };

  useEffect(() => {
    // console.log(participant);
  }, [participant]);

  return (
    <div className={styles.labelsContainer}>
      <TextLabel
        text={"Предметы: " + (subjectsIsLoading ? "" : printSubjects(subjects))}
      />
      <TextLabel
        text={
          "Группы: " +
          (participantIsLoading
            ? ""
            : printCourses(participant?.relatedCourses))
        }
      />
    </div>
  );
};

export default TextLabels;
