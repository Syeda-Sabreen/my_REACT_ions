import React from 'react';
class Counter extends React.Component{
    state= {counter : 1}
    decrHandle = () => {
        this.setState({counter: this.state.counter - 1})
    }
    incrHandle = () => {
        this.setState({counter: this.state.counter + 1})
    }

render(){
    return <div>
    <pre>{JSON.stringify(this.state)} </pre>
    

    <i className='fa fa-minus-circle' onClick={this.decrHandle}style={{ backgroundColor: 'red', color: 'white' }}></i>
    <span style={{ marginRight: '10px' }}>{this.state.counter}</span> 

    <i className='fa fa-plus-circle' onClick={this.incrHandle}style={{ backgroundColor: 'yellow', color: 'black' }}></i>
    
    </div>
}



}

export default Counter;