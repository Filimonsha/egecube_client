"use client"

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./calendar_theme.sass";
import ScheduleElement from "@/components/profile/schedule/ScheduleElement";

const localizer = momentLocalizer(moment);

const ClassesCalendar = () => (
  <ScheduleElement>
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </ScheduleElement>
);

export default ClassesCalendar;
