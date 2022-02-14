import { ElementType } from 'react';

type LazyLoadableImage = () => ElementType<{ className?: string }>;
export interface ProjectData {
  title: string;
  catchphrase?: string;
  generation: number;
  team?: string;
  designers?: string[];
  backends?: string[];
  frontends?: string[];
  image: LazyLoadableImage | string;
  icon: LazyLoadableImage | string;
  description?: string;
  ios?: string;
  android?: string;
  web?: string;
}
