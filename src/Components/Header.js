import React, {Component} from 'react';
import styled from 'styled-components'

const H = styled.h1`
    color: #fff;
`

class Header extends Component {
  render(){
    return (
      <a href="https://github.com/mild20091931/learn-firebase">
        <H>{this.props.title}</H>
      </a>
    )
  }
}
export default Header