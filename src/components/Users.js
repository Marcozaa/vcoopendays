import React, { useEffect, useState } from 'react';
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
import AdminSection from '../components/AdminSection';
import {
  chakra,
  Button,
  useBreakpointValue,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react';
import { AiFillEdit } from 'react-icons/ai';
import { BsBoxArrowUpRight, BsFillTrashFill } from 'react-icons/bs';
import axios from 'axios';
import { FaLock, FaLockOpen, FaUnlock, FaUserLock } from 'react-icons/fa';
export default function Users() {
  // http req api utenti database
  const [utenti, setUtenti] = useState(null);
  var c = 0;
  let items = [];
  const header = ['nome', 'ultimo accesso', 'azioni'];
  const data = [];
  useEffect(() => {
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getVisitatoriNonConfermati.php'
      )
      .then(res => {
        res.data.map(utente =>
          items.push({
            utente: utente,
          })
        );
        setUtenti({ items: items });
      });
  }, []);

  function verificaUtente(id) {
    // conferma utente where id = id
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/updateStatoUtente.php?idutente=' +
        id
      )
      .then(res => {
        window.location.reload(false);
      });
  }

  function bannaUtente(id) {
    // banna utente where id = id
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/rimuoviUtente.php?idutente=' +
        id
      )
      .then(res => {
        window.location.reload(false);
      });
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
        direction={{ base: 'column' }}
        w="full"
        bg={{ md: useColorModeValue('white', 'gray.800') }}
        shadow="lg"
      >
      <AdminSection />
        <SimpleGrid
          spacingY={3}
          columns={{ base: 1, md: 3 }}
          w={{ base: 120, md: 'full' }}
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
          <chakra.span textAlign={{ md: 'right' }}>Actions</chakra.span>
        </SimpleGrid>
        {utenti &&
          utenti.items.map(utente => (
            <Flex
              direction={{ base: 'row', md: 'column' }}
              bg="white"
              key={'pid'}
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
                <Flex
                  justify={{ md: 'end' }}
                  alignItems={'center'}
                  justifyContent={'space-around'}
                >
                  <Button
                    onClick={() => {
                      if (
                        window.confirm(
                          'Sei sicuro di voler cancellare utente: ' +
                          utente.utente.Nome +
                          ' con id: ' +
                          utente.utente.ID_Visitatore +
                          '?'
                        )
                      )
                        bannaUtente(utente.utente.ID_Visitatore);
                    }}
                    variant="solid"
                    colorScheme="red"
                    size="sm"
                  >
                    Ban
                  </Button>

                  {utente.utente.Confermato == 1 ? (
                    <Flex justifyContent={'center'} alignItems={'center'}>
                      <FaLock cursor={'pointer'} />
                      <p>&nbsp;Rimuovi verifica</p>
                    </Flex>
                  ) : (
                    <Flex justifyContent={'center'} alignItems={'center'}>
                      <FaUnlock cursor={'pointer'} />
                      <Button onClick={() => {
                        if (
                          window.confirm(
                            'Sei sicuro di voler confermare utente: ' +
                            utente.utente.Nome +
                            ' con id: ' +
                            utente.utente.ID_Visitatore +
                            '?'
                          )
                        )
                          verificaUtente(utente.utente.ID_Visitatore);
                      }}>
                        <p>Aggiungi verifica</p>
                      </Button>
                    </Flex>
                  )}
                </Flex>
              </SimpleGrid>
            </Flex>
          ))}
      </Stack>
    </Flex>
  );
}
