"use client";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./calendar_theme.sass";
import ElementContainer from "@/components/profile/schedule/ElementContainer";
import { useGetAvailableLecturesByListenerIdQuery } from "@/redux/api/lecture/lectureApi";
import { useEffect, useState } from "react";
import { ScheduleEvent } from "@/types/schedule/scheduleEvent";

const localizer = momentLocalizer(moment);

const ClassesCalendar = () => {
  const { data, isLoading, isError } =
    useGetAvailableLecturesByListenerIdQuery(1);
  const [events, setEvents] = useState<Array<ScheduleEvent>>([]);

  useEffect(() => {
    let eventsList: Array<ScheduleEvent> = [];
    if (data) {
      data.forEach(lecture =>
        eventsList.push({
          title: lecture.name,
          start: new Date(lecture.startsAt),
          end: new Date(lecture.endsAt),
        }),
      );
    }
    setEvents(eventsList);
  }, [data]);

  return (
    <ElementContainer>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={isLoading || isError ? [] : events}
        style={{ height: 500 }}
      />
    </ElementContainer>
  );
};

export default ClassesCalendar;
