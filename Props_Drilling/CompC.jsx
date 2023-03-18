import CompD from './CompD'
let CompC = (props) => {
    return <div>
        <h1>Via <br></br>Component C</h1>
        <pre>{JSON.stringify(props)}</pre>
        <hr />
        <CompD name={props.name} />
    </div>
}

export default CompC