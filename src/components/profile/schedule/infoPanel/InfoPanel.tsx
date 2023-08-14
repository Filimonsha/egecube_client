import ElementContainer from "@/components/profile/schedule/ElementContainer";
import TextLabels from "@/components/utils/textLabels/TextLabels";
import CreateLectureButton from "@/components/utils/textLabels/createButton/CreateLectureButton";

const InfoPanel = () => {
  return (
    <ElementContainer>
      <TextLabels />
      <CreateLectureButton />
    </ElementContainer>
  );
};

export default InfoPanel;
