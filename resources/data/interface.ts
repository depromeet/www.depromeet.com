import { ComponentType } from 'react';

type LazyLoadableImage = () => ComponentType<{className?: string }>;
export interface ProjectData {
  title: string;
  catchphrase?: string;
  generation: number;
  team?: string;
  desingers?: string[];
  backends?: string[];
  frontends?: string[];
  image?: LazyLoadableImage;
  icon?: LazyLoadableImage;
  description?: string;
  ios?: string;
  android?: string;
  web?: string;
}
