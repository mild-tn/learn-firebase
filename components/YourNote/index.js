import React, { Component, Fragment } from 'react';
import { Flex, Box } from 'rebass';
import MessageList from '../Core/MessageList';
import MessageBox from '../Core/MessageBox';
import Nav from '../Core/Nav';

export default class index extends Component {
  render() {
    const { firebase } = this.props;
    return (
      <Fragment>
        <Nav />
        <Flex px={5} flexDirection={'column'}>
          <Box>
            <MessageList db={firebase[0]} />
          </Box>
          <Box>
            <MessageBox db={firebase[0]} />
          </Box>
        </Flex>
      </Fragment>
    );
  }
}
