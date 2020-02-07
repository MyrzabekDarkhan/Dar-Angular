export interface Student {
  id?: string;
  firstName: string;
  lastName: string;
  score: number;
  courses: Course[];
}

export interface Course {
  name: string;
}
