import React from 'react';
import { StyledBox } from './styles';
import { type ViewProps } from 'react-native';

export interface BoxProps extends ViewProps {
  /** Accepts a number to apply the value to all directions or an array up to 4 values,
   * which will then distribute it by:
   * margin-top, margin-right, margin-bottom and margin-left respectively.
   */
  m?: number | number[];

  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;

  /** Accepts a number to apply the value to all directions or an array up to 4 values,
   * which will then distribute it by:
   * padding-top, padding-right, padding-bottom and padding-left respectively.
   */
  p?: number | number[];

  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;

  /** Responsible for setting the Box flexDirection */
  fd?: 'row' | 'column';

  /** Responsible for setting the Box items alignment */
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Responsible for justifying the Box content */
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-evenly'
    | 'space-around';
}

export const Box: React.FC<React.PropsWithChildren<BoxProps>> = ({ children, ...props }) => {
  return (
    <StyledBox testID={'box'} {...props}>
      {children}
    </StyledBox>
  );
};
