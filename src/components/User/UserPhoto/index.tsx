import React from 'react';
import { Image } from 'react-native';
import { moderateScale } from '../../../utils/layout';

interface Props {
  photoURL: string;
  size: number;
}

export const UserPhoto: React.FC<Props> = ({ photoURL, size }) => {
  return (
    <Image
      testID={'user-photo'}
      source={{
        uri: photoURL,
      }}
      height={moderateScale(size)}
      width={moderateScale(size)}
      borderRadius={100}
    />
  );
};
