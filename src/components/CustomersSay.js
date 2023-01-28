import React from "react";
import { Box, HStack, Text, IconButton } from '@chakra-ui/react';
//import { StarIcon } from '@chakra-ui/icons';



const CustomersSay = () => {
    return (
        <>
        <Box bg='#FBDABB' padding={10}>
            <Text fontFamily='Markazi Text'
            fontSize='2xl'
            fontWeight='medium'
            py={10}>
                Read what our customers are saying!
            </Text>
<HStack>
            <Text
                fontFamily='Karla'
                fontSize='18px'
                fontWeight='medium'
                maxWidth='sm'
                paddingLeft={5}
                paddingBottom={10}>
Louise says: I love the food here! Everything is always fresh and tasty! I eat here at least once a week.
            </Text>

            <Text fontFamily='Karla'
                fontSize='18px'
                fontWeight='medium'
                maxWidth='sm'
                paddingLeft={5}
                paddingBottom={10}>
                Gerard says: Service is always fast and friendly. My go to place when I have friends or family visiting.
                </Text>

                <Text fontFamily='Karla'
                fontSize='18px'
                fontWeight='medium'
                maxWidth='sm'
                paddingLeft={5}
                paddingBottom={10}>
                    Betty says: Little Lemon's menu is full of traditional Mediterranean foods. I love trying new foods! Thank you for accomodating a new foodie!
                </Text>
</HStack>
<h2>Rate Us</h2>
{[1,2,3,4,5].map( (index) )}
<svg width='50px' height='50px' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
            </Box>

        </>
    );
}

export default CustomersSay;