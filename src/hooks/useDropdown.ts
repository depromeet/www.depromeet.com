import { useCallback, useEffect, useRef, useState } from 'react';

interface ComposedMouseEvent extends MouseEvent {
  composedPath: () => EventTarget[];
}

export const useDropDown = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const openDropdown = useCallback(() => {
    setIsDropdownOpen(true);
  }, []);

  const shouldCloseDropdown = useCallback(
    (event: ComposedMouseEvent) => {
      const isParentExistInComposedPath =
        containerRef.current && event.composedPath().includes(containerRef.current);

      if (!isParentExistInComposedPath) {
        closeDropdown();
      }
    },
    [closeDropdown]
  );

  useEffect(() => {
    window.addEventListener('click', shouldCloseDropdown);

    return () => {
      window.removeEventListener('click', shouldCloseDropdown);
    };
  }, [containerRef, shouldCloseDropdown]);

  return {
    containerRef,
    isDropdownOpen,
    openDropdown,
    closeDropdown,
  };
};
