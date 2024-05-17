import React from 'react'
import { Drawer, DrawerBody, DrawerHeader, DrawerContent, DrawerCloseButton, DrawerOverlay, Button, useDisclosure, VStack, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiFullscreen, BiMenuAltLeft } from 'react-icons/bi'
const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button zIndex={'overlay'} pos={'fixed'} top={4} left={4} colorScheme='purple' p={0} h={10} w={10} borderRadius={"full"} onClick={onOpen}>
                <BiMenuAltLeft size={"20"} />
            </Button>

            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                       Future Hub
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                                <Link to={'/'}>Home</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                                <Link to={'/videos'}>Videos</Link>
                            </Button>

                            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                                <Link to={'/videos?category=free'}>Free Videos</Link>
                            </Button>

                            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                                <Link to={'/upload'}>Upload Video</Link>
                            </Button>

                        </VStack>

                        <HStack pos={'absolute'} w={'full'} bottom={10} left={2} justifyContent={'space-evenly'}>

                            <Button onClick={onClose} colorScheme='purple'>
                                <Link to={'/login'}>
                                    Login
                                </Link>
                            </Button>

                            <Button onClick={onClose} colorScheme='purple' variant={'outline'} >
                                <Link to={'/singup onClick={onClose}}'}>
                                    Sing Up
                                </Link>
                            </Button>

                        </HStack>

                    </DrawerBody>
                </DrawerContent >
            </Drawer >
        </>
    )
}

export default Header
