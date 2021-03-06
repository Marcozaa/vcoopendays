import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiFillBell,
  AiOutlineProfile,
} from 'react-icons/ai';
import { BsImage } from 'react-icons/bs';
import {
  BsFillCameraVideoFill,
  BsPerson,
  BsPersonFill,
  BsPlus,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {
  MdAddCircle,
  MdEditLocation,
  MdExitToApp,
  MdRepeat,
  MdSchool,
  MdWork,
} from 'react-icons/md';
import {
  FaExternalLinkAlt,
  FaImages,
  FaSchool,
  FaTwitter,
} from 'react-icons/fa';
import './navbar.css';
export default function Navbar() {
  const bg = useColorModeValue('white.900', 'gray.800');
  const mobileNav = useDisclosure();

  const [loggato, setLoggato] = useState(false);
  const [permessi, setPermessi] = useState(false);
  const [immagineProfilo, setimmagineProfilo] = useState();

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

  useEffect(() => {
    if (getCookie('username') != '') {
      setLoggato(true);
      switch (getCookie('permessi')) {
        case '1':
          setPermessi(1);
          break;
        case '2':
          setPermessi(2);
          break;
        case '3':
          setPermessi(3);
          break;
        default:
          console.log('default');
          break;
      }
    } else {
      setLoggato(false);
    }

    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getDatiUtente2.php?emailInserita=' +
        getCookie('username')
      )
      .then(res => {
        setimmagineProfilo(res.data[0].immagine_profilo);
      });
  }, []);

  function logout() {
    // rimuovo il cookie profilo e ricarico la homepage
    document.cookie = 'username' + '=; Max-Age=-99999999;';
    document.cookie = 'permessi' + '=; Max-Age=-99999999;';
    document.cookie = 'immagineProfilo' + '=; Max-Age=-99999999;';
    window.location.href = '/';
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
            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue('gray.800', 'black.600')}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
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
                <Link to="/scuole">
                  <Button w="full" variant={'solid'} leftIcon={<FaSchool />}>
                    Scuole
                  </Button>
                </Link>
                <Link to="/forum">
                  <Button w="full" variant={'solid'} leftIcon={<MdWork />}>
                    Forum
                  </Button>
                </Link>
                <Link to="/scuole/registrazioneStand">
                  <Button w="full" variant={'solid'} leftIcon={<FaSchool />}>
                    Scuole
                  </Button>
                </Link>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <div className="logo">
                {' '}
                <Link to="/">:vcodays</Link>
              </div>
            </chakra.a>

            <HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}>
              <Link to="/scuole">
                <Button variant="ghost" leftIcon={<FaSchool />} size="sm">
                  Scuole
                </Button>
              </Link>
              <Link to="/forum">
                <Button w="full" variant={'ghost'} leftIcon={<BsPersonFill />}>
                  Forum
                </Button>
              </Link>
              <Link to="/scuole/workshops">
                <Button w="full" variant={'ghost'} leftIcon={<MdWork />}>
                  Workshops
                </Button>
              </Link>
              <Link to="/galleria">
                <Button w="full" variant={'ghost'} leftIcon={<BsImage />}>
                  Galleria
                </Button>
              </Link>
              {permessi == 2 ? (
                <Link to="/scuole/inserimentoEventi">
                  <Button w="full" variant={'solid'} leftIcon={<FaSchool />}>
                    Inserimento Workshop
                  </Button>
                </Link>
              ) : null}

              {permessi != 1 ? (
                <Link to="/scuole/registrazioneStand">
                  <Button w="full" variant={'solid'} leftIcon={<FaSchool />}>
                    Registrazione Padiglioni
                  </Button>
                </Link>
              ) : null}
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? 'none' : 'flex'}
            alignItems="center"
          >
            <ColorModeSwitcher justifySelf="flex-end" />

            <chakra.a
              p={0}
              color={useColorModeValue('gray.800', 'inherit')}
              rounded="sm"
              _hover={{ color: useColorModeValue('black.800', 'gray.600') }}
            ></chakra.a>

            {loggato ? (
              <Menu>
                <MenuButton>
                  {immagineProfilo != undefined ? (
                    <Avatar name="Sasuke Uchiha" src={immagineProfilo} />
                  ) : <Avatar name="Sasuke Uchiha" src={'https://bit.ly/broken-link'} />}
                </MenuButton>
                <MenuList>
                  <Link to="profilo">
                    <MenuItem icon={<BsPerson />} command="???T">
                      Profilo
                    </MenuItem>
                  </Link>
                  {permessi == 3 ? (
                    <Link to="adminPanel">
                      <MenuItem icon={<BsPerson />} command="???T">
                        Pannello Admin
                      </MenuItem>
                    </Link>
                  ) : null}
                  <MenuItem
                    onClick={logout}
                    icon={<MdExitToApp />}
                    command="???N"
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Flex>
                <Link to="registrati">
                  <Button
                    marginRight={'0.8vw'}
                    colorScheme="twitter"
                    leftIcon={<FaTwitter />}
                  >
                    Registrati
                  </Button>
                </Link>
                <Link to="login">
                  <Button colorScheme="teal" leftIcon={<BsPersonFill />}>
                    Login
                  </Button>
                </Link>
              </Flex>
            )}
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
{
  /*}
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

*/
}
