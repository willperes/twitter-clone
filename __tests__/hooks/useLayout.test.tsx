import { useLayout } from '../../src/hooks/useLayout';
import { renderHook } from '@testing-library/react-hooks';
import { type DefaultTheme } from 'styled-components/native';
import { themeProviderWrapper } from '../../__utils__/themeProviderWrapper';

const mockTheme = {
  colors: {
    primary: '#4C9EEB',
    backgroundColor: '#FFFFFF',
  },
};

describe('hooks/useLayout', () => {
  describe('theme', () => {
    it('should return the app theme', () => {
      const { result } = renderHook(() => useLayout(), {
        wrapper: themeProviderWrapper(mockTheme as DefaultTheme),
      });
      expect(result.current.theme).toEqual(mockTheme);
    });
  });

  describe('moderateScale', () => {
    it('should return a valid number', () => {
      const { result } = renderHook(() => useLayout(), {
        wrapper: themeProviderWrapper(mockTheme as DefaultTheme),
      });
      expect(typeof result.current.moderateScale(100)).toBe('number');
    });
  });

  describe('horizontalScale', () => {
    it('should return a valid number', () => {
      const { result } = renderHook(() => useLayout(), {
        wrapper: themeProviderWrapper(mockTheme as DefaultTheme),
      });
      expect(typeof result.current.moderateScale(100)).toBe('number');
    });
  });

  describe('verticalScale', () => {
    it('should return a valid number', () => {
      const { result } = renderHook(() => useLayout(), {
        wrapper: themeProviderWrapper(mockTheme as DefaultTheme),
      });
      expect(typeof result.current.moderateScale(100)).toBe('number');
    });
  });
});
