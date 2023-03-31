import React from "react";
import { Box, Button,
        NumberInput, NumberInputField,
        NumberDecrementStepper, NumberIncrementStepper, NumberInputStepper, VStack } from "@chakra-ui/react";
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import Footer from "../components/Footer";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const DateInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="date-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const AvailableTimes = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const Occasion = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};


const BookingPage = () => {
  return (
    <>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        chooseDate: '',
        AvailableTimes: "",
        guestNumber: '',
        Occasion: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        chooseDate: Yup.date().required('Required'),
        AvailableTimes: Yup.string().oneOf(["5:00 p.m.",
               "6:00 p.m.",
               "7:00 p.m.",
              "8:00 p.m.",
               "9:00 p.m.",
               "10:00 p.m."]).required('Required'),
        Occasion: Yup.string().oneOf(["Birthday", "Anniversary", "Graduation", "Other"]).required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <Box bg='#EDEFEE' fontFamily='Karla' fontSize='18px' fontWeight='bold' py={5}>
          <VStack align='flex-start' px={5}>

            <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
            />

            <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
            />


            <MyTextInput
            label="Email"
            name="email"
            type="email"
            placeholder="Jane@gmail.com"
            />


            <DateInput
            label="Choose Date"
            name="chooseDate"
            type="date" />


        <AvailableTimes label="Choose Time" name="chooseTime">
          <option value="">Select Time</option>
          <option value="5:00 p.m.">5:00 p.m.</option>
          <option value="6:00 p.m.">6:00 p.m.</option>
          <option value="7:00 p.m.">7:00 p.m.</option>
          <option value="8:00 p.m.">8:00 p.m.</option>
          <option value="9:00 p.m.">9:00 p.m.</option>
          <option value="10:00 p.m.">10:00 p.m.</option>
        </AvailableTimes>


            <label htmlFor="guestNumber">Number of guests</label>

            <NumberInput size='lg' maxW={32} max={10} min={1}>
              <NumberInputField bg="whitesmoke" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>


            <Occasion label="Occasion" name="occasion">
              <option value="">Select Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="graduation">Graduation</option>
              <option value="other">Other</option>
            </Occasion>


            <Button bg='#F4CE14' _hover={{ bg: 'gray' }} type="submit">Make Your Reservation</Button>
          </VStack>
        </Box>
      </Form>
    </Formik>

    <Footer />
    </>
  );
    };




export default BookingPage;