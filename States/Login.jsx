import React from "react";
class Login_multi_handles extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: " ",
            password: " "
        }
    }

    emailHandler = (event)=> {
        console.log(event.target)
        console.log(event.target.value)
        this.setState({email: event.target.value})
    }
    passHandler = (event)=> {
        this.setState({password: event.target.value})
    }
    submitHandler = (event) =>{
        event.preventDefault();
        console.log(this.state)

    }


    render(){
        return ( <>
        <div class="container">
        <div class="row">
            <div class="col-4 mt-5">
             <div class="card">
                <div class="card-header bg-primary text-white">
        <h1> Login Details</h1>
        </div>
        <div class="card-body"></div>
        <pre>{JSON.stringify(this.state)}</pre>
        
        <form onSubmit={this.submitHandler}>
            <div className="form-group">
                <label> Email ID:</label>
                <input className="form-control" type="text" onChange={this.emailHandler}/>
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input className="form-control" type="text" onChange={this.passHandler}/>
            </div>
            <input className="btn btn-success" style={{ marginLeft: '130px' }} type="submit" />
        </form>
        </div>
        </div>
        </div>
        </div>
        </>
        )
    }
  



}
export default Login_multi_handles;