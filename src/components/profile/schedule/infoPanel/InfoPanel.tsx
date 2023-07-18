import ScheduleElement from "@/components/profile/schedule/ScheduleElement";
import TextLabels from "@/components/utils/textLabels/TextLabels";
import CreateLectureButton from "@/components/utils/textLabels/createButton/CreateLectureButton";

const InfoPanel = () => {
  return (
    <ScheduleElement>
      <TextLabels />
      <CreateLectureButton />
    </ScheduleElement>
  );
};

export default InfoPanel;
