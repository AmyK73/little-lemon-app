import React from "react";
import { Box, Text, Button, Image, HStack, Divider } from '@chakra-ui/react';

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
                fontFamily='Karla'
                fontSize='18px'
                fontWeight='medium'
                maxWidth='md'
                paddingLeft={5}
                paddingBottom={10}>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </Text>

            <Box
                px={5}
                paddingBottom={10}>
                <Button
                    fontFamily='Karla'
                    fontSize='18px'
                    fontWeight='medium'
                    color='#EDEFEE'
                    bg='#F4CE14'
                    _hover={{ bg: 'gray' }}>
                    Reserve a Table
                </Button>
            </Box>


        <Box
                bg='#EDEFEE'
                width='100%'
                px={5}>
        <Box>
        <Divider orientation='horizontal' variant='solid'/>
            <Text
                fontFamily='Karla'
                fontSize='20px'
                fontWeight='extrabold'
                py={5}>
                THIS WEEK'S SPECIALS!
            </Text>
        </Box>

        <Box>
            <Button
                color='#EDEFEE'
                fontFamily='Karla'
                fontSize='18px'
                fontWeight='medium'
                bg='#F4CE14'
                float='right'
                _hover={{ bg: 'gray' }}>
                Online Menu
            </Button>
        </Box>

<HStack spacing={25} px={5} py={5} justify='space-between'>
            <Box fontFamily='Karla'
                fontSize='16px'
                fontWeight='extrabold'>
                <Image src='https://sardofoods.ca/wp-content/uploads/2020/01/Greek-Salad.png' alt='salad'
                    boxSize='200px'
                    objectFit='contain'
                />

                <h1>Greek Salad</h1>
                <Text maxWidth='3xs'>
                    The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons
                </Text>
            </Box>


            <Box fontFamily='Karla'
                fontSize='16px'
                fontWeight='extrabold'>
                <Image src='https://egress.storeden.net/gallery/5f9d871b5fb8e0f16a2f1939' alt="tomato bruschetta"
                    boxSize='250px'
                    objectFit='contain'/>
                <h1>Bruschetta</h1>
                <Text
                maxWidth='3xs'>
                    Our Bruschetta is a sliced French baguette, grilled and smeared with a roasted garlic confit then topped with fresh diced tomatoes, basil, and oregano
                </Text>
            </Box>

            <Box fontFamily='Karla'
                fontSize='16px'
                fontWeight='extrabold'>
                    <Image src="https://cdn.shopify.com/s/files/1/2528/8566/products/SimplyGrilledSalmon.png?v=1667490984" alt="grilled fish"
                    width='150px'
                    height='150px'
                    objectFit='contain'/>
                    <h1>Grilled Fish</h1>
                    <Text
                    maxWidth='3xs'>
                        The catch of the day is grilled to perfection with fresh herbs and spices then served with a topping of house made herbed butter and lemon wedges
                    </Text>
                </Box>
</HStack>
        </Box>
        <Divider orientation='horizontal' variant='solid'/>
</Box>

                </>

    );
}

export default Main;