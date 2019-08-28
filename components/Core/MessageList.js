import React, { Component } from 'react';
import Message from './Message';
import _ from 'lodash';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { Flex, Card, Box } from 'rebass';

const Mess = styled.div`
  margin-top: 10px;
  background-color: aliceblue;
`;

const Space = styled.div`
  margin: 10px;
`;

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    let app = this.props.db.database().ref('messages');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }
  getData(values) {
    let messagesVal = values;
    let messages = _(messagesVal)
      .keys()
      .map(messageKey => {
        let cloned = _.clone(messagesVal[messageKey]);
        cloned.key = messageKey;
        return cloned;
      })
      .value();
    this.setState({
      messages: messages,
    });
  }
  render() {
    let messageNodes = this.state.messages.map(message => {
      return (
        <Box width={1 / 2} px={2}>
          <Card width={[256, 320]} color="white" bg="gray">
            <Message msgKey={message.key} msg={message.message} db={this.props.db} />
          </Card>
        </Box>
      );
    });
    return <Flex flexDirection={'row'}>{messageNodes}</Flex>;
  }
}
export default MessageList;
