import React, { useState } from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
} from "@chakra-ui/react";

import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineSearch,
  AiFillBell,
} from "react-icons/ai";
import { BsCalendar, BsFillCameraVideoFill, BsTextarea } from "react-icons/bs";
import { FaTextWidth } from "react-icons/fa";
import axios from "axios";
export default function FiltroScuole({listaScuole,setListaScuole}) {
  const [input, setInput] = useState()
  const [risultatiScuole, setRisultatiScuole] = useState()
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  var items = []
  function onChangeInput(e){
    console.log(e.target.value)
    setInput(e.target.value)
    axios
      .get('https://87.250.73.22/html/Zanchin/vcoopendays/MatchWords.php?wordToSearch=' +input)
      .then(res => {
        console.log('Res.data=' + res.data);

        res.data.map(scuola =>
          
          items.push({
            scuola: scuola,
          })
        );
        setListaScuole({ items: items });

        
      });
  }

  function onSearch(){
    setInput("")
    console.log("hi")
    axios
      .get('https://87.250.73.22/html/Zanchin/vcoopendays/MatchWords.php?wordToSearch=' +input)
      .then(res => {
        console.log('Res.data=' + res.data);

        res.data.map(scuola =>
          
          items.push({
            scuola: scuola,
          })
        );
        setListaScuole({ items: items });

        
      });
  }
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
       
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Dashboard
                </Button>
                <Button
                  w="full"
                  variant="solid"
                  colorScheme="brand"
                  leftIcon={<AiOutlineInbox />}
                >
                  Inbox
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<BsFillCameraVideoFill />}
                >
                  Videos
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
  
 
            </chakra.a>

            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <Button variant="ghost" leftIcon={<BsTextarea />} size="sm">
                Ordina per nome
              </Button>
             
              <Button
                variant="ghost"
                leftIcon={<BsCalendar />}
                size="sm"
              >
                Ordina per data
              </Button>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineSearch />}
              />
              <Input type="tel" placeholder="Cerca scuole..." onChange={onChangeInput} onKeyPress={onSearch} />
            </InputGroup>

            <chakra.a
              p={3}
              color={useColorModeValue("gray.800", "inherit")}
              rounded="sm"
              _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
            >
              
            </chakra.a>

            
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}