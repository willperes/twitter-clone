import styled from 'styled-components/native';
import { moderateScale } from '../../utils/layout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Box } from '../Layout/Box';

export const Wrapper = styled(Box).attrs({
  fd: 'row',
  pl: 10,
  pr: 10,
})`
  width: 100%;
  height: ${moderateScale(32)}px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.darkerBackgroundColor};
`;

export const StyledTextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholder: 'Search',
  placeholderTextColor: theme.colors.darkenText,
}))`
  margin-left: ${moderateScale(7)}px;
  font-size: ${moderateScale(17)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const SearchIcon = styled(AntDesign).attrs(({ theme }) => ({
  color: theme.colors.darkenText,
}))``;
