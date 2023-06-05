import { Spinner, VStack } from '@chakra-ui/react';
import React from 'react';

const Loader = ({ color = 'yellow.500' , h='100vh' , size='xl' }) => {
  return (
    <VStack h={h} justifyContent={'center'}>
      <div style={{ transform: 'scale(3)' }}>
        <Spinner
          thickness="2px"
          speed="0.65s"
          emptyColor="transparent"
          color={color}
          size={size}
        />
      </div>
    </VStack>
  );
};

export default Loader;
