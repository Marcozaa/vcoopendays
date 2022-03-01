import { chakra, HTMLChakraProps, useColorModeValue, useToken } from '@chakra-ui/react'
import * as React from 'react'
import { FaCode } from 'react-icons/fa';
import { Stack } from '@chakra-ui/react';
export const Logo = (props: HTMLChakraProps<'svg'>) => {
  const [white, black] = useToken('colors', ['white', 'gray.800'])
  return (<Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
    <FaCode />
    <h1>VCOopendays</h1>
    </Stack>
  )
}