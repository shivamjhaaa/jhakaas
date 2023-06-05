import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../../redux/actions/course';
import { toast } from 'react-hot-toast';
import { addToPlaylist } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';
import Loader from '../Layout/Loader/Loader';

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const addToPlaylistHandler = async id => {
    await dispatch(addToPlaylist(id));
    dispatch(loadUser());
  };

  const { loading, courses, error, message } = useSelector(
    state => state.course
  );

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));

    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [category, keyword, dispatch, error, message]);

  const categories = [
    'Web devlopment',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  return (
    <Container minHeight={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />

      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a Course..."
        type="text"
        focusBorderColor="yellow.500"
      />

      <HStack
        overflowX={'auto'}
        py={'8'}
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {categories.map((item, index) => (
          <Button
            key={index}
            onClick={() => setCategory(item)}
            minW={['40', '50']}
          >
            <Text children={item} fontSize={['12', '16']} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {courses && courses.length > 0 ? (
          courses.map(i => (
            <Course
              key={i._id}
              title={i.title}
              description={i.description}
              views={i.views}
              imgSrc={i.poster.url}
              id={i._id}
              addToPlaylistHandler={() => addToPlaylistHandler(i._id)}
              creator={i.createdBy}
              lectureCount={i.numOfVideos}
              loading={loading}
            />
          ))
        ) : loading ? (
          <Loader h='30vh' size='sm' />
        ) : (
          <Heading opacity={0.5} mt={4}>
            No Course available for this selection
          </Heading>
        )}
      </Stack>
    </Container>
  );
};

const Course = ({
  views,
  title,
  imgSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <VStack
      className="course"
      alignItems={['center', 'flex-start']}
      boxShadow={'lg'}
      p={2}
    >
      <Image src={imgSrc} boxSize={60} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        fontFamily={'sans-serif'}
        noOfLines={3}
        size={'sm'}
        children={title}
      />
      <Text
        textAlign={['center', 'left']}
        children={description}
        noOfLines={2}
      />

      <HStack>
        <Text children={`Created By:`} />
        <Text fontWeight={'bold'} children={creator} />
      </HStack>
      <Text children={`No. Of Lectures: ${lectureCount}`} />
      <Text children={`Views: ${views}`} />

      <Stack
        direction={['column', 'row']}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'} size={'sm'}>
            Watch Now
          </Button>
        </Link>
        <Button
          isLoading={loading}
          variant={'outline'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
          size={'sm'}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

export default Courses;
