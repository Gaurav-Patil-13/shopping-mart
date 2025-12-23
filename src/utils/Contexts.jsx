import React ,{createContext, useState, useEffect} from 'react'
import axios from './Axios'


export const productContext = createContext();

const Contexts = (props) => {
  const [products, setproducts] = useState(null);

  const getProducts = async ()=>{
    try {
      const {data} = await axios("/products")
      setproducts(data);
    } catch (error) { 
        console.log(error);
    }
  };

  useEffect(() => {
      getProducts();
    }, [])
    
  
    return (
      <productContext.Provider value={{products, setproducts}}>{props.children}</productContext.Provider>
    )
}
  
export default Contexts