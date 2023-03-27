import React, { useState } from "react";
import "./style.css";
import Menu from "./menuAPI";

Const Restaurant = () => {
    const myStyle = { color: "green" };

   const [menuData, setMenuData] = useState(Menu);
   console.log(menuData);
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle" style={myStyle}> 1 </span>
                        <span className="card-author subtle" style={myStyle}>Breakfast</span>
                        <h2 className="card-title"> Noodles</h2>
                        <span className="card-description subtle">
                            Noodles also called as maggie is actually a very unhealthy food especially when you are on a healthy diet. However it is considerec to be a best option when you are hungry and want to eat a fast food. They say Maggie takes just 2 minutes to be cooked, however it takes more than 5 minutes to be cooked well!!
                        </span>
                        <div className="card-read"> Read</div>
                    </div>
                    <img src="https://www.bing.com/th?id=OIP.UQGpb-o9ghQE7oSjnD0x4wHaLH&w=146&h=219&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="images" className="card-media" />
                    <span className="card-tag subtle"> Order Now</span>
                </div>
            </div>
        </>

    );
}

export default Restaurant;