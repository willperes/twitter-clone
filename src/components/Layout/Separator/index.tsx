import styled from 'styled-components/native';
import { Box, type BoxProps } from '../Box';
import { moderateScale } from '../../../utils/layout';

export const Separator: React.FC<BoxProps> = ({ ...rest }) => {
  return <RawSeparator {...rest} />;
};

const RawSeparator = styled(Box)`
  height: ${moderateScale(0.35)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primarySeparator};
`;
