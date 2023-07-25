import { useEffect } from "react";


const Products = ({state,dispatch})=>{

    const {products, cart} = state;
    console.log("products ",products)

    useEffect(()=>{

        console.log("Hello")
    },[])
    function addToCart(product){
        console.log("Inside Add to cart ",product)

        // dispatch({
        //     type:"ADD_TO_CART",
        //     payload:product

        // })

    }



    

    return (
        <div style={{display: 'flex', width: "80%",alignItems:"center",justifyContent:"space-evenly",flexWrap:"wrap"}}>
           
            {
                products.map((product)=>{
                    return (
                       
                        <div key={product.id} style={{display: 'block' , flexWrap:"wrap",justifyContent:"space-between",width:"20%" , border:"2px solid white",height:"200px"}}>
                             <img src={product.thumbnail} style={{width:"100px"}}></img><br/>
                            <span>{ product.title }</span>
                            <span>{product.brand}</span>
                            <br/>
                            <button style={{backgroundColor:'green'}} onClick={()=>{
                                
                                console.log("Insidee")
                                dispatch({
                                type:"ADD_TO_CART",
                                payload: {
                                    id: product.id,
                                    title: product.title,
                                    thumbnail: product.thumbnail,
                                    qty: product.qty,
                                    price: product.price,
                                }
                            })}}> Add to Cart</button>
                          
                           
                        </div>
                       
                    )

                })
            }


        </div>
    )

}
export default Products