import React from "react";
import CompB from "./CompB"

class CompA extends React.Component{

  name = "rea sood"
  location = ["bang", "delhi","goa"]
  
  render() {
    return (
      <div>
        <h2>Doner Component</h2>
        <hr />
        <CompB ename={this.name} eloc={this.location} />
      </div>
    )
  }
}

export default CompA;
