import { Platform } from 'react-native';

const fonts = {
  ...Platform.select({
    ios: {
      inter: {
        regular: 'Inter-Regular',
        medium: 'Inter-Medium',
        semiBold: 'Inter-SemiBold',
        bold: 'Inter-Bold',
        extraBold: 'Inter-ExtraBold'
      },
    },
    default: {
      inter: {
        regular: 'InterRegular',
        medium: 'InterMedium',
        semiBold: 'InterSemiBold',
        bold: 'InterBold',
        extraBold: 'InterExtraBold'
      },
    },
  }),
};

const fontSizes = {
  headlineLarge: 32,
  headlineMedium: 28,
  headlineSmall: 24,
  titleLarge: 22,
  titleMedium: 20,
  titleSmall: 18,
  bodyLarge: 16,
  bodyMedium: 14,
  bodySmall: 12,
}

const commons = {
  fonts,
  fontSizes
};

const colors = {
  colors: {
    primary: '#4C9EEB',
    backgroundColor: '#FFFFFF',
    darkerBackgroundColor: '#E7ECF0',

    primarySeparator: '#BDC5CD',
    secondarySeparator: '#CED5DC',

    text: '#141619',
    darkenText: '#687684',
  },
};

const lightTheme = {
  ...commons,
  ...colors,
};

export { lightTheme };
