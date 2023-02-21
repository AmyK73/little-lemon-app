import React, { useState } from "react";
import {
    ListItem,
    UnorderedList,
    VStack,
    Box,
    Button, IconButton } from '@chakra-ui/react';
    import { StarIcon } from '@chakra-ui/icons';

function StarRating ({yellow}) {
    return (
        <IconButton
  variant='solid'
  colorScheme='yellow'
  aria-label='ratings'
  fontSize='20px'
  icon={<StarIcon />}
/>
    );
}

function Star() {
    const [hoverIndex, setHoverIndex] = useState(0);
    const [rating, setRating] = useState(0);

    function shouldBeHighlighted(index) {
        return (index <= hoverIndex) || (index <= rating)
    }

    return (
        <Box className="App">
        <h2>Rate Us</h2>
        <UnorderedList listStyleType='none' className="starlist">
        {[1, 2, 3, 4, 5].map((index) => {
            return (
                <ListItem
                float='left'
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(0)}
                onClick={() => setRating(index)}
                className="starListItem">
                <StarRating yellow={shouldBeHighlighted(index)} />
                </ListItem>
            )
        })}
        </UnorderedList>
        <Box>
        <VStack>
        <Button
                    bg='#F4CE14'
                    fontFamily='Karla'
                    fontSize='18px'
                    fontWeight='medium'
                    color='#EDEFEE'
                    onClick={() => setRating(0)}>Clear Rating</Button>
        </VStack>
        </Box>
        </Box>
    );
}

export default Star;
