import React, { Component } from 'react'
import Child from './Child';

class Parent extends Component {
  render() {
    return ( <div>

        <p>I am the parent class</p>
        <Child name='John' age='25' />
    </div>
    )
  }
}

export default Parent