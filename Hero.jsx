import React from "react";
import './hero.css';

class Hero extends React.Component {
    hero_Name1 = "Vijay Deverkonda"
    hero_Image1 = "https://th.bing.com/th/id/OIP.jbFAb2FFo3nwkzbrTpGA8gHaLH?w=204&h=306&c=7&r=0&o=5&pid=1.7"

    render() {
        return (
            <div>
                <h2>Hero Component ⬇️ ⬇️</h2> <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mt-4">
                            <div className="card">
                                <div className="card-header">
                                    <img src={this.hero_Image1} alt="" width={220} />
                                </div>
                                <div className="card-body">
                                    <h3>{this.hero_Name1}</h3>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <br />
                <button className="btn btn-success" style={{ marginLeft: '170px' }}>Buy Tickets</button>
            </div>
        );
    }
}

export default Hero;
