import { Dimensions } from 'react-native';
import { moderateScale } from '../utils/layout';

export const DRAWER_WIDTH = Dimensions.get('window').width * 0.77;
export const SEPARATOR_WIDTH = moderateScale(0.25)
