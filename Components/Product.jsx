export const Product = () => { 
    const chooseProduct = () => {}
    

        return (
            <div>
            <h1>Products</h1>
            <p><button  className = 'p-2 m-2 text-white bg-black'  onClick={() => chooseProduct('') }> ProductList</button> </p>
      </div>
      );
       
} 

export default Product;