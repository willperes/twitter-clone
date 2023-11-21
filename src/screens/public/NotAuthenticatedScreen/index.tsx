import React from 'react';
import { Text } from '../../../components/Layout';
import { SafeAreaView, View } from 'react-native';
import { Box } from '../../../components/Layout/Box';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useLayout } from '../../../hooks/useLayout';
import { moderateScale } from '../../../utils/layout';
import { Separator } from '../../../components/Layout/Separator';
import { Button } from '../../../components/Buttons/Button';
import GoogleLogo from '../../../assets/icons/google-logo.svg';
import AppleLogo from '../../../assets/icons/apple-logo.svg';
import { Link, useNavigation } from '@react-navigation/native';

export const NotAuthenticatedScreen: React.FC = () => {
  const { theme } = useLayout();
  const navigation = useNavigation();

  function handleNavigateToSignIn(): void {
    navigation.navigate('SignUpScreen');
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.backgroundColor,
        justifyContent: 'space-between',
      }}
    >
      <Box justify={'space-between'} style={{ flex: 1 }} pl={24} pr={24}>
        <View>
          <Box pt={6} pb={6} mb={100} align={'center'} style={{ width: '100%' }}>
            <FontAwesome name={'twitter'} color={theme.colors.primary} size={moderateScale(32)} />
          </Box>
          <Box mr={8}>
            <Text fontSize={'headlineLarge'} fontFamily={theme.fonts.inter.extraBold}>
              See what&apos;s happening in the world right now.
            </Text>
          </Box>
        </View>
        <Box>
          <Box mb={8}>
            <Button
              title={'Continue with Google'}
              leading={<GoogleLogo height={moderateScale(22)} width={moderateScale(22)} />}
              buttonStyle={'outlined-text'}
              buttonSize={'large'}
            />
          </Box>
          <Button
            title={'Continue with Apple'}
            leading={<AppleLogo height={moderateScale(22)} width={moderateScale(22)} />}
            buttonStyle={'outlined-text'}
            buttonSize={'large'}
          />
          <Box mt={10} mb={10} fd={'row'} align={'center'}>
            <Separator />
            <Box ml={16} mr={16}>
              <Text color={theme.colors.darkenText}>Or</Text>
            </Box>
            <Separator />
          </Box>
          <Button title={'Create account'} buttonSize={'large'} onPress={handleNavigateToSignIn} />

          <Box mt={20}>
            <Text fontSize={'bodySmall'} color={theme.colors.darkenText}>
              By signing up, you agree to the{' '}
              <Text style={{ color: theme.colors.link }}>Terms of Service</Text> and{' '}
              <Text style={{ color: theme.colors.link }}>Privacy Policy</Text>, including{' '}
              <Text style={{ color: theme.colors.link }}>Cookie Use</Text>.
            </Text>
          </Box>

          <Box mt={40} mb={80}>
            <Text color={theme.colors.darkenText}>
              Have an account already?{' '}
              <Link to={'/SignInScreen'} style={{ color: theme.colors.link }}>
                Log in
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};
