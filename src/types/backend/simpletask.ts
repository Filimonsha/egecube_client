export type SimpleTask = {
  subjectId: number,
  taskNum: number,
  desc: string,
  answers: Array<string>,
  rightAnswer: string
}

export type SimpleTaskDto = {
  id: string,
  subjectId: number,
  desc: string,
  answers: Array<String>
}