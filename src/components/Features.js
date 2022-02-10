import { Box, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'
import { FcDoughnutChart, FcMultipleDevices, FcPrivacy, FcTimeline } from 'react-icons/fc'
import { Feature } from './Feature.tsx'

export const Features = () => (
  <Box as="section" paddingTop={'0'} maxW="5xl" mx="auto" py="12" px={{ base: '6', md: '8' }}>
    <SimpleGrid columns={{ base: 2, md: 2 }} spacingX="10" spacingY={{ base: '8', md: '14' }}>
      <Feature title="Presentazione del salone" icon={<FcPrivacy />}>
        La mostra è dedicata agli studenti di scuole superiori e medie che vogliono orientarsi sulla scelta della scuola superiore oppure per la futura azienda.
      </Feature>
      <Feature title="Presentazione del salone" icon={<FcMultipleDevices />}>
        Molti workshop e laboratori per la presentazione di ciò che si fà nelle scuole
      </Feature>
      <Feature title="Quando" icon={<FcTimeline />}>
        10-11 giugno per gli studenti delle medie. 6-7 luglio per le scuole superiori.
      </Feature>
      <Feature title="Luogo" icon={<FcDoughnutChart />}>
        Presso il teatro maggiore di Verbania in via Via S. Bernardino, 49, 28922 Verbania VB.
      </Feature>
    </SimpleGrid>

  </Box>
)