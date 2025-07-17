function Task(){
    return(
        <>
        <ul>
            <li>Invent new traffic light</li>
            <li>Rehears a movie scene</li>
            <li>Improve a spectrum technology</li>
        </ul>

        <button onClick={()=>{
            alert("function call")
        }}>click me</button>
        </>
    )
}

export default Task;