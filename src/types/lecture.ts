type Lecture = {
  id: number;
  name: string;
  description: string;
  startsAt: Date;
  endsAt: Date;
  listeners: Array<number>;
  flowSrc: string;
};
