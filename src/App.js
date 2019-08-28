import React, { Component } from 'react';
import './App.css';
import MessageList from './Components/Core/MessageList';
import MessageBox from './Components/Core/MessageBox';
import firebase from 'firebase';
import { Row, Col } from 'antd';
import Header from './Components/Core/Header';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 50px;
  background-color: #282c34;
`;

class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DATABASE_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STOREGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div>
        <Nav>
          <Col span={1} />
          <Col span={11}>
            <Header title="Your note." />
          </Col>
        </Nav>
        <Row>
          <Col span={2} />
          <Col>
            <MessageList db={firebase} />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col>
            <MessageBox db={firebase} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
