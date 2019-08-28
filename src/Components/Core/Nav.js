import React, { Component } from 'react';
import styled from 'styled-components';
import {Flex,Box,Link,Text} from 'rebass'

const H = styled.h1`
  color: #fff;
  font-family:'HelloSanttiny';
`;

class Header extends Component {
  render() {
    return (
      <Flex
      px={4}
      color='white'
      bg='black'
      alignItems='center'>
      <Text p={[3]} ><H>Your Note.</H></Text>
      <Box mx='auto' />
      <Link variant='nav' href='/login'>
      <Text p={[3,2,1]} fontSize={[3,2,1]}> Login</Text>
      </Link>
    </Flex>
    );
  }
}
export default Header;
