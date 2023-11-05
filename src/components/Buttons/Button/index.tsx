import React from 'react';
import { BaseButton, type ButtonProps } from '../BaseButton';
import { BaseButtonText } from '../BaseButtonText';
import { Box } from '../../Layout/Box';

interface Props extends ButtonProps {
  title: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}

export const Button: React.FC<Props> = ({ leading, trailing, title, ...rest }) => {
  return (
    <BaseButton {...rest}>
      {leading ? (
        <Box testID={'button-leading'} mr={8}>
          {leading}
        </Box>
      ) : null}
      <BaseButtonText buttonStyle={rest.buttonStyle} buttonSize={rest.buttonSize}>
        {title}
      </BaseButtonText>
      {trailing ? (
        <Box testID={'button-trailing'} ml={8}>
          {trailing}
        </Box>
      ) : null}
    </BaseButton>
  );
};
