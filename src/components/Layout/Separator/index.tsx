import styled from 'styled-components/native';
import { Box, type BoxProps } from '../Box';
import { moderateScale } from '../../../utils/layout';
import { SEPARATOR_WIDTH } from '../../../theme/constants';

interface Props extends BoxProps {
  separatorColor?: 'primary' | 'secondary';
}

export const Separator: React.FC<Props> = ({ separatorColor = 'secondary', ...rest }) => {
  return <RawSeparator {...rest} />;
};

const RawSeparator = styled(Box)<Props>`
  height: ${moderateScale(SEPARATOR_WIDTH)}px;
  flex: 1;
  background-color: ${({ theme, separatorColor }) =>
    separatorColor === 'primary' ? theme.colors.primarySeparator : theme.colors.secondarySeparator};
`;
