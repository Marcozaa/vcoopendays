import React, { useState } from "react";
import {
  chakra,
  Box,
  GridItem,
  useColorModeValue,
  Button,
  Stack,
  Center,
  Flex,
  Icon,
  SimpleGrid,
  VisuallyHidden,
  Input,
} from "@chakra-ui/react";
import axios from 'axios';
import Navbar from "./Navbar";
const LoginContainer = () => {
   const [loginEseguito, setLoginEseguito]= useState(null)
    function login(){
      var passwordInserita = document.getElementById("password").value
            var emailInserita = document.getElementById("email").value
        axios.get('https://87.250.73.22/html/Zanchin/vcoopendays/loginTest.php?emailInserita='
        +emailInserita+"&passwordInserita="+passwordInserita).then(res => 
        {
        console.log(res)
           }); 
    }
  return (
    <Box px={8} py={24} mx="auto">
      <SimpleGrid
        alignItems="center"
        w={{ base: "full", xl: 11 / 12 }}
        columns={{ base: 1, lg: 11 }}
        gap={{ base: 0, lg: 24 }}
        mx="auto"
      >
        <GridItem
          colSpan={{ base: "auto", lg: 7 }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <chakra.h1
            mb={4}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight={{ base: "shorter", md: "none" }}
            color={useColorModeValue("gray.900","gray.200")}
            letterSpacing={{ base: "normal", md: "tight" }}
          >
            Bentornato.
          </chakra.h1>
          <chakra.p
            mb={{ base: 10, md: 4 }}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="thin"
            color="gray.500"
            letterSpacing="wider"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </chakra.p>
        </GridItem>
        <GridItem colSpan={{ base: "auto", md: 4 }}>
          <Box as="form" mb={6} rounded="lg" shadow="xl">
            <Center pb={0} color={useColorModeValue("gray.700","gray.600")}>
           
            </Center>
            <SimpleGrid
              columns={1}
              px={6}
              py={4}
              spacing={4}
              borderBottom="solid 1px"
              borderColor={useColorModeValue("gray.200","gray.700")}
            >
       
              <Flex>
                <VisuallyHidden>Email Address</VisuallyHidden>
                <Input
                  mt={0}
                  type="email"
                  placeholder="Email Address"
                  required="true"
                  id="email"
                />
              </Flex>
              <Flex>
                <VisuallyHidden>Password</VisuallyHidden>
                <Input
                  mt={0}
                  type="password"
                  placeholder="Password"
                  required="true"
                  id="password"
                />
              </Flex>
          
            </SimpleGrid>
            <Flex px={6} py={4}>
              <Button
                py={2}
                w="full"
                colorScheme="blue"
                onClick={login}
              >
                Log in
              </Button>
            </Flex>
          </Box>
          <chakra.p fontSize="xs" textAlign="center" color="gray.600">
            By logging in you agree to our{" "}
            <chakra.a color="brand.500" >
              Terms of Service
            </chakra.a>
          </chakra.p>
        </GridItem>
      </SimpleGrid>
    </Box>
    
  );
};

export default LoginContainer;