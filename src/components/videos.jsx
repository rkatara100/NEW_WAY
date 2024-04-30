import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
      const videosArr = [
            ['https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882', '1',
                  'Embark on an adrenaline-fueled adventure as extreme athletes push the limits of human capability. From death-defying stunts to heart-pounding races, this video will leave you on the edge of your seat.'
            ],
            ['https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf', '2',
                  'Experience the breathtaking landscapes of the Scottish Highlands in this awe-inspiring journey through misty mountains and serene lochs. Let the soothing music and stunning visuals transport you to a world of natural wonder.'
            ],
            ['https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174', '3',
                  'Dive into the depths of the ocean and explore the wonders hidden beneath the waves. From vibrant coral reefs teeming with life to mysterious underwater caves, this video will take you on a mesmerizing underwater journey.'],
            ['https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78', '4',
                  'Indulge in the serene beauty of a tranquil garden as you immerse yourself in the sights and sounds of nature. From blooming flowers to gentle streams, let this video soothe your soul and uplift your spirits.'],
            ['https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281', '5',
                  'Witness the marvels of modern architecture as you explore the world\'s most iconic skyscrapers and structures. From towering skyscrapers to futuristic landmarks, this video will take you on a mesmerizing architectural journey.'
            ],
            ['https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614', '6',
                  'Join renowned artists as they create breathtaking masterpieces right before your eyes. From vibrant paintings to intricate sculptures, this video will inspire your creativity and leave you in awe of the artistic process.'
            ]];

      const [videoSrc, setVideoSrc] = useState(videosArr[0]);

      return (
            <Stack direction={['column', 'row']} h={'100vh'}>
                  <VStack w={'full'}>
                        <video controls controlsList="nodownload" src={videoSrc[0]} style={{ width: '100%' }} />

                        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
                              <Heading>Sample Video {videoSrc[1]}</Heading>
                              <Text>{videoSrc[2]}</Text>
                        </VStack>
                  </VStack>
                  <VStack w={['full', 'xl']} alignItems={'stretch'} p="8" spacing={'8'} overflowY={'auto'}>
                        {videosArr.map((item, index) => (
                              <Button key={index} variant={'ghost'} colorScheme={'purple'} onClick={() => setVideoSrc(item)}>
                                    Lecture {item[1]}
                              </Button>
                        ))}
                  </VStack>
            </Stack>
      );
};

export default Videos;
