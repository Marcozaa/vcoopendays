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
  Avatar,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiFillBell,
} from "react-icons/ai";
import { BsFillCameraVideoFill, BsPerson, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdSchool } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import './navbar.css'
export default function Navbar() {
  const bg = useColorModeValue("white.900", "gray.800");
  const mobileNav = useDisclosure();


  function checkLogin(){
    console.log(document.cookie.indexOf('username='))
  }

  return (
    <React.Fragment className="navContainer">
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "black.600")}
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
                <Button w="full" variant="ghost" leftIcon={<FaSchool />}>
                  <Link to="/scuole">Scuole </Link>
                </Button>
                <Button
                  w="full"
                  
                  color={'gray.900'}
                  leftIcon={<BsPerson />}
                >
                  <Link to="/persone">Studenti </Link>
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<MdSchool />}
                >
                  <Link to="/impara">Impara </Link>
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
         
              <div className="logo"> <Link to='/'>
          :vcodays
          </Link></div>
            </chakra.a>

            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <Button variant="ghost" leftIcon={<FaSchool />} size="sm">
                <Link to="/scuole">Scuole </Link>
              </Button>
              <Button
                
                
                leftIcon={<BsPerson />}
                size="sm"
              >
                <Link to="/persone">Studenti </Link>
              </Button>
              <Button
                variant="ghost"
                leftIcon={<MdSchool />}
                size="sm"
              >
                <Link to="/impara">Impara </Link>
              </Button>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
         

            <ColorModeSwitcher justifySelf="flex-end" />

            <chakra.a
              p={3}
              color={useColorModeValue("gray.800", "inherit")}
              rounded="sm"
              _hover={{ color: useColorModeValue("black.800", "gray.600") }}
            >
              <AiFillBell />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>

            <Link to="profilo">
            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            </Link>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
{/*}
        <Link to='/'>
          :vcodays
          </Link>
      </div>
      <div className="right">
          <Link to="/impara">Impara</Link>
          <Link to="/scuole">Scuole</Link>
          <h3>Esplora</h3>
         
    </div>
    <div className="right2">
       <DrawerMenu />
        
    </div>
  </motion.div>
  

)

*/}
