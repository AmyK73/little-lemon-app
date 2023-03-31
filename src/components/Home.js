import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import { ReactRouterLink } from 'react';


  const Home = () => {
     return (
         <>
         <nav>
         <HStack bg='#EDEFEE'>
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
            color='#333333'
            fontFamily='Karla'
            fontSize='24px'
            fontWeight='medium'
            px={16}
            >

                     <Link as={ReactRouterLink} to="/">Home</Link>
                     <Link as={ReactRouterLink} to="/aboutus">About</Link>
                     <Link as={ReactRouterLink} to="/menu">Menu</Link>
                     <Link as={ReactRouterLink} to="/bookingpage">Reservations</Link>
                     <Link as={ReactRouterLink} to="/customerssay">Reviews</Link>
            </HStack>
 </HStack>
 </nav>
<Outlet />

 </>
     );
 }

  export default Home;