import React from 'react';
import { type TextInputProps } from 'react-native';
import * as S from './styles';

interface Props extends TextInputProps {
  displayOnly?: boolean;
}

export const SearchBar: React.FC<Props> = ({ displayOnly = false, ...rest }) => {
  return (
    <S.Wrapper>
      <S.SearchIcon name={'search1'} />
      <S.StyledTextInput
        testID={'search-bar-input'}
        editable={displayOnly ? false : rest.editable}
        style={{ flex: displayOnly ? undefined : 1 }}
        {...rest}
      />
    </S.Wrapper>
  );
};
