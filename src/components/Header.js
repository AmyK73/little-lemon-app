 import React from 'react';
 import { Box, HStack, Text } from '@chakra-ui/react';
 import { Image } from '@chakra-ui/react';

  const Header = () => {
     return (
         <>
         <nav>
         <HStack bg='#FFFCFC' spacing={8} width='100%' paddingLeft={10}>
            <Box>
                 <Image src='https://previews.123rf.com/images/atoss/atoss1507/atoss150700106/42640755-lemon-with-leaf-isolated-on-white-background.jpg' alt='lemon' 
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
                     <a href='home.html'>Home</a>
                     <a href='about.html'>About</a>
                     <a href='menu.html'>Menu</a>
                     <a href='reservations.html'>Reservations</a>
                     <a href='order.html'>Order Online</a>
                     <a href='login.html'>Login</a>
            </HStack>
 </HStack>
 </nav>

 </>
     );
 }

  export default Header;