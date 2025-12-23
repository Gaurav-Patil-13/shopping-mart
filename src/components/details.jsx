import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import axios from '../utils/Axios'
import Loading from './Loading';

const details = () => {

  const [product, setProduct] = useState(null);
  const {id} = useParams();
  const getSingleProduct = async ()=>{
    try {
        const {data} =await axios.get(`/products/${id}`);
        setProduct(data);
    } catch (error) {
      console.log(error); 
    }
  }

  useEffect(()=>{
    getSingleProduct();
  },[id])



  return (
    product?(
    <>
      <div className="container w-[70%] h-full flex justify-between items-center m-auto p-[10%]">
        <img
          className="image object-contain h-[80%] w-[40%]"
          src={`${product.image}`}
          alt=""
        />

        <div className="content w-[50%]">

          <h1 className="title text-4xl">
            {product.title}
          </h1>
          <h3 className="category text-zinc-400 my-5">{product.category}</h3>
          <h2 className="price text-red-300 mb-3">$ {product.price}</h2>
          <p className="description mb-[5%]">
           {product.description}
          </p>

          <Link className="edit py-2 px-5  border rounded border-blue-200 mr-3 text-blue-300">
            Edit
          </Link>
          <Link className="delete py-2 px-5 border rounded border-red-200 text-red-300">
            Delete
          </Link>

        </div>
      </div>
    </>) : <Loading/>
  );
};

export default details;
