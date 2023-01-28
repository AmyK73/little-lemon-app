 import React from 'react';
 import { Box, HStack, Text } from '@chakra-ui/react';
 import { Image } from '@chakra-ui/react';
 import { BrowserRouter, Link } from 'react-router-dom';
import { ReactRouterLink } from 'react';


  const Header = () => {
     return (
         <>
         <nav>
         <HStack bg='#EDEFEE' spacing={8} width='100%' paddingLeft={10}>
            <Box>
                <Image src='https://static.vecteezy.com/system/resources/previews/008/848/358/original/fresh-lemon-fruit-free-png.png' alt='lemon' 
                 width='50px'
                 height='50px'/>
            </Box>
            <Text color='#333333'
                 fontFamily='Markazi Text'
                 fontSize='40px'
                 fontWeight='normal'>
                 Little Lemon
                </Text>


            <HStack
            spacing={8}
            color='#333333'
            fontFamily='Karla'
            fontSize='24px'
            fontWeight='medium'
            px={16} >
            <BrowserRouter>
                     <Link as={ReactRouterLink} to="/home">Home</Link>
                     <Link as={ReactRouterLink} to="/about">About</Link>
                     <Link as={ReactRouterLink} to="/menu">Menu</Link>
                     <Link as={ReactRouterLink} to="/reservations">Reservations</Link>
                     <Link as={ReactRouterLink} to="/order">Order Online</Link>
                     <Link as={ReactRouterLink} to="/login">Login</Link>
                     </BrowserRouter>
            </HStack>
 </HStack>
 </nav>

 </>
     );
 }

  export default Header;