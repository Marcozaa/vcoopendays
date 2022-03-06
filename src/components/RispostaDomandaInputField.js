import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  Stack,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Radio, RadioGroup, Textarea } from '@chakra-ui/react'
import { FaTextHeight } from "react-icons/fa";

export default function RispostaDomandaInputField({ idUtente, idDomanda }) {
  //var risposta = document.getElementById("risposta").value
  function setIdNull() {
    idUtente = 'NULL';
    console.log(idUtente)
  }
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

  function setId() {
    if(getCookie('username') == ''){setIdNull()}else{
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getDatiUtente2.php?emailInserita=' +
        getCookie('username')
      )
      .then(res => {
        idUtente = res.data[0].ID_Visitatore;
      });
      console.log(idUtente)
    }
  }
  function inserisciCommento() {
    setId();
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/insertCommento.php?idDomanda=' +
        idDomanda +
        '&idUtente=' +
        idUtente +
        '&content=' +
        document.getElementById("risposta").value
      )
      .then(res => {
        console.log(res.data);

      });
  }
  const toast = useToast()
  const Feature = (props) => {
    return (
      <Flex >
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}

            rounded="md"

            bg={useColorModeValue("brand.500")}
            color="white"

          >
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color={useColorModeValue("gray.900")}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={20}
      w="100%"
      justifyContent="center"
      alignItems="center"
      height={'60vh'}
    >
      <Box py={12} w={'100%'} bg={useColorModeValue("white", "gray.800")} rounded="xl">
        <Box mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>

            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900")}
            >
              La tua risposta
            </chakra.p>

          </Box>

          <Box mt={10} w={'100%'}>
            <Stack
              spacing={{ base: 10, md: 0 }}

            >
              <RadioGroup mb={6}>
                <Stack direction='row' spacing={5}>
                  <Radio onClick={setId()} value='dati'>Con i tuoi dati</Radio>
                  <Radio onClick={setIdNull()} value='anonimo'>Anonimo</Radio>
                </Stack>
              </RadioGroup>

              <Textarea
                placeholder='Scrivi la tua risposta...'
                size='sm'
                borderRadius={'0.5rem'}
                id="risposta"

              />
            </Stack>

          </Box>
          <Button
            onClick={() => {
              inserisciCommento();
              toast({
                title: 'Successo.',
                description: "Risposta inviata.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            }}


            marginTop={'2rem'}>Invia</Button>
        </Box>
      </Box>
    </Flex>
  );
}