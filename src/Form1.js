import React, { Component } from 'react'
import Form from './Form'

class Form12 extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data:0
    }
  }
  globalChange(item){
    this.setState({data:item})
  }
  render() {
    return (
    <div>
      <h1>Lifting Up State</h1>
      <Child val={this.state.data}globalChange={this.globalChange.bind(this)}/>
      <br/>
      <Child val={this.state.data}globalChange={this.globalChange.bind(this)}/>
    </div>
    );
  }
}
class Child extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }
  render() {
    return (
    <div>
      <input value={this.props.val}
      onChange={(e)=>{this.props.globalChange(e.target.value)}}/>
    </div>
    );
  }
}

export default Form12