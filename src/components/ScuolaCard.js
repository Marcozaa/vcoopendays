import axios from 'axios';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  Textarea,
  Avatar,
  Icon,
  Button,
  VisuallyHidden,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
  Center,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
const IMAGE =
  'data:image/jpeg;base64,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';

export default function ScuolaCard({ nome, codice, last }) {
  const [nomeWorkshops, setNomeWorkshops] = useState(null);
  let items = [];
  useEffect(() => {
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getWorkshopCodiceMeccano.php?codice=' +
          codice
      )
      .then(res => {
        console.log(res.data);
        res.data.map(workShop =>
          items.push({
            workShop: workShop,
          })
        );
        setNomeWorkshops({ items: items });
      });
  }, []);

  function openWorkshop() {
    //var strUser = document.getElementById("selectWorkshop").value;
    //alert(strUser); // This will output the value selected.
  }
  return (
    <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.8 }}>
      <Center py={12}>
        <Box
          margin={'0.9vw'}
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              rounded={'md'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}
            >
              {codice}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {nome}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Select onClick={openWorkshop()} id="selectWorkshop" size={'sm'}>
                {nomeWorkshops &&
                  nomeWorkshops.items.map(workShop => (
                    <option value={workShop.workShop.Nome}>
                      {workShop.workShop.Nome}
                    </option>
                  ))}
              </Select>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </motion.div>
  );
}
