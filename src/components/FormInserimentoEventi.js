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

export default function FormInserimentoEventi() {
  function getBase64(file) { }

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
  let items = [];
  useEffect(() => {
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getPadiglioniPrenotati.php'
      )
      .then(res => {
        console.log(res.data);
        res.data.map(padiglione =>
          items.push({
            workShop: padiglione,
          })
        );
        setIdPadiglioniDisponibili({ items: items });
        console.log(IdPadiglioniDisponibili.items);
      });
  }, []);

  function inserimentoWorkshop() {
    var idPadiglione = document.getElementById("selPadiglione").value;
    var nomeWorkshop = document.getElementById("first_name").value;
    var descrizione = document.getElementById("descrizione").value;
    var posti = document.getElementById("posti_").value;
    console.log("padiglione " . idPadiglione);

    const datiPadiglione = idPadiglione.split(".");

    axios
      .post(
        'https://87.250.73.22/html/Zanchin/vcoopendays/insertUtente.php?nome=%27+' +
        nomeWorkshop +
        '%27&descrizione=%27' +
        descrizione +
        '%27&padiglione=%27' +
        datiPadiglione[0] +
        '%27&codice=%27' +
        datiPadiglione[1] +
        '%27&posti=%27' +
        posti +
        '%27%'
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
                  Workshop
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color={useColorModeValue('gray.600', 'gray.400')}
                >
                  Inserimento workshop per le scuole. Verrai notificato con
                  l'accettazione della proposta o il rifiuto entro 5 ore
                  dall'invio.
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
                        htmlFor="first_name"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue('gray.700', 'gray.50')}
                      >
                        Nome evento
                      </FormLabel>

                      <Input
                        required
                        type="text"
                        name="posti_"
                        id="first_name"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                      <FormLabel
                        htmlFor="first_name"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue('gray.700', 'gray.50')}
                      >
                        Posti evento
                      </FormLabel>

                      <Input
                        required
                        type="text"
                        name="first_name"
                        id="postiDisponibili"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
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

                            <option value={padiglione.workShop.ID_Padiglione.concat("." + padiglione.workShop.Codice_Meccanografico)}>
                              {padiglione.workShop.ID_Padiglione} - {padiglione.workShop.Codice_Meccanografico}
                            </option>
                          ))}
                      </Select>
                    </FormControl>
                  </SimpleGrid>

                  <div>
                    <FormControl
                      id="text"
                      mt={1}
                      value={input}
                      onChange={handleInputChange}
                    >
                      <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue('gray.700', 'gray.50')}
                      >
                        Orario
                      </FormLabel>
                      <Select>
                        {IdPadiglioniDisponibili &&
                          IdPadiglioniDisponibili.items.map(padiglione => (
                            <option value="option1">
                              {padiglione.workShop.ID_Padiglione}
                            </option>
                          ))}
                      </Select>
                      <FormHelperText>
                        Breve descrizione del workshop.
                      </FormHelperText>
                    </FormControl>
                  </div>
                  <div>
                    <FormControl
                      id="email"
                      mt={1}
                      value={input}
                      onChange={handleInputChange}
                    >
                      <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue('gray.700', 'gray.50')}
                      >
                        About
                      </FormLabel>
                      <Textarea
                        mt={1}
                        rows={3}
                        shadow="sm"
                        focusBorderColor="brand.400"
                        fontSize={{ sm: 'sm' }}
                        id="descrizione"
                      />
                      {!isError ? (
                        <FormHelperText>
                          Non inserire dati sensibili.
                        </FormHelperText>
                      ) : (
                        <FormErrorMessage>
                          Una descrizione è richiesta.
                        </FormErrorMessage>
                      )}
                      <FormHelperText>
                        Breve descrizione del workshop.
                      </FormHelperText>
                    </FormControl>
                  </div>

                  <FormControl>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Foto cover
                    </FormLabel>
                    <Flex
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
                      <Stack spacing={1} textAlign="center">
                        <Icon
                          mx="auto"
                          boxSize={12}
                          color={useColorModeValue('gray.400', 'gray.500')}
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </Icon>
                        <Flex
                          fontSize="sm"
                          color={useColorModeValue('gray.600', 'gray.400')}
                          alignItems="baseline"
                        >
                          <chakra.label
                            htmlFor="file-upload"
                            cursor="pointer"
                            rounded="md"
                            fontSize="md"
                            color={useColorModeValue('brand.600', 'brand.200')}
                            pos="relative"
                            _hover={{
                              color: useColorModeValue(
                                'brand.400',
                                'brand.300'
                              ),
                            }}
                          >
                            <span>Carica una foto</span>
                            <VisuallyHidden>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                              />
                            </VisuallyHidden>
                          </chakra.label>
                        </Flex>
                        <Text
                          fontSize="xs"
                          color={useColorModeValue('gray.500', 'gray.50')}
                        >
                          PNG, JPG, GIF up to 10MB
                        </Text>
                      </Stack>
                    </Flex>
                  </FormControl>
                </Stack>
              </motion.div>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue('gray.50', 'gray.900')}
                textAlign="right"
              >
                <Button onClick={inserimentoWorkshop} size="lg">
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
