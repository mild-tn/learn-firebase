import React, {Component} from 'react';
import styled from 'styled-components'

const H = styled.h1`
    color: #fff;
`

class Header extends Component {
  render(){
    return (
      <div>
        <H>{this.props.title}</H>
      </div>
    )
  }
}
export default Header