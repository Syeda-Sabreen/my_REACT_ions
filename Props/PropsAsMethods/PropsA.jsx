import React, { Component } from 'react'

class PropsA extends Component {

    users = [10, 20, 30]
    get_User_Details = (id) => {
     console.log(id)

    }
  render() {
    return (
      <div>CompA
        <hr />
        <CompB p1={this.users} m1={this.get_User_Details} />
      </div>
    )
  }
}

export default PropsA