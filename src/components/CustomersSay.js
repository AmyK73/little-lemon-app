import React from "react";
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import Rating from "./StarIcon";
import Footer from "./Footer";



const CustomersSay = () => {
    return (
        <>
        <Box bg='#495E57' color="#EDEFEE" padding={10}>
            <Text
            fontFamily='Markazi Text'
            fontSize='2xl'
            fontWeight='medium'>
                Read what our customers are saying!
            </Text>

            <HStack>
            <VStack>
            <Text
                fontFamily='Karla'
                fontSize='18px'
                fontWeight='medium'
                maxWidth='sm'
                paddingLeft={5}>
                Louise says: I love the food here! Everything is always fresh and tasty! I eat here at least once a week.
                </Text>
            <HStack>
            <Rating /> <Rating /> <Rating /> <Rating /> <Rating />
            </HStack>
            </VStack>

<VStack>
            <Text fontFamily='Karla'
                fontSize='18px'
                fontWeight='medium'
                maxWidth='sm'
                paddingLeft={5}>
                Gerard says: Service is always fast and friendly. My go to place when I have friends or family visiting.
                </Text>
                <HStack>
                <Rating /> <Rating /> <Rating /> <Rating />
                </HStack>
                </VStack>

<VStack>
                <Text fontFamily='Karla'
                fontSize='18px'
                fontWeight='medium'
                maxWidth='sm'
                paddingLeft={5}>
                    Betty says: Little Lemon's menu is full of traditional Mediterranean foods. I love trying new foods! Thank you for accomodating a new foodie!
                    </Text>
                    <HStack>
                <Rating /> <Rating /> <Rating /> <Rating />
                </HStack>
                </VStack>

</HStack>
            </Box>

            <Footer/>

        </>
    );
}

export default CustomersSay;