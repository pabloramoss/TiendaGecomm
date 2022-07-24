import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const Warning = ()=> {

  return(
    <Stack justifyContent="center" alignItems="center">
      <Stack mt={{base: "100px", lg: "0"}} p={5} gap={5} direction="row" alignItems="center" background="red.200">
        <FaExclamationCircle size={40} />
        <Text fontSize={{base: "10", md: "15"}} fontWeight={500} display="flex" alignItems="center" gap={5}>Por razones de público conocimiento momentáneamente realizamos las ventas únicamente por nuestros medios de comunicación. Por favor, contáctese con un vendedor.</Text>
      </Stack>
    </Stack>
  )
}
export default Warning