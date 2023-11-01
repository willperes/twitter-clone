import { renderHook } from '../../__utils__/renderHook';
import { useLayout } from '../../src/hooks/useLayout';
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
        wrapperProps: {
          mockTheme: mockTheme as DefaultTheme,
        },
      });
      expect(result.current.theme).toEqual(mockTheme);
    });
  });
});
