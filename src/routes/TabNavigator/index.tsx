import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import { useLayout } from '../../hooks/useLayout';
import { TweetCard } from '../../components/TweetCard';
import { type TweetSummary } from '../../types/data/Tweet';

const Tab = createBottomTabNavigator();

export function TabNavigator(): React.ReactNode {
  const { theme, moderateScale } = useLayout();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.darkenText,
      }}
    >
      <Tab.Screen
        name={'Feed'}
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'home'} size={moderateScale(22)} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'search'} size={moderateScale(22)} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Notifications'}
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'bell'} size={moderateScale(22)} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'DirectMessages'}
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'mail'} size={moderateScale(22)} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function FeedScreen(): React.ReactNode {
  const mockTweetSummary: TweetSummary = {
    publishedBy: {
      username: 'willperes',
      nickname: 'Will',
      photoURL: 'https://github.com/willperes.png',
    },
    content:
      "Somebody once told me the world is gonna roll me\n\nI ain't the sharpest tool in the shed",
    createdAt: new Date('2023-10-28T20:00:00.968Z'),
    comments: 0,
    retweets: 5,
    likes: 20,
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TweetCard data={mockTweetSummary} />
    </View>
  );
}
