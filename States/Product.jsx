import React from 'react';

class Product extends React.Component{
state = {name: "Phone", price: 16000, qty: 1}
decrHandler = () => {
 this.setState({qty: this.state.qty - 1})

}
incrHandle = () => {
this.setState({qty: this.state.qty + 1})

}


    render(){

return <div className="container">
    <div className="row">
        <div className="col-md-6 mt-4">
            <table className="table">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.name}</td>
                        <td>{this.state.price}</td>
                        <td><i onClick={this.decrHandler} className="fa fa-minus-circle"  ></i>{this.state.qty}<i className="fa fa-plus-circle" onClick={this.incrHandle}></i></td>
                            <td>{this.state.qty * this.state.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}

export default Product;
                    