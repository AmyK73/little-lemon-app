import { Box, Button,
        Input, NumberInput, NumberInputField,
        NumberDecrementStepper, NumberIncrementStepper, NumberInputStepper, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { validateEmail } from "./ValidEmail";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'


 const PasswordErrorMessage = () => {
   return (
     <FormErrorMessage> Password should have at least 8 characters</FormErrorMessage>
   );
 };

function BookingPage() {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [resDate, setResDate] = useState("");
   const [makeReservation, setMakeReservation] = useState("");
   const [password, setPassword] = useState({
     value: "",
     isTouched: false,
   });

    const getIsFormValid = () => {
      return (
        firstName &&
        validateEmail(email) &&
       password.value.length >= 8
      );
   };

   const clearForm = () => {
     setFirstName("");
     setLastName("");
     setEmail("");
     setResDate("");
     setMakeReservation("");
     setPassword({
       value: "",
      isTouched: false,
    });
   };

   const mhandleSubmit = (e) => {
     e.preventDefault();
     alert("Reserved!");
     clearForm();
   };

  return (
    <>
    <Box bg='#EDEFEE' width='100%' fontFamily='Karla' fontSize='18px' fontWeight='bold' justifyContent='space-between' px={5} py={10}>
          <FormControl isRequired onSubmit={mhandleSubmit}>
                      <FormLabel htmlFor="firstName">First name</FormLabel>
                      <Input variant='outline' htmlSize={30} width='auto'
                          value={firstName}
                          onChange={(e) => {
                              setFirstName(e.target.value);
                          } }
                          placeholder="First Name"
                           />

                      <FormLabel htmlFor="lastName">Last name</FormLabel>
                      <Input variant='outline' htmlSize={30} width='auto'
                          value={lastName}
                          onChange={(e) => {
                              setLastName(e.target.value);
                          } }
                          placeholder="Last Name"
                           />

                      <FormLabel htmlFor="email">Email address</FormLabel>
                      <Input variant='outline' htmlSize={30} width='auto'
                          value={email}
                          onChange={(e) => {
                              setEmail(e.target.value);
                          } }
                          placeholder="Email"
                          />
                          <FormHelperText>We'll never share your email</FormHelperText>


                  <FormControl isRequired isInvalid>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input variant='outline' htmlSize={30} width='auto'
                          value={password.value}
                          type="password"
                          onChange={(e) => {
                              setPassword({ ...password, value: e.target.value });
                          } }
                          onBlur={() => {
                              setPassword({ ...password, isTouched: true });
                          } }
                          placeholder="Password"
                           />
                      {password.isTouched && password.value.length < 8 ? (
                          <PasswordErrorMessage />
                      ) : null}
                      </FormControl>

                
                  <FormLabel htmlFor="resDate">Choose date</FormLabel>
                  <Input variant='outline' htmlSize={30} width='auto'
                  value={resDate}
                          onChange={(e) => {
                              setResDate(e.target.value);
                          } }
                  type="date"
                   />
                  

                
                      <FormLabel htmlFor="res-time">Choose time</FormLabel>
                      <select id="res-time ">
                          <option>5:00 p.m.</option>
                          <option>6:00 p.m.</option>
                          <option>7:00 p.m.</option>
                          <option>8:00 p.m.</option>
                          <option>9:00 p.m.</option>
                          <option>10:00 p.m.</option>
                      </select>
                  

                 <Box maxWidth='xs'>
                      <FormLabel htmlFor="guest-number">Number of guests</FormLabel>
                      <NumberInput max={10} min={1}>
                      <NumberInputField />
                      <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                      </NumberInputStepper>
                      </NumberInput>
                 </Box>

                  
                      <FormLabel htmlFor="occasion">Occasion</FormLabel>
                      <select id="occasion">
                          <option>Birthday</option>
                          <option>Anniversary</option>
                          <option>Graduation</option>
                      </select>

<VStack>
                      <Button onSubmit={mhandleSubmit} type="submit"
                      value={makeReservation}
                          onChange={(e) => {
                              setMakeReservation(e.target.value);
                          } }
                      >
            Make Your Reservation
          </Button>
          </VStack>
          </FormControl>
      </Box>
      </>
  );
}

export default BookingPage;