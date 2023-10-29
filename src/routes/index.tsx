import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './TabNavigator';
import { FeedHeader } from '../components/Header/FeedHeader';

const Stack = createNativeStackNavigator();

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={TabNavigator}
          options={{
            header: () => <FeedHeader />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
