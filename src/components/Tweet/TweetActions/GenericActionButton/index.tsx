import React from 'react';
import { type GestureResponderEvent, TouchableOpacity, View } from 'react-native';
import { useLayout } from '../../../../hooks/useLayout';
import { Text } from '../../../Layout';
import { moderateScale } from '../../../../utils/layout';

interface Props {
  callback: () => void;
  icon: JSX.Element;
  count?: number;
}

export const GenericActionButton: React.FC<Props> = ({ callback, icon, count }) => {
  const { theme } = useLayout();

  function onPress(event: GestureResponderEvent): void {
    event?.stopPropagation();
    callback();
  }

  return (
    <TouchableOpacity testID={'button'} onPress={onPress} style={{ padding: moderateScale(2) }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {icon}
        {count ? (
          <View style={{ marginLeft: moderateScale(4) }}>
            <Text fontSize={'bodySmall'} color={theme.colors.darkenText}>
              {count}
            </Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
