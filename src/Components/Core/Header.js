import React, {Component} from 'react';
import styled from 'styled-components'

const H = styled.h1`
    color: #fff;
`

class Header extends Component {
  render(){
    return (
      <a href="https://your-note.netlify.com">
        <H>{this.props.title}</H>
      </a>
    )
  }
}
export default Header