import { HStack, VStack } from 'native-base';
import React from 'react';
import { Button, Heading, Text } from '../../../components/atoms';
import { SplashLayout } from '../../../components/Layout';
import theme from '../../../constants/styles/theme';

// const SignUpScreen: React.FC = () => {
//   return (
//     <VStack flex={1} backgroundColor={theme.color.white}>
//       <VStack flex={1}>
//         <VStack justifyContent="center" space={4}>
//           <Heading textAlign="center" color={theme.color.black} size="lg">
//             Sign up for moodboard
//           </Heading>
//           <Text textAlign="center" secondary>
//             Create a profile, shop and follow your favourite stores.
//           </Text>
//         </VStack>

//         <VStack justifyContent="center" space={4}>
//           <Button>Continue with email</Button>
//         </VStack>
//       </VStack>

//       <VStack flex={0.2} backgroundColor={theme.color.gray_100}>
//         {/* <Text>Footer</Text> */}
//       </VStack>
//     </VStack>
//   );
// };

const SignUpContent = {
  heading: 'Sign up for moodboard',
  subHeading: 'Create a profile, shop and follow your favourite stores.'
};

const SignUpScreen: React.FC = () => {
  return (
    <SplashLayout
      heading={SignUpContent.heading}
      subHeading={SignUpContent.subHeading}
    >
      {/* <VStack justifyContent="center" space={4}> */}
      <Button primary size="lg">
        Continue with email
      </Button>
      <Button size="lg" variant="outline">
        Continue with email
      </Button>
      {/* </VStack> */}
    </SplashLayout>
  );
};

export default SignUpScreen;
