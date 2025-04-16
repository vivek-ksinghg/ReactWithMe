import { useState } from "react"

export default function LudoBoard(){

    let [moves,setMoves]=useState({yellow:0,red:0,blue:0,green:0});

let updateYellow=()=>{
    // moves.yellow+=1;
    // setMoves({...moves}) // for changing the object , we are using the spread method 

    // *************** write the code in better way(we know that if new value depend on old value so we are using call back in updater function )

    setMoves((prevVal)=>{
        return{...prevVal,yellow:prevVal.yellow+1};
    });

}

let updateRed=()=>{

    setMoves((prevVal)=>{
        return {...prevVal,red:prevVal.red+1};
    })
}

let updateBlue=()=>{
    setMoves((prevVal)=>{
        return {...prevVal,blue:prevVal.blue+1};
    })
}

let updateGreen=()=>{
    setMoves((prevVal)=>{
        return {...prevVal,green:prevVal.green+1};
    })
}



    return(
        <div>
            <h3>Lets play!</h3>
            <div className="ludo">
                <p style={{color:"yellow"}}>yellow moves={moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <p style={{color:"red"}}>red moves={moves.red}</p>
                <button  style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
                <p style={{color:"blue"}}>blue moves={moves.blue}</p>
                <button  style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p style={{color:"green"}}>green moves={moves.green}</p>
                <button  style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
            </div>
        </div>
    )
}