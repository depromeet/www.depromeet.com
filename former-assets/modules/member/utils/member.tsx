import { 운영진_10기, 운영진_11기 } from './semester';

export type Person = {
  name: string;
  depromeetPosition?: '회장' | '부회장';
  jobPosition: 'Frontend Developer' | 'Backend Developer' | 'Server Developer' | 'Product Designer' | 'UX Designer';
  photoLink: string;
  link?: {
    behance?: string;
    linkedIn?: string;
    github?: string;
    homepage?: string;
  };
};

export type Members = {
  semester: number;
  people: Person[];
};

export const members: Members[] = [
  {
    semester: 11,
    people: 운영진_11기,
  },
  {
    semester: 10,
    people: 운영진_10기,
  },
];
