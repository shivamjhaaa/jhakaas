import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buySubscription } from '../../redux/actions/user';
import { server } from '../../redux/store';
import toast from 'react-hot-toast';
import logo from '../../assets/images/logo.png';

const Subscribe = ({ user }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState('');

  const { loading, error, subscriptionId } = useSelector(
    state => state.subscription
  );
  const { error: courseError } = useSelector(state => state.course);

  const subscribeHandler = async () => {
    const { data } = await axios.get(`${server}/razorpaykey`);
    setKey(data.key);
    dispatch(buySubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (courseError) {
      toast.error(courseError);
      dispatch({ type: 'clearError' });
    }

    if (subscriptionId) {
      const openPopUp = () => {
        const options = {
          key,
          name: 'Jhakaas',
          description: 'Access Premium Content of Jhakaas',
          image: logo,
          subscription_id: subscriptionId,
          callback_url: `${server}/paymentverification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: '',
          },
          notes: {
            address: 'India',
          },
        };
        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  },[dispatch , error , user.name , user.email , key , subscriptionId , courseError]);

  return (
    <Container maxW="4xl" minH={'70vh'} p={['4']}>
      <Heading children="Premium Plans" mt={['16', '8']} textAlign={'center'} />
      <Text
        mb={8}
        textAlign={'center'}
        children="Join pro pack and get access to all content."
      />

      <Stack align={'center'}>
        <Plan
          subscribeHandler={subscribeHandler}
          title={'Monthly - ₹199 Only '}
          description={'Join our Monthly Plan'}
          price={'₹199'}
          loading={loading}
        />
        
      </Stack>
    </Container>
  );
};

const Plan = ({ subscribeHandler, loading, title, description, price }) => (
  <VStack boxShadow={'lg'} alignItems="stretch" borderRadius={'lg'}>
    <Box bg="yellow.400" p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
      <Text color={'black'} children={title} />
    </Box>
    <Box p="4">
      <VStack textAlign={'center'} px="8" mt={'4'} spacing="8">
        <Text h={8} children={description} />
        <Heading size="md" children={price} />
      </VStack>

      <Button
        my="8"
        w="full"
        colorScheme={'yellow'}
        onClick={subscribeHandler}
        isLoading={loading}
      >
        Buy Now
      </Button>
    </Box>

    <Box bg="blackAlpha.600" p="4" css={{ borderRadius: '0 0 8px 8px' }}>
      <Heading
        color={'white'}
        textTransform="uppercase"
        size="sm"
        children={'100% refund at cancellation'}
      />

      <Text
        fontSize={'xs'}
        color="white"
        children={'*Terms & Conditions Apply'}
      />
    </Box>
  </VStack>
);

export default Subscribe;
