import { Box, Circle, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Quotee } from './Quotee.tsx'
import { QuoteIcon } from './QuoteIcon.tsx'
import { useState } from 'react'




export function Reviews  () {
  const quotes = [ 
    "I love your system. I don't always clop, but when I do, it's because of vcodays. It's really wonderful.", "Armond F.",
    "It really saves me time and effort. vcodays is exactly what our business has been lacking. I didn't even need training.", "Hendrik G.",
    "Nice work on your vcodays. Vcodays is the real deal! I STRONGLY recommend vcodays to EVERYONE.", "Niki F."
]
  const [quote, setQuote] = useState(quotes[0]) // scorrimento citazioni 
  const [name, setName] = useState(quotes[1]) // scorrimento citazioni 
  function changeQuote(numeroBottone){
    if(numeroBottone==0){
      setQuote(quotes[0])
      setName(quotes[1])
    }
    if(numeroBottone==1){
      setQuote(quotes[2])
      setName(quotes[3])
    }
    if(numeroBottone==2){
      setQuote(quotes[4])
      setName(quotes[5])
    }
   
  }
  return (
  <Box as="section" bg={useColorModeValue('white', 'gray.800')}>
    <Box maxW="3xl" mx="auto" px={{ base: '6', md: '8' }} pt="12" pb="16">
      <Flex direction="column" align="center" textAlign="center">
        <QuoteIcon
          color={useColorModeValue('gray.300', 'gray.600')}
          fontSize={{ base: '3xl', md: '6xl' }}
        />
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" mt="6">
          &ldquo;{quote}&rdquo;
        </Text>
        <Quotee
          name={name}
          jobTitle="Studente"
          imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTN8fGxhZHklMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          mt="8"
        />
      </Flex>
      <HStack justify="center" spacing="4" mt="8" color={useColorModeValue('gray.300', 'gray.600')}>
        <Circle w="3" h="3" bg="blue.500"  style={{cursor:'pointer'}} onClick={()=>changeQuote(0)}/>
        <Circle w="2" h="2" bg="currentColor" style={{cursor:'pointer'}} onClick={()=>changeQuote(1)} />
        <Circle w="2" h="2" bg="currentColor" style={{cursor:'pointer'}} onClick={()=>changeQuote(2)}/>
      </HStack>
    </Box>
  </Box>
  )
  }