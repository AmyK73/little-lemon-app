import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
//import './Styles.css';

function App() {
  return (
    <ChakraProvider>
    <Header />
    <Main />
    <Footer />
    </ChakraProvider>
  )
}


export default App;