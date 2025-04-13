
import "./product.css"

// function Product(props){ // first way to using props 
function Product({title,price,feature , feature2}){ // 2nd way to using props bia destructuring
  // let  isdiscount=price>30000 ? "5% discount" :"";
  let styles={backgroundColor:price>3000?"yellow":null};
    return(
        <div className="product" style={styles}>
            {/* <h3>{props.title}</h3> */}
            <h3>{title}</h3>
            <h5>{price}</h5>
            <h5>{feature}</h5>
            <h5>{feature2}</h5>
            {/* <p>{isdiscount}</p> */}
            {/* <p>{price>4000 ? "5% discont" :""}</p> extra div ceate when discount condition is not hit */}
           {price>4000 ?<p>"8% discont" </p>  :""}
           {price>4000 && <p>"8% discont" </p> }
        </div>
    )
}

export default Product;