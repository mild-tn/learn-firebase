import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './Components/MessageList'
import MessageBox from './Components/MessageBox'
import firebase from "firebase"
import { Row, Col} from 'antd';
import Header from './Components/Header'
import styled from 'styled-components'

const Nav = styled.nav`
  height: 50px;
  background-color:#282c34;
`

class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyDUuaZ48acPcjdLYkVTobsPA9H6TZhkvag",
      authDomain: "massagebox-f32c9.firebaseapp.com",
      databaseURL: "https://massagebox-f32c9.firebaseio.com",
      projectId: "massagebox-f32c9",
      storageBucket: "massagebox-f32c9.appspot.com",
      messagingSenderId: "204814869660"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div>
      <Nav >
        <Col span={1}></Col>
        <Col span={11}>
          <Header title="Self Learning."  />
        </Col>
      </Nav>
        <Row>
          <Col span={2}></Col>
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
