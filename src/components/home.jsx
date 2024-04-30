import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg';
import img4 from '../assests/4.jpg';
import img5 from '../assests/5.png';

const headingOptions = {
      pos: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      textTransform: 'uppercase',
      p: '4',
      size: '4xl',
};

const Home = () => {
      return (
            <Box>
                  <MyCarousel />

                  <Container maxW={'container.xl'} minH={'100vh'} p="16">
                        <Heading
                              textTransform={'uppercase'}
                              py="2"
                              w={'fit-content'}
                              borderBottom={'2px solid'}
                              m="auto"
                        >
                              Services
                        </Heading>

                        <Stack
                              h="full"
                              p={'4'}
                              alignItems={'center'}
                              direction={['column', 'row']}
                        >
                              <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

                              <Text
                                    letterSpacing={'widest'}
                                    lineHeight={'190%'}
                                    p={['4', '16']}
                                    textAlign={'center'}
                              >
                                    Welcome to "A New Way": Your Destination for Learning and Skill Development!

                                    At "A New Way," we're dedicated to providing you with a dynamic platform where you can learn and watch lectures to enhance your skills. Whether you're a professional seeking to advance your career or an enthusiast eager to delve into new subjects, we've got you covered.

                                    Explore our diverse range of lectures and courses, carefully curated to cater to various interests and skill levels. From technical tutorials to creative workshops, our content is designed to empower you with knowledge and expertise.

                                    Join our community of learners and embark on a journey of growth and self-improvement. With "A New Way," the possibilities for learning are endless. Start your educational adventure today!
                              </Text>
                        </Stack>
                  </Container>
            </Box>
      );
};

const MyCarousel = () => (
      <Carousel
            autoPlay
            infiniteLoop
            interval={1000}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
      >
            <Box w="full" h={'100vh'}>
                  <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
                  <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                        Watch The Future
                  </Heading>
            </Box>
            <Box w="full" h={'100vh'}>c
                  <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
                  <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                        Future is Gaming
                  </Heading>
            </Box>

            <Box w="full" h={'100vh'}>
                  <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
                  <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                        Gaming on Console
                  </Heading>
            </Box>

            <Box w="full" h={'100vh'}>
                  <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
                  <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                        Night life is cool
                  </Heading>
            </Box>
      </Carousel>
);

export default Home;