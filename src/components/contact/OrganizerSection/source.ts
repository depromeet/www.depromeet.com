import { OrganizerImagesKeyType } from '~/constants/images/images';

export interface Organizer {
  imageKey: OrganizerImagesKeyType;
  name: string;
  position: string;

  behance?: string;
  linkedin?: string;
  github?: string;
  web?: string;
}

export const ORGANIZERS: Organizer[] = [
  {
    imageKey: '윤병호',
    name: '박소현(회장)',
    position: 'UIUX Designer',
    behance: 'as',
    linkedin: 's',
    github: 's',
    web: 's',
  },
];
