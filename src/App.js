import React from 'react';
import Home from './components/Home';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { ChakraProvider, Menu } from '@chakra-ui/react';
import CustomersSay from './components/CustomersSay';
import AboutUs from './components/AboutUs';
import BookingPage from './Pages/BookingPage';
import AvailableTimes from "./components/AvailableTimes";


const App = () => {
  return (
    <>
    <ChakraProvider>
      <Home />
    </ChakraProvider>

    <ChakraProvider>
        <Main />
      </ChakraProvider>

      <ChakraProvider>
        <Menu/>
      </ChakraProvider>

      <ChakraProvider>
        <CustomersSay />
      </ChakraProvider>

      <ChakraProvider>
        <AboutUs />
      </ChakraProvider>

      <ChakraProvider>
        <BookingPage />
      </ChakraProvider>

      <ChakraProvider>
        <Footer />
      </ChakraProvider>

      <ChakraProvider>
        <AvailableTimes />
      </ChakraProvider>

      </>
  )
};


export default App;