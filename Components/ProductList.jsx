export const ProductList = () => { 
    const choose = () => {}
    

        return (
            <div className='flex-col'>
                <div className="flex-justify-evenly">
            <p><button  className = 'p-4 m-4 text-blue bg-red hover br-grey'  onClick={() => choose('') }> Shirts </button> </p>
            <p><button  className = 'p-4 m-4'  onClick={() => choose('') }> Jackets</button> </p>
            <p><button  className = 'p-4 m-4 '  onClick={() => choose('') }> Pant and Skirt </button> </p>
            <p><button  className = 'p-4 m-4 '  onClick={() => choose('') }> All Products </button> </p>
           </div>
      </div>
      );
       
} 

export default ProductList;