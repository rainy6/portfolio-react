import { React } from 'react';
import { chakra, Text } from '@chakra-ui/react';
import { ChakraLayout } from './components/templates/ChakraLayout';

export const Portfolio = () => {
  return (
    <ChakraLayout>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={5} fontWeight={'bold'}>
        Portfolio
      </chakra.h1>
      <Text textAlign={'center'} fontWeight={600} color={'gray.500'} mb={4}>
        現在準備中です
      </Text>
    </ChakraLayout>
  );
}