import React, { Component } from 'react';
import { Card, Button, Col } from 'antd';
import styled from 'styled-components'

const DeleteStyle = styled(Button)`
  float: right;
`

const CardStyle = styled(Card)`
  width: 300px;
  margin:10px;
  height: 150px;
`

class Message extends Component {
  constructor(props) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);

  }

  onClickDelete(e) {
    e.preventDefault();
    let dbCon = this.props.db.database().ref('/messages');
    dbCon.child(this.props.msgKey).remove();
  }

  render() {
    return (
      <Col span={6}>
      <CardStyle>
        {this.props.msg}
        <DeleteStyle onClick={this.onClickDelete}>
          Delete
        </DeleteStyle>
      </CardStyle>
      </Col>
    )
  }
}
export default Message