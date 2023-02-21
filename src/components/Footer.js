import { VStack, HStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
    <>
<HStack
    bg='#495E57'
    justifyContent='space-between'
    spacing={8}
    width='100%'
    color='#333333'
    fontFamily='Karla'
    fontSize='24px'
    fontWeight='medium'
    px={10}
    py={10}>

        <nav>
        <VStack>
            <h1>Doormat Navigation</h1>
                <a href="home.html">Home</a>
                <a href="about.html">About</a>
                <a href="menu.html">Menu</a>
                <a href="reservations.html">Reservations</a>
                <a href="order.html">Order Online</a>
                <a href="login.html">Login</a>
        </VStack>
        </nav>

        <nav>
        <VStack>
            <h1>Contacts</h1>
                <a href="address.html">Address</a>
                <a href="phone.html">Phone Number</a>
                <a href="email.html">Email</a>
        </VStack>
        </nav>

        <nav>
        <VStack>
            <h1>Social Media Links</h1>
                <a href="address.html">Address</a>
                <a href="phone.html">Phone Number</a>
                <a href="email.html">Email</a>
        </VStack>
        </nav>
</HStack>
    </>
    );
}

export default Footer;