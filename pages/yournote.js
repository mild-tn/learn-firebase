import React, { Component } from 'react';
import YourNote from '../components/YourNote';
import { loadDB } from '../components/Core/config/firebase';

export default class yournote extends Component {
  render() {
    return <YourNote firebase={Object.values(loadDB())} />;
  }
}
