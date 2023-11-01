import { horizontalScale, moderateScale, verticalScale } from './layout';

describe('utils/layout', () => {
  describe('moderateScale', () => {
    it('should return a valid number', () => {
      const result = moderateScale(100);
      expect(typeof result).toBe('number');
    });
  });

  describe('horizontalScale', () => {
    it('should return a valid number', () => {
      const result = horizontalScale(100);
      expect(typeof result).toBe('number');
    });
  });

  describe('verticalScale', () => {
    it('should return a valid number', () => {
      const result = verticalScale(100);
      expect(typeof result).toBe('number');
    });
  });
});
