import { Dispatch, SetStateAction, useState } from 'react';

export default function useToggle(
  initialValue: boolean = false
): [boolean, VoidFunction, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    setValue(prev => !prev);
  }

  return [value, toggle, setValue];
}
