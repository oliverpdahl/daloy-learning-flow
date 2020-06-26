import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'

class ContentBlockTextBlock extends Component {
  render(){
    return(
      <Col>
        <p className="text-dark">{this.props.contentBlock.text}</p>
      </Col>
    )
  }
}

export default ContentBlockTextBlock