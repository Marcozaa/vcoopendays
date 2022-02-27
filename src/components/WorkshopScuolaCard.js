import React, { useState, useEffect } from 'react';
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
} from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import axios from 'axios';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { FaMale, FaSchool } from 'react-icons/fa';
import ProfileSections from '../components/ProfileSections';
import { Form } from '../components/ChangeNameOverlay';
import { Popover, PopoverTrigger } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { PopoverContent } from '@chakra-ui/react';
import FocusLock from 'react-focus-lock';
import { PopoverArrow } from '@chakra-ui/react';
import { PopoverCloseButton } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import { BsDownload } from 'react-icons/bs';
const WorkshopScuolaCard = ({
  nomeScuola,
  tags,
  descrizione,
  PostiDisponibili,
  Ora_inizio,
  Ora_Fine,
  codiceMeccanoGraficoScuola,
  immagine_cover,
  tag
}) => {
  const toast = useToast()
  const [idUtente, setIdUtente] = useState();
  const [idUtenti, setidUtenti] = useState(null);
  const [utentiPartecipanti, setUtentiPartecipanti] = useState(null);
  var items = [];
  var items2 = [];
  const tags_workshop = tag.split(",") // array di tag ottenuto dalla stringa 
  useEffect(() => {
    // Grab user id from email
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getVisitatoreIDfromMail.php?email=' +
          getCookie('username')
      )
      .then(res => {
        setIdUtente(res.data[0].ID_Visitatore);
      });

    // Get id per ogni partecipante al workshop
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getIdPartecipantiWorkshop.php?nomeWorkshop=' +
          nomeScuola
      )
      .then(res => {
        res.data.map(id =>
          items.push({
            id: id,
          })
        );
        setidUtenti({ items: items });
      });
  }, []);

  function getUtenti() {
    // console.log(idUtenti)
    // Richiesta GET annidata - profili partecipanti workshop
    for (var i = 0; i < idUtenti.items.length; i++) {
      axios
        .get(
          'https://87.250.73.22/html/Zanchin/vcoopendays/getDatiUtenteFromId.php?id=' +
            idUtenti.items[i].id.ID_Visitatore
        )
        .then(res => {
          console.log(res.data);
          res.data.map(utente =>
            items2.push({
              utente: utente,
            })
          );
          setUtentiPartecipanti({ items2: items2 });
        });
    }
  }

  console.log(tags_workshop)

  function effettuaRegistrazione() {
    // nomeWorkshop'];    codiceScuola = $_GET['codiceScuola'];   $idUtente = $_GET['idUtente'`

    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/inserimentoPartecipazioneWorkshop.php?nomeWorkshop=%27' +
          nomeScuola +
          '%27&codiceScuola=%27' +
          codiceMeccanoGraficoScuola +
          '%27&idUtente=%27' +
          idUtente +
          '%27'
      )
      .then(res => {
        console.log(res.data);
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
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef(null);
  return (
    <Box
      mx="auto"
      rounded="lg"
      shadow="md"
      bg={useColorModeValue('white', 'gray.800')}
      position={'relative'}
      maxW="2xl"
    >
    

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
            color={useColorModeValue('brand.600', 'brand.400')}
          >
            <HStack spacing={4}>
              {tags_workshop.map(tag => (
                <Tag
                  size={'sm'}
                  key={'size'}
                  variant={'solid'}
                  colorScheme="teal"
                >
                  {tag}
                </Tag>
              ))}
            </HStack>
          </chakra.span>
          <Link
            display="block"
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
            _hover={{ color: 'gray.600', textDecor: 'underline' }}
          >
            {nomeScuola}
          </Link>
          <chakra.p
            mt={2}
            fontSize="sm"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {descrizione}
          </chakra.p>
          <chakra.p>Posti disponibili: {PostiDisponibili}</chakra.p>
        </Box>

        <Box mt={4} position={'relative'}>
          <Flex alignItems="center">
            <Flex alignItems="center">
              <AvatarGroup size="md" max={2}>
                {idUtenti &&
                  idUtenti.items.map(utente => (
                    <Avatar
                      name="Ryan Florence"
                      src={utente.id.immagine_profilo}
                    />
                  ))}
              </AvatarGroup>
              <Link
                mx={2}
                fontWeight="bold"
                color={useColorModeValue('gray.700', 'gray.200')}
              ></Link>
            </Flex>
            <chakra.span
              mx={1}
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              21 SEP 2015 - {Ora_inizio} - {Ora_Fine}
            </chakra.span>
            <Stack direction='row' spacing={4} position={'absolute'}
              bottom={0}
              right={0}>

            <Button
              
              onClick={()=>{effettuaRegistrazione(); 
              toast({
          title: 'Successo.',
          description: "Ti sei registrato al workshop.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
              }}
            >
              Registrati
            </Button>
            <Button onClick={onOpen}>Informazioni</Button>
            </Stack>
            

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Incontro di Area di Giurisprudenza</ModalHeader>
                <ModalCloseButton />
                <Image src={immagine_cover}></Image>
                <ModalBody>
                  <Text m={3}>
                    Introduzione generale dei Corsi di laurea dell'Area di
                    Giurisprudenza e presentazione del Corso di laurea
                    magistrale a ciclo unico in Giurisprudenza e del Corso di
                    laurea triennale in Scienze dei Servizi Giuridici da parte
                    dei docenti. Iscriviti all'evento per partecipare in diretta
                    e porre le tue domande. Nella locandina puoi scoprire il
                    programma generale dell'incontro.
                  </Text>
                  <Text fontSize="xs" color={'gray.400'}>
                    Relatori: Prof. Vito VELLUZZI - Presidente Comitato
                    Direzione Facoltà di Giurisprudenza; Prof. Andrea TINA -
                    Presidente Collegio Didattico CdL in Giurisprudenza;
                    Prof.ssa Daniela MILANI - Presidente Collegio Didattico CdL
                    in Scienze dei Servizi Giuridici
                  </Text>
                </ModalBody>
                <FormControl display={'flex'} justifyContent={'center'}>
                  <Flex
                    marginLeft={2}
                    marginRight={2}
                    w={'60%'}
                    mt={1}
                    justify="center"
                    px={6}
                    pt={5}
                    pb={6}
                    borderWidth={2}
                    borderColor={useColorModeValue('gray.300', 'gray.500')}
                    borderStyle="dashed"
                    rounded="md"
                  >
                    <Button leftIcon={<BsDownload />}>Scarica locandina</Button>
                  </Flex>
                </FormControl>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Chiudi
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkshopScuolaCard;
