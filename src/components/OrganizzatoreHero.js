import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Link,
} from "@chakra-ui/react";

export default function OrganizzatoreHero() {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box bg={useColorModeValue("gray.50", "gray.800")}>
        <Box
          maxW="7xl"
          w={{ md: "3xl", lg: "4xl" }}
          mx="auto"
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: "flex" }}
          alignItems={{ lg: "center" }}
          justifyContent={{ lg: "space-between" }}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={useColorModeValue("gray.900", "gray.100")}
          >
            <chakra.span display="block">Sei un organizzatore?</chakra.span>
            <chakra.span
              display="block"
              color={useColorModeValue("brand.600", "gray.500")}
            >
              Iscriviti come organizzatore per il tuo istituto.
            </chakra.span>
          </chakra.h2>
          <Stack
            direction={{ base: "column", sm: "row" }}
            mt={{ base: 8, lg: 0 }}
            shrink={{ lg: 0 }}
          >
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color={useColorModeValue("black", "white")}
              bg={useColorModeValue("brand.600", "brand.500")}
              _hover={{
                bg: useColorModeValue("brand.700", "brand.600"),
              }}
            >
              Iscriviti
            </Link>
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color={useColorModeValue("black", "black")}
              bg="white"
              _hover={{
                bg: "brand.50",
              }}
            >
              Log-in
            </Link>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}