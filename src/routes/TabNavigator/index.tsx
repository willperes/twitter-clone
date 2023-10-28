import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

export function TabNavigator(): React.ReactNode {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen name={'Feed'} component={FeedScreen} />
      <Tab.Screen name={'Search'} component={FeedScreen} />
      <Tab.Screen name={'Notifications'} component={FeedScreen} />
      <Tab.Screen name={'DirectMessages'} component={FeedScreen} />
    </Tab.Navigator>
  );
}

function FeedScreen(): React.ReactNode {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Feed Screen</Text>
    </View>
  );
}
