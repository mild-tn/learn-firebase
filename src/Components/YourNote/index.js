import React, { Component,Fragment } from 'react'
import MessageList from '../Core/MessageList'
import MessageBox from '../Core/MessageBox'
import Nav from '../Core/Nav'
import { Row, Col } from 'antd';


export default class index extends Component {
  render() {
    const {firebase} = this.props
    return (
      <Fragment>
        <Nav/>
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
      </Fragment>
    )
  }
}
