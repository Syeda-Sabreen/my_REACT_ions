import React, { Component } from 'react'

class PropsB extends Component {
    setValue = (id) => {
        this.props.m1(id)
    }
  render() {
    return (
      <div>CompB
        <pre>{JSON.stringify(this.props)}</pre>
        <button onClick={this.setValue.bind(this, 10)}>CLICK ME</button>
      </div>
    )
  }
}

export default PropsB