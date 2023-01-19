import { VStack, Stack, Box, HStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
    <>
    <nav>
<HStack
     bg='yellow'
     float='left'
     spacing={8}
            color='#333333'
            fontFamily='Karla'
            fontSize='24px'
            fontWeight='medium'>
            <h1>Doormat Navigation</h1>
                <a href="home.html">Home</a>
                <a href="about.html">About</a>
                <a href="menu.html">Menu</a>
                <a href="reservations.html">Reservations</a>
                <a href="order.html">Order Online</a>
                <a href="login.html">Login</a>

            <h1>Contacts</h1>
                <a href="address.html">Address</a>
                <a href="phone.html">Phone Number</a>
                <a href="email.html">Email</a>

            <h1>Social Media Links</h1>
                <a href="address.html">Address</a>
                <a href="phone.html">Phone Number</a>
                <a href="email.html">Email</a>
</HStack>
            </nav>
    </>
    );
}

export default Footer;