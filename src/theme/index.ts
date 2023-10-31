import { Platform } from 'react-native';

const fonts = {
  ...Platform.select({
    ios: {
      inter: {
        regular: 'Inter-Regular',
        medium: 'Inter-Medium',
        semiBold: 'Inter-SemiBold',
        bold: 'Inter-Bold',
      },
    },
    default: {
      inter: {
        regular: 'InterRegular',
        medium: 'InterMedium',
        semiBold: 'InterSemiBold',
        bold: 'InterBold',
      },
    },
  }),
};

const commons = {
  fonts: {
    ...fonts,
  },
};

const colors = {
  colors: {
    primary: '#4C9EEB',
    backgroundColor: '#FFFFFF',

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
