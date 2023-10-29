import { useLayout } from '../../src/hooks/useLayout';
import { renderHook } from '@testing-library/react-hooks';
import { TestingWrapper } from '../../__utils__/wrappers/TestingWrapper';
import { type DefaultTheme } from 'styled-components/native';

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
        wrapper: ({ children }: { children: React.ReactNode }) =>
          TestingWrapper({ mockTheme: mockTheme as DefaultTheme, children }),
      });
      expect(result.current.theme).toEqual(mockTheme);
    });
  });
});
