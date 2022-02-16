import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  Tag,
  HStack,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";

const WorkshopScuolaCard = ({nomeScuola, tags, descrizione,utentiIscritti}) => {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color={useColorModeValue("brand.600", "brand.400")}
            >
              <HStack spacing={4}>
              {tags.map(tag => (
                  <Tag size={'sm'} key={'size'} variant={'solid'} colorScheme='teal'>
                      {tag}
                  </Tag>
              ))}
              </HStack>
            </chakra.span>
            <Link
              display="block"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
              
            >
              {nomeScuola}
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {descrizione}
            </chakra.p>
          </Box>

          <Box mt={4}>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <AvatarGroup size='md' max={2}>
                  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </AvatarGroup>
                <Link
                  mx={2}
                  fontWeight="bold"
                  color={useColorModeValue("gray.700", "gray.200")}
                  
                >
                 
                </Link>
              </Flex>
              <chakra.span
                mx={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                21 SEP 2015 - 11:30
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default WorkshopScuolaCard;