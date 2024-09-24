import {
  Avatar,
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  StackDivider,
  useDisclosure,
} from '@chakra-ui/react';
import { colors, images, routes } from '@theme';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import router from 'next/router';
import imgtest from '../../../../public/auth/logo.png';
export const AvatarMenu = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { data: session } = useSession();

  const displayName = session?.user?.name?.full?.includes('undefined')
    ? session?.user?.email
    : session?.user?.name?.full;

  return (
    <Box cursor={'pointer'} h={39} w={39} pos={'relative'} onClick={onToggle}>
      <Popover
        returnFocusOnClose
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Image size="sm" alt={'avatar'} {...images.avatar} fill />
          {/* <Avatar size="sm" name="User Name" src="../../../../public/auth/logo.png" /> */}
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight={'semibold'}>{displayName}</PopoverHeader>
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <Box
                onClick={() => {
                  router.push(routes.pages.dashboard.user);
                }}
              >
                {'Profile'}
              </Box>

              <StackDivider bgColor={colors.gray.regular} />

              <Box onClick={signOut}>Sign Out</Box>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
