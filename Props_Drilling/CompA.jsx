import CompB from './CompB'
let CompA = () => {
    let ename = "Surprise!!!"
    return <div>
        <h1>FROM  <br></br>
            Component A</h1>
        
        <hr />
        <CompB name={ename} />
    </div>
}

export default CompA