import React from 'react';
import './hero.css'; 

let Func = () => {
    let hero_Name = "Vicky Kaushal"
    let hero_Image = "https://th.bing.com/th/id/OIP.-8xSsOndZaZEj9UGqyBhcwHaFj?w=230&h=180&c=7&r=0&o=5&pid=1.7"
    let hero_Name1 = "Vijay Deverkonda"
    let hero_Image1 = "https://th.bing.com/th/id/OIP.jbFAb2FFo3nwkzbrTpGA8gHaLH?w=204&h=306&c=7&r=0&o=5&pid=1.7"
    let hero_Name2 = "Arjun Kapoor"
    let hero_Image2 = "https://th.bing.com/th/id/OIP.E7VpnsdBErYC9PtIC9exdgHaHH?w=177&h=180&c=7&r=0&o=5&pid=1.7"
    let hero_Name3 = "Dulquer Salmaan"
    let hero_Image3 = "https://th.bing.com/th/id/OIP.Orkgew2bTqSXR8jRAMOXIAAAAA?w=178&h=263&c=7&r=0&o=5&pid=1.7"

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 mt-4">
                    <div className="card">
                        <div className="card-header">
                            <img src={hero_Image} alt=""  width={220}/>
                        </div>
                        <div className="card-body">
                            <h3>{hero_Name}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="card">
                        <div className="card-header">
                            <img src={hero_Image1} alt="" />
                        </div>
                        <div className="card-body">
                            <h3>{hero_Name1}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="card">
                        <div className="card-header">
                            <img src={hero_Image2} alt="" width={220} />
                        </div>
                        <div className="card-body">
                            <h3>{hero_Name2}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="card">
                        <div className="card-header">
                            <img src={hero_Image3} alt="" width={220} />
                        </div>
                        <div className="card-body">
                            <h3>{hero_Name3}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Func;
