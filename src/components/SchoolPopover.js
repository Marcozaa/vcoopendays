import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import React from 'react'
import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { ButtonGroup } from '@chakra-ui/react'
export function SchoolPopover() {
  const initialFocusRef = React.useRef()
  return (
      <div style={{position:"absolute", top:"30vw", left:"40vw"}}>
    <Popover
      initialFocusRef={initialFocusRef}
      placement='bottom'
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button bg={'teal'}></Button>
      </PopoverTrigger>
      <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
        <PopoverHeader pt={4} fontWeight='bold' border='0'>
          Istituto L. Cobianchi
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
         Workshop del workshop sul workshop.
        </PopoverBody>
        <PopoverFooter
          border='0'
          d='flex'
          alignItems='center'
          justifyContent='space-between'
          pb={4}
        >
          <Box fontSize='sm'>11:45 - 13:20</Box>
          <ButtonGroup size='sm'>
            <Button colorScheme='green'>Iscriviti</Button>
            <Button colorScheme='blue' ref={initialFocusRef}>
              Annulla
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
    </div>
  )
}