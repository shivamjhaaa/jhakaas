import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'20vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@ShivamJha"
            color={'yellow.400'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          <a href="https://www.instagram.com/shivamjhaaa/" target={'_blank'} rel='noreferrer'>
            <TiSocialInstagramCircular />
          </a>
          <a href="https://www.linkedin.com/in/shivamjhaaa/" target={'_blank'} rel='noreferrer'>
            <TiSocialLinkedinCircular />
          </a>
          <a href="https://github.com/shivamjhaaa" target={'_blank'} rel='noreferrer'>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
