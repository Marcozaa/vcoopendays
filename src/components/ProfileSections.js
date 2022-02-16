import React, {useState} from "react";

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
  Tabs,
  TabList,
  Tab,
  Spacer,
} from "@chakra-ui/react";

import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineSearch,
  AiFillBell,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";

export default function ProfileSections({iscrizioni}) {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  console.log(iscrizioni)
  return (
    <Box >
      
      <Flex
        alignItems="center"
        justifyContent="center"
        mx={2}
        borderWidth={0}
        overflowX="auto"
      >
        <Tabs defaultIndex={1} borderBottom={"transparent"} >
          <TabList>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Workshop
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Dati
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Collegamenti
            </Tab>
          
          </TabList>
        </Tabs>
        <Spacer />
      
      </Flex>

      { iscrizioni && (
      iscrizioni.items.map(iscrizione=>(
        
        <h1>{iscrizione.iscrizione.Nome_Workshop}</h1>
      ))
      )}
    </Box>
  );
}