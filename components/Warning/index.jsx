import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaExclamation, FaExclamationCircle } from 'react-icons/fa';

const Warning = ()=> {

  return(
    <Stack  justifyContent="center" alignItems="center">
      
      <Text background="red.200" padding={5} display="flex" gap={5}><FaExclamationCircle size={20} />Por razones de público conocimiento momentáneamente realizaremos las ventas únicamente por nuestros medios de comunición. Por favor contáctese con un vendedor.</Text>
    </Stack>
  )
}
export default Warning