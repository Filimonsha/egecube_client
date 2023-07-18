import styles from "@/components/profile/schedule/schedule.module.css";
import UpcomingEvent from "@/components/profile/schedule/eventBlock/UpcomingEvent";
import ClassesCalendar from "@/components/profile/schedule/calendar/ClassesCalendar";
import InfoPanel from "@/components/profile/schedule/infoPanel/InfoPanel";
import ScheduleElement from "@/components/profile/schedule/ScheduleElement";

const layoutElements = [
    <InfoPanel />,
    <ClassesCalendar />,
    <UpcomingEvent />
]

const Schedule = () => {
  return (
    <div className={styles.scheduleContainer}>
        {layoutElements.map((element) =>
            <ScheduleElement>
                {element}
            </ScheduleElement>
        )}
    </div>
  );
};

export default Schedule;
