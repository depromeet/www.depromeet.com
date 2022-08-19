const CONTACT_IMAGE_BASE = '/images/contact';

export const CONTACT_IMAGES = {
  gmail: `${CONTACT_IMAGE_BASE}/gmail.png`,
  instagram: `${CONTACT_IMAGE_BASE}/instagram.png`,
  kakaotalk: `${CONTACT_IMAGE_BASE}/kakaotalk.png`,
} as const;

export type ContactImagesKeyType = keyof typeof CONTACT_IMAGES;

const ORGANIZER_IMAGE_BASE = '/images/organizer';

export const ORGANIZER_IMAGES = {
  윤병호: `${ORGANIZER_IMAGE_BASE}/윤병호.png`,
} as const;

export type OrganizerImagesKeyType = keyof typeof ORGANIZER_IMAGES;
