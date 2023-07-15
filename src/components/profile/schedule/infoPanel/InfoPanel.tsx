import ScheduleElement from "@/components/profile/schedule/ScheduleElement";
import TextLabels from "@/components/profile/schedule/infoPanel/textLabels/TextLabels";
import CreateLectureButton from "@/components/profile/schedule/infoPanel/textLabels/createButton/CreateLectureButton";

const InfoPanel = () => {
  return (
    <ScheduleElement>
      <TextLabels />
      <CreateLectureButton />
    </ScheduleElement>
  );
};

export default InfoPanel;
