import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
  useDisclosure,
  Spacer, Link, Avatar
} from '@chakra-ui/react';
import { Sidebar } from '@components/func/dashboard/sidebar';
import { colors, images } from '@theme';
import Image from 'next/image';
import { useRef } from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import { scroll_customize } from '@components/common/styleprops';

 export const Header = ({}) => {
  return (
    <Box w="100%" bg="#f1f5f9" position="sticky" p={4}>
      <HStack w="100%" spacing={4} alignItems="center">
        {/* Left-aligned: Navigation Path */}
        <Text fontSize="md" color="gray.800" fontFamily="'Roboto mono', sans-serif">Personal / user connected</Text>

        <Spacer /> {/* Pushes the right section to the far right */}

        {/* Right-aligned: Navigation Links */}
        <HStack spacing={6}>
          {/* <Link href="#" fontSize="sm" color="gray.600">Playground</Link>
          <Link href="#" fontSize="sm" color="gray.600" fontWeight="bold">Dashboard</Link>
          <Link href="#" fontSize="sm" color="gray.600">Docs</Link>
          <Link href="#" fontSize="sm" color="gray.600">API reference</Link> */}
          
          {/* User Avatar */}
          
          <Avatar size="sm" name="User Name" src="path_to_avatar_image.png" bgColor={'#9999ff'} color={'white'} />
        </HStack>
      </HStack>
    </Box>
  );
 }
 export const DesktopDashboardLayoutView = ({ children, activeLink }) => {
  return (
    <Stack h={'100vh'} w={'100%'} bgColor={'#cdd4e0'}>
      <HStack alignItems={'flex-start'} h={'100vh'} w={'100%'} gap={0} overflowY="auto">
        {/* Sidebar */}
        <Sidebar activeLink={activeLink} />
        
        {/* Content */}
        <Stack h={'100%'} w={'100%'} alignItems="center" ml={'12.5vw'}>
          <Box w={'94%'}>
            <VStack>{children}</VStack>
          </Box>
        </Stack>
      </HStack>
    </Stack>
  );
};


export const MobileDashboardLayoutView = ({ children, activeLink, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Stack alignItems={'flex-start'} justifyContent={'flex-start'} bgColor={'#cdd4e0'}>
      <HStack alignItems={'center'} w={'100%'} p={4}>
        <Box ref={btnRef} onClick={onOpen}>
          <CgMenuLeft size={23} />
        </Box>
        <HStack ml={5}>
          <Box h={50} w={50} pos={'relative'}>
            <Image {...images.logo} alt={'logo'} fill />
          </Box>
          <Heading size={'sm'}>{'Dashboard'}</Heading>
        </HStack>
      </HStack>

      {/* Drawer for Sidebar on Mobile */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef} size={'sm'}>
        <DrawerOverlay />
        <DrawerContent bgColor={'#cdd4e0'}>
          <DrawerCloseButton />
          <DrawerBody>
            <Sidebar activeLink={activeLink} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box px={4}>
        <Heading size={'md'}>{title}</Heading>
        <VStack alignItems={'flex-start'}>{children}</VStack>
      </Box>
    </Stack>
  );
};
