import styled from 'styled-components/native';
import { moderateScale } from '../../../utils/layout';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  padding: ${moderateScale(24)}px;
`;
