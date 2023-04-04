import React from 'react'

const Hook = () => {
    let [msg, setMsg] = React.useState("Hola!!!")
    
    return (
        <div>
            <pre>{JSON.stringify(msg)}</pre>
            <button onClick={() => {
                setMsg("Good Day!!!")
            }}>Click</button>
            <button onClick={() => {
                setMsg("Keep Smiling!!!")
            }}>Hit</button>
        </div>
    )
}

export default Hook