import { useEffect, useState } from 'react';
export const Pagination = ()=>{

    const [products , setProducts] = useState([])
    const [page,setPage]= useState(1)
    const [isNextButtonDisabled , setIsNextButtonDisabled] = useState(false)
    const [isPreviousButtonDisabled , setIsPreviousButtonDisabled] = useState(true)

    useEffect(()=>{

        fetch('https://dummyjson.com/products?limit=100').then((res)=> res.json()).then((data)=>{
            console.log("Data ",data)
            setProducts(data.products)
        })
    },[])
    useEffect(()=>{
        if(page === 10){
            setIsNextButtonDisabled(true)
        }
        else if(page === 1){
            setIsPreviousButtonDisabled(true)
        }
        else{
            setIsNextButtonDisabled(false)
            setIsPreviousButtonDisabled(false)
        }

    },[page])
    function incPage() {
        
        setPage(prevPage => prevPage+1)

    }
    function decPage(){
       
        setPage(prevPage => prevPage-1)
    }


    return (
        <div>
            <h1>Product Table</h1>
            

             <table className='product-table'>
                <tbody>

               
                {products.slice(page*10-10,page*10).map((product) => (
                    <>
                    <tr key={product.id}>
                    <td> { product.title }</td>
                    <td> { product.brand }</td>
                    <td> { product.price }</td>

                    </tr>

     </>
    ))}
                    
                
                </tbody>
            </table>

            <button onClick={incPage} disabled={isNextButtonDisabled}>
                Next
            </button>
            <button onClick={decPage} disabled={isPreviousButtonDisabled}>
                Previous
            </button>
           


        </div>
    )
}