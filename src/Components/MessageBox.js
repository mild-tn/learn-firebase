import React, { Component } from 'react';
import trim from 'trim';
import { Card } from 'antd';
import styled from 'styled-components';

const CardSpace = styled(Card)`
  margin: 50px;
`;

const Textarea = styled.textarea`
  height: 100px;
  border: 0px;
`;
class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      message: '',
    };
  }
  onChange(e) {
    this.setState({
      message: e.target.value,
    });
  }
  onKeyup(e) {
    if (e.keyCode === 13 && trim(e.target.value) !== '') {
      e.preventDefault();
      let dbCon = this.props.db.database().ref('/messages');
      dbCon.push({
        message: trim(e.target.value),
      });
      this.setState({
        message: '',
      });
    }
  }

  render() {
    return (
      <CardSpace>
        <form style={{ border: 0 }}>
          <Textarea
            placeholder="Input message"
            cols="100"
            onChange={this.onChange}
            onKeyUp={this.onKeyup}
            value={this.state.message}
          />
        </form>
      </CardSpace>
    );
  }
}
export default MessageBox;
