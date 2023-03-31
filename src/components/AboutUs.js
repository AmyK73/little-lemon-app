import React from "react";
import { Box, Text } from '@chakra-ui/react';
import Footer from "./Footer";


const AboutUs = () => {
    return (
        <>
            <Box bg='#EDEFEE' px={5} fontFamily='Markazi Text' >
            <Text as='h1'
            color='#F4CE14'
            fontSize='40px'
            fontWeight='medium' >
            Little Lemon
            </Text>
            <Text as='h2'
            fontSize='20px'
            fontWeight='extrabold' >
            Chicago
            </Text>
            </Box>
            <Footer/>
        </>
    );
}

export default AboutUs;