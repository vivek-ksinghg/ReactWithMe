import Product  from "./product";

function ProductTAb(){
   let options=["hi-tech","durable","strong","wqf"];
   let option={a:"good", b:"nice" ,c:"wow"}
    return(
        <>
     <Product title="phone" price={1500} feature={options} features2={option} />
     <Product title="laptop" price={48959}/>
     <Product title="watch" price={7089}/>

        </>
    )
}

export default ProductTAb;