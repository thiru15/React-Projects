import { useEffect } from "react";


const Cart = ({state,dispatch})=>{
    const {products, cart} = state;

    useEffect(()=>{

        console.log("Inside UseEffect ",cart)
    },[cart])

    return (
        <div style={{display: 'flex', width: '20%'}}>
            <ul>
            
            {
                cart.map((prod)=>{
                    return (
                        <div>
                            <li>
                            {prod.title}
                            </li>
                        </div>
                    )
                })
            }
            </ul>


        </div>
    )

}
export default Cart