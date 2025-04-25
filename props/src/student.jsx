

/* In React, props (short for properties) are used to pass data from a parent component to a child component.
  Props make components reusable and dynamic.*/



// function Student(props){
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }
 
// here object props
function Student({user}){
    return(
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>
    )
}

export default Student;