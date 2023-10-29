import { TouchableOpacity, View } from 'react-native';
import { useLayout } from '../../../hooks/useLayout';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { moderateScale } from '../../../utils/layout';

interface Props {
  leadingComponent: React.ReactNode;
  leadingCallback: () => void;
  trailingComponent: React.ReactNode;
  trailingCallback: () => void;
  titleComponent?: React.ReactNode;
}

export const BaseHeader: React.FC<Props> = ({
  leadingComponent,
  leadingCallback,
  trailingComponent,
  trailingCallback,
  titleComponent,
}) => {
  const { theme } = useLayout();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, backgroundColor: theme.colors.backgroundColor }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: moderateScale(42),
          paddingHorizontal: moderateScale(20),
        }}
      >
        <TouchableOpacity testID={'header-leading-button'} onPress={leadingCallback}>
          {leadingComponent}
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center', marginHorizontal: moderateScale(10) }}>
          {titleComponent}
        </View>
        <TouchableOpacity testID={'header-trailing-button'} onPress={trailingCallback}>
          {trailingComponent}
        </TouchableOpacity>
      </View>
    </View>
  );
};
