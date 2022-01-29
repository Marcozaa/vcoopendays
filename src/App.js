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
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import FirstPageContent from './components/FirstPageContent';
import WavedSection from './components/WavedSection';
import ContainerCarousel from './components/ContainerCarousel';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";import FirstPage from './pages/FirstPage';
function App() {
  return (
    <ChakraProvider theme={theme}>
       <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="scuole" element={<ContainerCarousel />} />
      <Route path="invoices" element={<ContainerCarousel />} />
    </Routes>
    </ChakraProvider>
  );
}

export default App;
