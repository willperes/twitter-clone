import { Platform } from 'react-native';
import { FONT_SIZES } from './constants';

const fonts = {
  ...Platform.select({
    ios: {
      inter: {
        regular: 'Inter-Regular',
        medium: 'Inter-Medium',
        semiBold: 'Inter-SemiBold',
        bold: 'Inter-Bold',
        extraBold: 'Inter-ExtraBold',
      },
    },
    default: {
      inter: {
        regular: 'InterRegular',
        medium: 'InterMedium',
        semiBold: 'InterSemiBold',
        bold: 'InterBold',
        extraBold: 'InterExtraBold',
      },
    },
  }),
};

const commons = {
  fonts,
  fontSizes: FONT_SIZES,
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

    error: '#ef5350',
    link: '#4C9EEB',
  },
};

const lightTheme = {
  ...commons,
  ...colors,
};

export { lightTheme };
