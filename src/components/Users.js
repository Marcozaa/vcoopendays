import React, {useEffect, useState} from 'react';
import {
  Flex,
  useColorModeValue,
  ButtonGroup,
  IconButton,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from '@chakra-ui/react';
import {
  chakra,
 

  Button,
  useBreakpointValue,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { AiFillEdit } from 'react-icons/ai';
import { BsBoxArrowUpRight, BsFillTrashFill } from 'react-icons/bs';
import axios from 'axios';
import { FaLock, FaLockOpen, FaUnlock, FaUserLock } from 'react-icons/fa';
export default function Users() {

    // http req api utenti database
    const [utenti, setUtenti] = useState(null);
  var c = 0;
  let items = []
  const header = ['nome', 'ultimo accesso', 'azioni'];
  const data = [
    { nome: 'Daggy', online: '7 giorni fa' },
    { nome: 'Anubra', online: '23 ore fa' },
    { nome: 'Josef', online: 'Qualche ora fa' },
    { nome: 'Sage', online: 'Qualche secondo fa' },
  ];
  useEffect(() => {
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getVisitatori.php'
      )
      .then(res => {
        console.log(res.data)
        res.data.map(utente => 
          items.push({
            
            utente: utente
          })
        )
        setUtenti({ items: items})

        console.log(utenti)


      console.log(data[0].nome)
        
       
      });
  }, []);


  function bannaUtente(id){
    // banna utente where id = id
    console.log(id)
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/rimuoviUtente.php?idutente='+id
      )
      .then(res => {
        console.log(res.data)
      })
  }
  return (
    <Flex
      w="full"
      bg="gray.600"
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: useColorModeValue("white", "gray.800") }}
        shadow="lg"
      >
         <SimpleGrid
                  spacingY={3}
                  columns={{ base: 1, md: 3 }}
                  w={{ base: 120, md: "full" }}
                  textTransform="uppercase"
                  bg="gray.100"
                  color="gray.500"
                  py={{ base: 1, md: 4 }}
                  px={{ base: 2, md: 10 }}
                  fontSize="md"
                  fontWeight="hairline"
                  display="table-header-group"
                >
                  <span>Name</span>
                  <span>Email</span>
                  <chakra.span textAlign={{ md: "right" }}>Actions</chakra.span>
                </SimpleGrid>
        {utenti && (
            utenti.items.map(utente => (
        
          
            <Flex
              direction={{ base: "row", md: "column" }}
              bg="white"
              key={"pid"}
            >
              
               
              
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 3 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
                color={'black'}
              >
                <span>{utente.utente.Nome}</span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {utente.utente.Email}
                </chakra.span>
                <Flex justify={{ md: "end" }} alignItems={'center'} justifyContent={'space-around'}>
                  <Button onClick={()=>bannaUtente(utente.utente.ID_Visitatore)} variant="solid" colorScheme="red" size="sm">
                    Ban
                  </Button>
                
                  {utente.utente.Confermato == 1 ? 
                  <Flex justifyContent={'center'}  alignItems={'center'}> 
                    <FaLock cursor={'pointer'} /> 
                    <p>&nbsp;Rimuovi verifica</p> 
                    </Flex>: 
                  <Flex justifyContent={'center'}  alignItems={'center'}>
                    <FaUnlock  
                    cursor={'pointer'}/>
                    <p>&nbsp;Aggiungi verifica</p> 
                  </Flex>
                  }
               
                </Flex>
              </SimpleGrid>
            </Flex>
          
            )))}
      </Stack>
    </Flex>
)}
    

  