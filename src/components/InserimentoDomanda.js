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
export default function InserimentoDomanda({idUtente}) {
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

  
  let items = [];
 
  const [tagsWrk, setTagsWrk] = useState([]);
  function inserimentoDomanda() {
    var TitoloDomanda = document.getElementById('TitoloDomanda').value;

    var descrizione = document.getElementById('descrizione').value;

    console.log(TitoloDomanda)
  

    axios
      .post(
        'https://87.250.73.22/html/Zanchin/vcoopendays/inserimentoDomanda.php?titoloDomanda=' +
          TitoloDomanda +
          '&idutente=' +
          idUtente+
           '&descrizione=' +
          descrizione 
          
      )
      .then(res => {
        console.log(res);
      });
  }

  return (
    <Box bg={useColorModeValue('gray.50', 'inherit')} >
      <Box>
        
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
                  w={'100%'}
                >
                  <SimpleGrid columns={6} spacing={6}>
                    <FormControl isRequired as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="first_name"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue('gray.700', 'gray.50')}
                      >
                        TitoloDomanda
                      </FormLabel>

                      <Input
                        required
                        type="text"
                        name="nome"
                        id="TitoloDomanda"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="md"
                        w="full"
                        rounded="md"
                      />
                     
                    

                    
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
                      id="text"
                      mt={1}
                      value={input}
                      onChange={handleInputChange}
                    >
                      
                     
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
                        Descrizione
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
                        Breve descrizione della domanda.
                      </FormHelperText>
                    </FormControl>
                  </div>

                  
                  
                </Stack>
              </motion.div>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue('gray.50', 'gray.900')}
                textAlign="right"
              >
                <Button onClick={inserimentoDomanda} size="lg">
                  Continua
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
       
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
