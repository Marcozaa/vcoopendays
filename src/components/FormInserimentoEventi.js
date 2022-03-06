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
import Tags from './Tags';
import axios from 'axios';
import AutoCompleta from './AutoCompleta';
import AutoCompletaTagWorkshop from './AutoCompletaTagWorkshop';
export default function FormInserimentoEventi() {
  function getBase64(file) { }
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
  const [ore, setOre2] = useState(setOreMax());
  const [flag, setFlag] = useState(false);
  let items = [];
  let items2 = [];

function setOreMax(){
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getPostiRimanenti.php?codice=' + getCookie('username')
      )
      .then(res => {
        if(flag == false && res.data != ''){
        console.log(res.data);
        res.data.map(ore =>
          items2.push({
            oreTot: ore,
          })
        );
        setOre2({ items2: items2 });
        console.log(ore);
        console.log(ore.items2[0].oreTot.OreTotali);
        setFlag(true);
        console.log(ore.items2[0].oreTot.Codice_Meccanografico)

        
      document.getElementById("oreRimanenti").innerHTML = "Durata ore (" + ore.items2[0].oreTot.OreTotali + " ore rimanenti)"
      document.getElementById("labelEvento").innerHTML = "Posti (" + ore.items2[0].oreTot.Posti_Totali + " posti rimanenti)"

        }
      });
  }

  useEffect(() => {
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getPadiglioniPrenotati.php?id='
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



  const [tagsWrk, setTagsWrk] = useState([]);
  function inserimentoWorkshop() {
    var nomeWorkshop = document.getElementById('nome').value;
    var descrizione = document.getElementById('descrizione').value;
    var linkImmagine = document.getElementById('linkImmagine').value;
    var posti = document.getElementById('postiDisponibili').value;
    var oreScelte = document.getElementById('oreScelte').value;
    console.log(tagsWrk)
    if(posti > ore.items2[0].oreTot.Posti_Totali){
      posti = ore.items2[0].oreTot.Posti_Totali;
    }
    if(oreScelte > ore.items2[0].oreTot.OreTotali){
      posti =  ore.items2[0].oreTot.OreTotali;
    }
    console.log(
      '\n' +
      'nomeWorkshop = ' +
      nomeWorkshop +
      '\n' +
      'descrizione = ' +
      descrizione +
      '\n' +
      'posti = ' +
      posti +
      '\n' +
      'posti = ' +
      ore.items2[0].oreTot.Codice_Meccanografico
    );


    axios
      .post(
        'https://87.250.73.22/html/Zanchin/vcoopendays/inserimentoWorkshop.php?nome=' +
        nomeWorkshop +
        '&descrizione=' +
        descrizione +
        '&id=' +
        ore.items2[0].oreTot.ID_Padiglione +
        '&codice=' +
        ore.items2[0].oreTot.Codice_Meccanografico +
        '&posti=' +
        posti +
        '&ore=' +
        oreScelte +
        '&linkImmagine=' +
        linkImmagine +
        '&tag=' +
        tagsWrk +
        ''
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
                        name="nome"
                        id="nome"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                      <FormLabel
                        htmlFor="posti"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue('gray.700', 'gray.50')}
                        id="labelEvento"
                      >
                        Posti evento
                      </FormLabel>

                      <Input
                        required
                        type="text"
                        name="postiDisponibili"
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
                        Seleziona tags
                      </FormLabel>
                      <AutoCompletaTagWorkshop
                        tagsWrk={tagsWrk}
                        setTagsWrk={setTagsWrk}
                      />
                    </FormControl>
                  </SimpleGrid>
                  <Tags tagsWrk={tagsWrk} setTagsWrk={setTagsWrk} />

                  <div>
                    <FormControl
                      isRequired
                      id="text"
                      mt={1}
                      value={input}
                      onChange={handleInputChange}
                    >
                      <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue('gray.700', 'gray.50')}
                        id="oreRimanenti"
                      >
                        Orario
                      </FormLabel>
                      <Input required type="number" id="oreScelte"></Input>
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
                      Link immagine background Workshop.
                    </FormLabel>
                    <Textarea
                      mt={1}
                      rows={3}
                      shadow="sm"
                      focusBorderColor="brand.400"
                      fontSize={{ sm: 'sm' }}

                      id="linkImmagine"
                    />
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
