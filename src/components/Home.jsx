import { Box, Center, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

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
        <div>
            <Box>
                <MyCarousel />
                <Container maxW={'container.xl'} minH={'100vh'} p={16}>
                    <Heading textTransform={'uppercase'} py="2" w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
                        Services
                    </Heading>
                    <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column', 'row']}>
                        <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
                        <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
                            Virtual Reality (VR) is a computer-generated environment with scenes and objects that appear to be real, making the user feel they are immersed in their surroundings. This environment is perceived through a device known as a Virtual Reality headset or helmet. VR allows us to immerse ourselves in video games as if we were one of the characters, learn how to perform heart surgery or improve the quality of sports training to maximise performance.
                            Although this may seem extremely futuristic, its origins are not as recent as we might think. In fact, many people consider that one of the first Virtual Reality devices was called Sensorama, a machine with a built-in seat that played 3D movies, gave off odours and generated vibrations to make the experience as vivid as possible. The invention dates back as far as the mid-1950s. Subsequent technological and software developments over the following years brought with them a progressive evolution both in devices and in interface design.
                        </Text>
                    </Stack>
                </Container>
            </Box>
        </div>
    )
}

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
        <Box w="full" h={'100vh'}>
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
export default Home
