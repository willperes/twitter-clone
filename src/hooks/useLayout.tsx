import { useTheme } from 'styled-components/native';
import { type LayoutHook } from '../types/hooks/useLayout';

export const useLayout = (): LayoutHook => {
  const theme = useTheme();

  return {
    theme,
  };
};
