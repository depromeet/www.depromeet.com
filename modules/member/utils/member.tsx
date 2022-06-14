import { 운영진_11기 } from './semester';

export type Person = {
  name: string;
  depromeetPosition?: '회장' | '부회장';
  jobPosition: string;
  photoLink: string;
  link?: {
    behance?: string;
    linkedIn?: string;
    github?: string;
    homepage?: string;
  };
};

export type Generation = {
  semester: number;
  members: Person[];
};

export const member: Generation[] = [
  {
    semester: 11,
    members: 운영진_11기,
  },
];
