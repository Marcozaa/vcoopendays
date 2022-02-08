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
import { FormControl } from '@chakra-ui/react'
import { FormLabel } from '@chakra-ui/react'
import { Input, Stack, ButtonGroup, Button } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { FaEdit } from 'react-icons/fa'
import  FocusLock from "react-focus-lock"
// 1. Create a text input component
const TextInput = React.forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} {...props} />
    </FormControl>
  )
})

// 2. Create the form
export function Form ({ firstFieldRef, onCancel }) {
  return (
    <Stack spacing={4}>
      <TextInput
        label='Nome'
        id='first-name'
        ref={firstFieldRef}
        defaultValue='Schopenhauer'
      />
      <TextInput label='Cognome' id='last-name' defaultValue='Smith' />
      <ButtonGroup d='flex' justifyContent='flex-end'>
        <Button variant='outline' onClick={onCancel}>
          Annulla
        </Button>
        <Button  colorScheme='teal'>
          Salva
        </Button>
      </ButtonGroup>
    </Stack>
  )
}

// 3. Create the Popover
// Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
export function PopoverForm  () {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = React.useRef(null)

  return (
    <>
      <Box d='inline-block' mr={3}>
        John Smith
      </Box>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton size='sm' icon={<FaEdit />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}

