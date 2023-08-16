export type Homework =  {
    _id: string;
    title: string;
    subjectId: number;
    creatorId: string;
    description: string;
    deadline: string;
    tasks?: (null)[] | null;
    solvers?: (number)[] | null;
    answers?: (null)[] | null;
}

