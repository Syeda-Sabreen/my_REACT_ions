import React, {useState} from 'react';
import axios from 'axios';


function AxiosPost() {
    const data = {fname: "", lname: ""};
    const [inputdata, setinputdata] = useState(data) 

    const handleData = (e) => {
        setinputdata({...inputdata, [e.target.name]: e.target.vale})
    }
    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputdata)
        .then((response) => {
            console.log(response)


        })

    }
  return (
    <>
    <label>First Name: </label>
    <input type="text" name='fname' value={inputdata.fname} onChange={handleData} /> <br />
    <label>Last Name: </label>
    <input type="text" name='lname' value={inputdata.lname} onChange={handleData} />
    
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}
export default AxiosPost;
