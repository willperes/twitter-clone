import React from 'react';
import { Image } from 'react-native';
import { useLayout } from '../../hooks/useLayout';

interface Props {
  photoURL: string;
  size: number;
}

export const UserPhoto: React.FC<Props> = ({ photoURL, size }) => {
  const { moderateScale } = useLayout();

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
