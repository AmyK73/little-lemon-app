import { VStack, HStack, Icon, Text, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from 'react-router-dom';
import { ReactRouterLink } from 'react';
import { FaRegCopyright, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
    <>
<HStack
    bg='#EDEFEE'
    justifyContent='space-between'
    spacing={8}
    width='100%'
    color='#333333'
    fontFamily='Karla'
    fontSize='15px'
    fontWeight='medium'
    px={10}
    py={10}>

<HStack>
        <Text>Little Lemon</Text>
          <Icon as={FaRegCopyright} />
          <Text>2023</Text>
          </HStack>

        <nav>
          <VStack>
            <Link as={ReactRouterLink} to="/">Home</Link>
            <Link as={ReactRouterLink} to="/aboutus">About</Link>
            <Link as={ReactRouterLink} to="/menu">Menu</Link>
            <Link as={ReactRouterLink} to="/bookingpage">Reservations</Link>
            <Link as={ReactRouterLink} to="/customerssay">Reviews</Link>
            <Link as={ReactRouterLink} to="/login">Login</Link>
        </VStack>
        </nav>

        <nav>
        <VStack>
            <h1>Contact Us</h1>
                <a href="address.html">12345 AnyStreet, USA</a>
                <a href="phone.html">555-555-5555</a>
                <a href="email.html">littlelemon@gmail.com</a>
        </VStack>
        </nav>

        <nav>
        <VStack>
            <h1>Social Media Links</h1>

  <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
    Facebook
  </Button>
  <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
    Twitter
  </Button>
  <Button colorScheme='pink' leftIcon={<FaInstagram />}>
    Instagram
  </Button>

        </VStack>
        </nav>
</HStack>
    </>
    );
}

export default Footer;