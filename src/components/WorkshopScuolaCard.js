import React, { useState, useEffect } from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  Tag,
  HStack,
  Avatar,
  AvatarGroup,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { Alert, AlertDescription, AlertIcon, AlertTitle,CloseButton,  Text, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import { FaMale, FaSchool } from 'react-icons/fa';
import ProfileSections from '../components/ProfileSections';
import { Form } from '../components/ChangeNameOverlay';
import { Popover, PopoverTrigger } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { PopoverContent } from '@chakra-ui/react';
import  FocusLock from "react-focus-lock"
import { PopoverArrow } from '@chakra-ui/react';
import { PopoverCloseButton } from '@chakra-ui/react';
const WorkshopScuolaCard = ({nomeScuola, tags, descrizione,PostiDisponibili, Ora_inizio, Ora_Fine, codiceMeccanoGraficoScuola, immagine_cover}) => {
  const [idUtente, setIdUtente] = useState()
  const [idUtenti, setidUtenti] = useState(null)
  const [utentiPartecipanti, setUtentiPartecipanti] = useState(null)
  var items = []
  var items2 = []
  useEffect(() => {
    // Grab user id from email
    axios
      .get('https://87.250.73.22/html/Zanchin/vcoopendays/getVisitatoreIDfromMail.php?email=' +
          getCookie('username'))
      .then(res => {

        setIdUtente( res.data[0].ID_Visitatore );
      });

      // Get id per ogni partecipante al workshop
      axios
      .get('https://87.250.73.22/html/Zanchin/vcoopendays/getIdPartecipantiWorkshop.php?nomeWorkshop=' +
          nomeScuola)
       .then(res => {
        res.data.map(id =>
          
          items.push({
            id: id,
          })
        );
        setidUtenti({ items: items });

        
        
      })

      
  }, []);

  function getUtenti(){
    // console.log(idUtenti)
        // Richiesta GET annidata - profili partecipanti workshop
         for(var i = 0 ; i< idUtenti.items.length; i++){
        axios
      .get('https://87.250.73.22/html/Zanchin/vcoopendays/getDatiUtenteFromId.php?id=' +
          idUtenti.items[i].id.ID_Visitatore)
       .then(res => {
        console.log(res.data)
          res.data.map(utente =>
          items2.push({
            utente: utente,
          })
        );
        setUtentiPartecipanti({ items2: items2 });
      })

        }
  }

  function effettuaRegistrazione(){
    // nomeWorkshop'];    codiceScuola = $_GET['codiceScuola'];   $idUtente = $_GET['idUtente'`
  
    axios
      .get('https://87.250.73.22/html/Zanchin/vcoopendays/inserimentoPartecipazioneWorkshop.php?nomeWorkshop=%27' +
          nomeScuola +
          '%27&codiceScuola=%27' +
          codiceMeccanoGraficoScuola +
          '%27&idUtente=%27' +
          idUtente +
          '%27'
        )
      .then(res => {
        console.log( res.data);
      
      });

  }


   // Prende cookie da browser
  function getCookie(cname) {
    let name = cname + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
    const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = useRef(null)
  return (
    
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={useColorModeValue("white", "gray.800")}
        position={'relative'}
        maxW="2xl"
      >
        <p position={'absolute'} top={0} right={0}>Condividi </p>
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
        
        <Image
        position={'relative'}
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={immagine_cover}
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color={useColorModeValue("brand.600", "brand.400")}
            >
              <HStack spacing={4}>
              {tags.map(tag => (
                  <Tag size={'sm'} key={'size'} variant={'solid'} colorScheme='teal'>
                      {tag}
                  </Tag>
              ))}
              </HStack>
            </chakra.span>
            <Link
              display="block"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
              
            >
              {nomeScuola}
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {descrizione}
            </chakra.p>
            <chakra.p>Posti disponibili: {PostiDisponibili}</chakra.p>
          </Box>

          <Box mt={4} position={'relative'}>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <AvatarGroup size='md' max={2}>

                  { (idUtenti && (
                  idUtenti.items.map(utente => (
                      <Avatar name='Ryan Florence' src={utente.id.immagine_profilo} />
                  ))
                ))
                }
                </AvatarGroup>
                <Link
                  mx={2}
                  fontWeight="bold"
                  color={useColorModeValue("gray.700", "gray.200")}
                  
                >
                 
                </Link>
              </Flex>
              <chakra.span
                mx={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                21 SEP 2015 - {Ora_inizio} - {Ora_Fine}
                
              </chakra.span>
               <Button position={'absolute'} bottom={0} right={0} onClick={effettuaRegistrazione}>Registrati</Button>
            </Flex>
            
          </Box>
          
        </Box>
       
      </Box>
    
 
  );
};

export default WorkshopScuolaCard;