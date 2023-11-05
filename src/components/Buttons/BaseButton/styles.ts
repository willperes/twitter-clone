import styled, { css } from 'styled-components/native';
import { type ButtonStyleProps } from './index';
import { moderateScale } from '../../../utils/layout';

export const StyledBaseButton = styled.TouchableOpacity<ButtonStyleProps>`
  flex-direction: row;

  padding: ${moderateScale(14)}px;
  padding-top: ${moderateScale(8)}px;
  padding-bottom: ${moderateScale(8)}px;

  border-radius: 100px;

  justify-content: center;
  align-items: center;

  ${({ theme, buttonStyle }) => {
    switch (buttonStyle) {
      case 'outlined': {
        return css`
          background-color: ${theme.colors.backgroundColor};
          border: 1px solid ${theme.colors.primary};
        `;
      }

      case 'outlined-text': {
        return css`
          background-color: ${theme.colors.backgroundColor};
          border: 1px solid ${theme.colors.text};
        `;
      }

      default: {
        return css`
          background-color: ${theme.colors.primary};
        `;
      }
    }
  }}

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'large': {
        return css`
          height: ${moderateScale(45)}px;
        `;
      }
    }
  }}
`;
