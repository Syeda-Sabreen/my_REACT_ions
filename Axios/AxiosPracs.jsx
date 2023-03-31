import React, { useEffect , useState } from 'react';
import axios from 'axios';

function Axios() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response);
                setdata(response.data);
            });
    }, []);

    return (
        <div>
            Data fetch using Axios
            {data.map((data) => {
                return (
                    <div>{data.email}</div>
                    
                );
                

            })}
        </div>
    );
}

export default Axios;
