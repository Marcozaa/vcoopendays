import React, { useEffect, useState } from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  Textarea,
  Avatar,
  Icon,
  Button,
  VisuallyHidden,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

import axios from 'axios';
import AutoCompleta from './AutoCompleta';

export default function FormRegistrazionePadiglione() {
  function getBase64(file) {}

  function checkDati() {
    /*
    var nomeInserito = document.getElementById('first_name').value;
    var cognomeInserito = document.getElementById('last_name').value;
    var passwordInserita = document.getElementById('password').value;
    var emailInserita = document.getElementById('email').value;
    var dataNascitaInserita = document.getElementById('data_nascita').value;
    var sessoInserito = document.getElementById('select_sesso').value;
    var file = document.getElementById('file-upload').files[0];


    if (
      nomeInserito.length > 25 ||
      cognomeInserito.length > 25 ||
      emailInserita.length > 50 ||
      passwordInserita.length > 18
    ) {
    } else {
      if (file == undefined) {
        inserimentoDati(
          nomeInserito,
          cognomeInserito,
          passwordInserita,
          emailInserita,
          dataNascitaInserita,
          sessoInserito,
          null
        );
      } else {
        var reader = new FileReader();
        var base64;
        reader.readAsDataURL(file);
        reader.onload = function () {
          base64 = reader.result;
          base64.replace(/\+/g, '%2B')
          inserimentoDati(nomeInserito,
            cognomeInserito,
            passwordInserita,
            emailInserita,
            dataNascitaInserita,
            sessoInserito,
            base64);
        }
      }
      */
  }

  function inserimentoDati(nome, cognome, password, email, data, sesso, file) {
    /* axios
        .post(
          'https://87.250.73.22/html/Zanchin/vcoopendays/insertUtente.php?nome=%27+' +
          nome +
          '%27&cognome=%27' +
          cognome +
          '%27&email=%27' +
          email +
          '%27&codiceMecc=%27AB123%27&password=%27' +
          password +
          '%27&classe=%27terza%27&sesso=%27' +
          sesso +
          '%27&dataNascita=%27' +
          data +
          '%27&profilepic=%27' +
          base64 +
          '%27'
        )
        .then(res => {
          console.log(res);
        });*/
  }
  /**
   * Gestione vincoli input
   */
  const [input, setInput] = useState('');

  const handleInputChange = e => setInput(e.target.value);

  const isError = input === '';

  const [IdPadiglioniDisponibili, setIdPadiglioniDisponibili] = useState(null);
  const [codiciScuole, setcodiciScuole] = useState();
  let items = [];
  let itemsScuole = [];
  useEffect(() => {
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getPadiglioniDisponibili.php'
      )
      .then(res => {
        console.log(res.data);
        res.data.map(padiglione =>
          items.push({
            workShop: padiglione,
          })
        );
        setIdPadiglioniDisponibili({ items: items });
        setScuole();
      });
  }, []);

  function setScuole() {
    axios
      .get('https://87.250.73.22/html/Zanchin/vcoopendays/getScuole.php')
      .then(res => {
        console.log(res.data);
        res.data.map(scuola =>
          itemsScuole.push({
            scuola: scuola,
          })
        );
        setcodiciScuole({ itemsScuole: itemsScuole });
      });
  }

  function setPadiglione() {
    var codiceMeccano = document.getElementById('selCodice').value;
    var idPadiglione = document.getElementById('selPadiglione').value;
    console.log("Dio: " + codiceMeccano + " Cane: " + idPadiglione);
    axios
      .post(
        'https://87.250.73.22/html/Zanchin/vcoopendays/setPadiglioneMeccano.php?codice=' +
          codiceMeccano +
          '&id=' +
          idPadiglione 
      )
      .then(res => {
        console.log(res);
      });
  }

  return (
    <Box bg={useColorModeValue('gray.50', 'inherit')} p={10}>
      <Box>
        <SimpleGrid
          display={{ base: 'initial', md: 'grid' }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            <GridItem colSpan={{ md: 1 }}>
              <Box px={[4, 0]}>
                <Heading fontSize="lg" fontWeight="md" lineHeight="6">
                  Prenotazione padiglioni
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color={useColorModeValue('gray.600', 'gray.400')}
                >
                  Prenotazione dei padiglioni da parte delle scuole. Verrai
                  notificato con l'accettazione della proposta o il rifiuto
                  entro 5 ore dall'invio.
                </Text>
              </Box>
            </GridItem>
          </motion.div>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form
              shadow="base"
              rounded={[null, 'md']}
              overflow={{ sm: 'hidden' }}
            >
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
              >
                <Stack
                  px={4}
                  py={5}
                  bg={useColorModeValue('white', 'gray.700')}
                  spacing={6}
                  p={{ sm: 6 }}
                >
                  <SimpleGrid columns={6} spacing={6}>
                    <FormControl isRequired as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="number"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue('gray.700', 'gray.50')}
                        marginTop="1vw"
                      >
                        Seleziona il codice meccanografico
                      </FormLabel>
                      <Select id="selCodice">
                        {codiciScuole &&
                          codiciScuole.itemsScuole.map(scuola => (
                            <option
                              value={scuola.scuola.Codice_Meccanografico}
                            >
                              {scuola.scuola.Codice_Meccanografico} -{' '}
                              {scuola.scuola.Nome_Scuola}
                            </option>
                          ))}
                      </Select>

                      <FormControl as={GridItem} colSpan={[4, 4]} isRequired>
                        <FormLabel
                          htmlFor="number"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue('gray.700', 'gray.50')}
                          marginTop="1vw"
                        >
                          Password
                        </FormLabel>
                        <Input type="password" id="passwordInserita" />
                      </FormControl>
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
                      <FormLabel
                        htmlFor="number"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue('gray.700', 'gray.50')}
                        marginTop="1vw"
                      >
                        Seleziona il padiglione
                      </FormLabel>
                      <Select id="selPadiglione">
                        {IdPadiglioniDisponibili &&
                          IdPadiglioniDisponibili.items.map(padiglione => (
                            <option
                              value={padiglione.workShop.ID_Padiglione}
                            >
                              {padiglione.workShop.ID_Padiglione}
                            </option>
                          ))}
                      </Select>
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
                      <FormLabel
                        htmlFor="number"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue('gray.700', 'gray.50')}
                        marginTop="1vw"
                      >
                        Email
                      </FormLabel>
                      <Input type="email" id="emailInserita" />
                    </FormControl>
                  </SimpleGrid>
                </Stack>
              </motion.div>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue('gray.50', 'gray.900')}
                textAlign="right"
              >
                <Button onClick={setPadiglione} size="lg">
                  Continua
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box visibility={{ base: 'hidden', sm: 'visible' }} aria-hidden="true">
        <Box py={5}>
          <Box
            borderTop="solid 1px"
            borderTopColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}
