import React from 'react'
class CompB extends React.Component {

    render() {
        return <div>
            <h3>Recipient Component</h3>
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>Name:{this.props.ename}</h3>
            <h3>Loc:{this.props.eloc[1]}</h3>
        </div>
    }
}
export default CompB;