import React from 'react';

class BindHandlers extends React.Component{
    state = {message: "Hola!!"}
    updateHandler = (newMessage) => {
        this.setState({message: newMessage})
    }

    render(){
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <h3>{this.state.message}</h3>
            <button onClick={this.updateHandler.bind(this, "good morning")} style={{ marginRight: '10px', backgroundColor: 'red', color: 'white',borderRadius: '100px' }}>Good Morning</button>
            <button onClick={this.updateHandler.bind(this, "good afternoon")} style={{ marginRight: '10px', backgroundColor: 'purple', color: 'white',borderRadius: '100px'  }}>Good Afternoon</button>
            <button onClick={this.updateHandler.bind(this, "good evening")} style={{ marginRight: '10px', backgroundColor: 'green', color: 'white',borderRadius: '100px'  }}>Good Evening</button>
            <button onClick={this.updateHandler.bind(this, "good night")} style={{ marginRight: '10px', backgroundColor: 'blue', color: 'white' , borderRadius: '100px' }}>Good Night</button>
        </div>
    }
}

export default BindHandlers;
