import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const Nav = styled.nav`
  height: 50px;
  background-color: #282c34;
`;

const H = styled.h1`
  color: #fff;
`;

class Header extends Component {
  render() {
    return (
      <Row>
      <Nav>
      <Col span={1} />
      <Col span={11}>
      <a href="https://your-note.netlify.com">
        <H>Your note.</H>
      </a>
      </Col>
    </Nav>
      </Row>
    );
  }
}
export default Header;
