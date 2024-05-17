import { Box, Button, HStack, Heading, Stack, VStack, Input } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import {
    AiFillYoutube,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillGithub
} from "react-icons/ai";


const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={"40"} p={"16"} color={"white"}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size="md" textTransform={"uppercase"} fontFamily={"cursive"} textAlign={'center'}>
                        Subscribe for more updates
                    </Heading>
                    <HStack borderBottom={"2px solid white"} py="2px">
                        <Input placeholder='Enter Email Here....' border={'none'} borderRadiu={'none'} outline={"none"} focusBorderColor={"none"} />
                        <Button p={"0"} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'} >
                            <AiOutlineSend size={20} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={"full"} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']} >
                    <Heading textTransform={"uppercase"} textAlign={"center"} >
                        Future Hub
                    </Heading>
                    <text> © 2024 India, UP All rights received</text>
                </VStack>
                <VStack w={"full"}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={"center"} >
                        Social Media
                    </Heading>
                    <Button variant={'Link'} colorScheme='white'>
                        <AiFillYoutube />
                        <a target={'blank'} href='https://www.youtube.com/'>YouTube</a>
                    </Button>
                    <Button variant={'Link'} colorScheme='white'>
                        <AiFillInstagram />
                        <a target={'blank'} href='https://www.instagram.com/atul.18/'>Instagram</a>
                    </Button>
                    <Button variant={'Link'} colorScheme='white'>
                        <AiFillLinkedin />
                        <a target={'blank'} href='https://www.linkedin.com/in/atul-kumar-gupta-212437203/'>LinkdIn</a>
                    </Button>
                    <Button variant={'Link'} colorScheme='white'>
                        <AiFillGithub />
                        <a target={'blank'} href='https://github.com/ATUL0270'>GitHub</a>
                    </Button>

                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer
