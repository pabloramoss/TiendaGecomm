import React from 'react';
import {Stack, Image, Heading, Link, Divider, HStack, IconButton, Button, Drawer, DrawerOverlay, DrawerHeader, DrawerBody, DrawerContent, Text, useDisclosure} from "@chakra-ui/react"
import { FaBars, FaWindowClose, FaWhatsapp } from 'react-icons/fa';
import NextLink from "next/link"

const Aside = ({categories})=> {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return(
    <Stack py={3} bg="white" w="300px" h="100vh" display={["none", "none", "none", "flex"]} justifyContent="space-between">
        <Stack justifyContent="space-between" height="100%" alignItems="center">
          <Stack>
            <Link href='/'>
              <Image src='/images/gecomm-logo.png' px={3} alt='logo'/>
            </Link>
            <Stack
              display={["none", "none", "none", "flex"]}
              gap={3}
              py={10}
              alignItems="center"
              >
                <Heading color="blue.600" alignSelf="center" fontSize={18}>CATEGORÍAS</Heading>
                <Divider />
                {categories.map(category=><NextLink key={category} href={`/#${category}`}><Button colorScheme="blue" size="sm" w="80%">{category}</Button></NextLink>)}
              <Link href='https://api.whatsapp.com/send?phone=5493426483165&message' isExternal>
                <Button borderRadius='full' mt={10} colorScheme="green" leftIcon={<FaWhatsapp />}>Contactanos
                </Button>
              </Link>
            </Stack>
          </Stack>
          <Stack>
            <Divider />
            <Text color="gray.400">©{new Date().getFullYear()} Gecomm</Text>
          </Stack>
          <Button onClick={onOpen } display={["flex", "flex", "flex", "none"]}><FaBars /></Button>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="lg">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader  width="100%" borderBottomWidth='1px' justifyContent="end">
                <HStack width="100%" justifyContent="spacer-between" position="relative">
                  <Heading fontSize={20}>Categorias</Heading>
                  <IconButton size="sm" position="absolute" right={0} onClick={onClose} alignSelf="end" justifySelf="end" aria-label='Close button' icon={<FaWindowClose />} />
                </HStack>
              </DrawerHeader>
              <DrawerBody>
                <NextLink href="#fibra-optica" scroll><Button width="100%" onClick={onClose} my={3}>Fibra optica</Button></NextLink>
                <NextLink href="#caja-empalmes" scroll><Button width="100%" onClick={onClose} my={3}>Caja de empalmes</Button></NextLink>
                <NextLink href="#splitters" scroll><Button width="100%" onClick={onClose} my={3}>Splitters de fibra optica</Button></NextLink>
                <NextLink href="#herrajes" scroll><Button width="100%" onClick={onClose} my={3}>Herrajes</Button></NextLink>
                <NextLink href="#herramientas" scroll><Button width="100%" onClick={onClose} my={3}>Herramientas</Button></NextLink>
                <NextLink href="#morseteria" scroll><Button width="100%" onClick={onClose} my={3}>Morseteria</Button></NextLink>
                <Link href='https://api.whatsapp.com/send?phone=5493424636292&text=Hola.%20Que%20tal.%20' isExternal>
                  <Button mt={10} width="100%" colorScheme="green" leftIcon={<FaWhatsapp />}>Contactate</Button>
                </Link>
                <Divider />
                <Text>©{new Date().getFullYear()} Gecomm</Text>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Stack>
    </Stack>
  )
}
export default Aside