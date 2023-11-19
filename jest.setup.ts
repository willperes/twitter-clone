import '@testing-library/jest-native/extend-expect';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import { jest } from '@jest/globals';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('@react-native-firebase/auth', () => {
  return () => ({
    signInWithCustomToken: jest.fn(),
  });
});
