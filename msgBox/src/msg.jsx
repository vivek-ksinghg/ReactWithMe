
function Msg({name,message}){
 let styles={  backgroundColor : name=="ankush" ?"red" : "blue"};
    return(
   <>
   
     <p style={styles}>hello {name} {message}</p>

     </>
         )
}

export default Msg;