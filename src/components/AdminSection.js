import React from "react";

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

export default function ProfileSections() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

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
              Visitatori da verificare
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Visitatori
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Dashboard
            </Tab>
          
          </TabList>
        </Tabs>
        <Spacer />
      
      </Flex>
    </Box>
  );
}