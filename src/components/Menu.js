import React from "react";
import Footer from "./Footer";
import { HStack, Text, VStack } from "@chakra-ui/react";

const Menu = () => {
    return(
        <>
        <HStack fontSize={25} bg='#495E57' color="#EDEFEE" justifyContent="space-between" padding={100} >

                <VStack>
                <h1>Breakfast Menu</h1>
                <Text>Egg White Scramble $6</Text>
                <Text>Short Stack Pancakes $10</Text>
                <Text>Belgian Waffle $12</Text>
                </VStack>

                <VStack>
                <h1>Lunch Menu</h1>
                <Text>Turkey Club Sandwich $8</Text>
                <Text>Burger with Fries $12</Text>
                <Text>Soup and Salad $6</Text>
                </VStack>

               <VStack>
                <h1>Dinner Menu</h1>
                <Text>Spaghetti with Meatballs $12</Text>
                <Text>Chicken Breast with Mushroom Risotto $20</Text>
                <Text>Sirloin Steak with Roasted Potatoes</Text>
                </VStack>
        </HStack>
        

            <Footer/>
        </>
    );
}

export default Menu;