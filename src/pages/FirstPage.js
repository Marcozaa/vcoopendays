import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Divider,
  StackDivider,
} from '@chakra-ui/react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FirstPageContent from '../components/FirstPageContent';
import WavedSection from '../components/WavedSection';
import ContainerCarousel from '../components/ContainerCarousel';
import { Features } from '../components/Features';
import './firstPage.css'
import { Reviews } from '../components/Reviews';
import KuttyHero from '../components/CallToAction';
import OrganizzatoreHero from '../components/OrganizzatoreHero';
import ForumHero from '../components/ForumHero';
export default function FirstPage() {
  return <div className='page'>

    <div className="hero">
      <FirstPageContent />
    </div>


    <div className="middle">
      <Divider />
      <Features />

    </div>
    <KuttyHero />
  <ForumHero />
    <Footer />



  </div>;
}
