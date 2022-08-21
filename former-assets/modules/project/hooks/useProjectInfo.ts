import { useContext } from 'react';

import { ProjectContext } from '../context/project';

export default function useProjectInfo() {
  return useContext(ProjectContext);
}
