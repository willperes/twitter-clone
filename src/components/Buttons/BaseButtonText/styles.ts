import styled, { css } from 'styled-components/native';
import { Text } from '../../Layout';
import { type ButtonStyleProps } from '../BaseButton/index';
import { moderateScale } from '../../../utils/layout';

export const StyledBaseButtonText = styled(Text)<ButtonStyleProps>`
  font-family: ${({ theme }) => theme.fonts.inter.extraBold};

  ${({ theme, buttonStyle }) => {
    switch (buttonStyle) {
      case 'outlined': {
        return css`
          color: ${theme.colors.primary};
        `;
      }

      case 'outlined-text': {
        return css`
          color: ${theme.colors.text};
        `;
      }

      default: {
        return css`
          color: white;
        `;
      }
    }
  }}

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'large': {
        return css`
          font-size: ${moderateScale(16)}px;
        `;
      }

      default: {
        return css`
          font-size: ${moderateScale(14)}px;
        `;
      }
    }
  }}
`;
