let CompD = (props) => {
    return <div>
        <h1>To <br></br>Component D</h1>
        <pre>{JSON.stringify(props.name)}</pre>
        <h3>Message:{props.name}</h3>
    </div>
}

export default CompD