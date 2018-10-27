import React, { Component } from 'react';
import Message from './Message';
import _ from 'lodash';
import styled from 'styled-components'
import { Row, Col } from 'antd';

const Mess = styled.div`
  margin-top:10px;
`

const Space = styled.div`
	margin:10px;
`

class MessageList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: []
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
			}).value();
		this.setState({
			messages: messages
		});
	}
	render() {
		let messageNodes = this.state.messages.map((message) => {
			return (
				<Message msgKey={message.key} msg={message.message} db={this.props.db} />
			)
		});
		return (
			<Mess>
				<Row>
					{messageNodes}
				</Row>
			</Mess>
		);
	}
}
export default MessageList