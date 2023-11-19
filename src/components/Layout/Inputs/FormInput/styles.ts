import styled from 'styled-components/native';
import { moderateScale } from '../../../../utils/layout';
import { Text } from '../../Text';

export const RawFormInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: `${theme.colors.darkenText}66`,
}))<{ hasError: boolean }>`
  height: ${moderateScale(53)}px;
  border-radius: 4px;
  border-width: 0.5px;
  border-color: ${({ theme, hasError }) =>
    hasError ? theme.colors.error : theme.colors.primarySeparator};

  padding: ${moderateScale(8)}px;

  font-size: ${({ theme }) => theme.fontSizes.bodyLarge}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ErrorText = styled(Text).attrs({
  fontSize: 'bodySmall',
})`
  margin-top: ${moderateScale(4)}px;
  color: ${({ theme }) => theme.colors.error};
`;
