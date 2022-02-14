import React from 'react';
import {  Heading, Input, Stack } from '@chakra-ui/react';


const UserInput = ({title, type, placeHolder})=> {

  return(
    <Stack>
      <Heading fontSize={15}>{title}</Heading>
      <Input type={type} placeholder={placeHolder} />
    </Stack>
  )
}
export default UserInput