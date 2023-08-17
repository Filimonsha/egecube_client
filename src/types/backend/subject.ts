export type Subject = {
    id: number;
    name: string;
    description: string;
    courses: Array<number>;
    participants: Array<number>;
};

export interface ICourse {
    id: number;
    name: string;
    subject: number;
    participants?: (number)[] | null;
}
