import React, {useState} from 'react';
import { products } from './products';
 
const App = () => {
    const [category, setCategory] = useState(products);
    const handleBtns = (e) => {
    let word=e.target.value;
     
    if(word === "jackets"){
      setCategory(products)
    }
    else if(word === "shirts") {
      const filtered = products.filter(item=>item.kind === "shirts");
      setCategory(filtered)
    }
    else if(word === "pants") {
      const filtered = products.filter(item=>item.kind === "pants");
      setCategory(filtered)
    }
  }
 
  return (
    <>
      <section>
        <div>
          <h2>React Filter</h2>
          <div>
            <button value="Jackets" onClick={handleBtns}>Jackets</button>
            <button value="shirt" onClick={handleBtns}>Shirts</button>
            <button value="pants" onClick={handleBtns}>Pants</button>
            <button value="skirts" onClick={handleBtns}>Skirts</button>
          </div>
 
          <div>
            { category.map((item) => (
              <div key={item.name}>
                
                    <h1>{item.description}</h1>
                    <p>{item.kind}</p>
                     <p>{item.price} </p>
                
                </div>
          
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
 
export default App