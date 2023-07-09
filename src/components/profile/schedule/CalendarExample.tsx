"use client"

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./calendar_theme.sass";

const localizer = momentLocalizer(moment);

const CalendarExample = () => (
  <div>
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default CalendarExample;
