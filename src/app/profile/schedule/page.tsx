import styles from "@/components/profile/schedule/schedule.module.css";
import UpcomingEvent from "@/components/profile/schedule/eventBlock/UpcomingEvent";
import ClassesCalendar from "@/components/profile/schedule/calendar/ClassesCalendar";
import InfoPanel from "@/components/profile/schedule/infoPanel/InfoPanel";
import ElementContainer from "@/components/profile/schedule/ElementContainer";

const layoutElements = [
    <InfoPanel />,
    <ClassesCalendar />,
    <UpcomingEvent />
]

const Schedule = () => {
  return (
    <div className={styles.scheduleContainer}>
        {layoutElements.map((element) =>
            <ElementContainer>
                {element}
            </ElementContainer>
        )}
    </div>
  );
};

export default Schedule;
