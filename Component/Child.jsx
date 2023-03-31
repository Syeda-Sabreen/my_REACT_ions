import React, { Component } from 'react'

class Child extends Component {
  render() {
    return ( <div>

<p>I am the child class</p>
<p>{this.props.name}</p>
<p>{this.props.age}</p>

    </div>
      
    )
  }
}

export default Child