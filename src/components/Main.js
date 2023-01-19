import React from "react";
import { Box, Text, Button, ButtonGroup, Container } from '@chakra-ui/react';

const Main = () => {
    return (
        <>
    <Box bg="#495E57" width='100%' fontFamily='Markazi Text'>

        <Box
        color='#F4CE14'
        fontSize='64px'
        fontWeight='medium'
        px={5}
        py={0}>
            Little Lemon
        </Box>

        <Box
        color='#EDEFEE'
        fontSize='40px'
        fontWeight='normal'
        px={5}
        paddingBottom={8}>
        Chicago
        </Box>


        <Text
            color='#EDEFEE'
            fontSize='40px'
            fontWeight='normal'
            maxWidth='md'
            paddingLeft={5}
            paddingBottom={10}>
                 We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </Text>

        <Box
            px={5}
            paddingBottom={10}>
            <Button
            color='#EDEFEE'
            bg='#F4CE14'>
                Reserve a Table
            </Button>
        </Box>

    </Box>
</>
    );
}

export default Main;