import React from "react";

class Login_single_handle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    singleHandler = (event) => { 
        console.log(event.target)
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
        event.preventDefault();
        console.log(this.state)
    }

    render(){
        return (
            <>
                <div class="container">
                    <div class="row">
                        <div class="col-4 mt-5">
                            <div class="card">
                                <div class="card-header bg-primary text-white">
                                    <h1> Login Details</h1>
                                </div>
                                <div class="card-body"></div>
                                <pre>{JSON.stringify(this.state)}</pre>
                                
                                <form onSubmit={this.singleHandler}>
                                    <div className="form-group">
                                        <label> Email ID:</label>
                                        <input className="form-control" type="text" name="email" onChange={this.singleHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input className="form-control" type="text" name="password" onChange={this.singleHandler}/>
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

export default Login_single_handle;
