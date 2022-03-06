import React, { useRef, useEffect, useState } from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Button,
  FormControl,
  Text,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { MdQuestionAnswer } from "react-icons/md";
import { MdArrowUpward } from "react-icons/md";
import { Stack } from "@chakra-ui/react";
import { BsDash } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
export function ShortQuestion({ idUtente, id, data, titoloDomanda, immagineProfilo, nome, cognome, descrizione }) {
  const { onOpen, onClose, isOpen } = useDisclosure();
  var items = [];
  const [risposte, setRisposte] = useState()
  const firstFieldRef = useRef(null);



  useEffect(() => {
    axios
      .get('https://87.250.73.22/html/Zanchin/vcoopendays/getRisposteDomanda.php?id=' + id)
      .then(res => {
        console.log('Res.data=' + res.data);

        res.data.map(risposta =>

          items.push({
            risposta: risposta,
          })
        );
        setRisposte({ items: items });
      });
  }, []);



  var descrizioneDiminuita = descrizione
  if (descrizione.length > 100) {
    var descrizioneDiminuit = descrizione.substring(0, 100)
    descrizioneDiminuita += '...'
  }
  return (


    <Box
      w={'90%'}
      margin={'1rem'}
      px={8}
      py={4}
      rounded="lg"

      bg={useColorModeValue("white", "gray.800")}

    >
      <Flex justifyContent="space-between" alignItems="center">
        <chakra.span
          fontSize="sm"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          {data}
        </chakra.span>
        <Text
          px={3}
          py={1}
          bg="gray.600"
          color="gray.100"
          fontSize="sm"
          fontWeight="700"
          rounded="md"
          _hover={{ bg: "gray.500" }}
        >
          
        </Text>
      </Flex>

      <Box mt={2}>
        <Link to={`domanda/${id}/${idUtente}`}>
          <Text
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline",
            }}
          >
            {titoloDomanda}
          </Text>
        </Link>
        <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
          {descrizioneDiminuita}
        </chakra.p>
      </Box>

      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Text
          color={useColorModeValue("brand.600", "brand.400")}
          _hover={{ textDecor: "underline" }}
        >
          Mostra altro
        </Text>

        <Stack direction={'row'} spacing={'5vw'}>
          {risposte && (
            <p><MdQuestionAnswer />{risposte.items.length} </p>
          )}
          <p><MdArrowUpward /> 12</p>
        </Stack>
        <Flex alignItems="center">
          <Image
            mx={4}
            w={10}
            h={10}
            rounded="full"
            fit="cover"
            display={{ base: "none", sm: "block" }}
            src={immagineProfilo}
            alt="avatar"
          />
          <Text
            color={useColorModeValue("gray.700", "gray.200")}
            fontWeight="700"
            cursor="pointer"
          >
            {nome} {cognome}
          </Text>
        </Flex>
      </Flex>

    </Box>
  );
};

