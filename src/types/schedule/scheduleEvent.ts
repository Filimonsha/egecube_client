export type ScheduleEvent = {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  resource?: any;
};
