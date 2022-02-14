import React from 'react';
import {Icon, Stack, Image, Link, Container, HStack} from "@chakra-ui/react"
import { FaWhatsappSquare } from 'react-icons/fa';

const NavbarCheckout= ()=> {

  return(
    <Stack py={3} bg="white" pos="fixed" w="100%" zIndex={100}>
      <Container maxW="container.xl">
        <HStack justifyContent="space-between" alignItems="end">
          <Image src='/images/gecomm-logo.png' alt='gecomm logo'/>
          <Link href='https://api.whatsapp.com/send?phone=543424270884&message' isExternal>
            <Icon w={10} h={10} as={FaWhatsappSquare} color="green.400"/>
          </Link>
        </HStack>
      </Container>
    </Stack>
  )
}
export default NavbarCheckout