import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  Input,
  Button,
  Box,
  FormControl,
  FormLabel,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const bgColor = useColorModeValue('green.100', 'green.900');
  const color = useColorModeValue('black', 'white');

  const inputBgColor = '#fff';
  const buttonBgColor = '#aaeee9';
  const buttonHoverColor = '#0f4c4a';

  const buttonStyles = {
    bg: buttonBgColor,
    _hover: { bg: buttonHoverColor, color: 'white' },
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      maxW="400px"
      m="20px auto"
      p="20px"
      border="1px solid #ddd"
      borderRadius="5px"
      bg={bgColor}
      color={color}
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl mb="15px">
          <FormLabel>Username</FormLabel>
          <Input type="text" name="name" bg={inputBgColor} />
        </FormControl>
        <FormControl mb="15px">
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" bg={inputBgColor} />
        </FormControl>
        <FormControl mb="15px">
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" bg={inputBgColor} />
        </FormControl>
        <Flex justifyContent="center">
          <Button type="submit" {...buttonStyles}>
            Register
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default RegisterForm;