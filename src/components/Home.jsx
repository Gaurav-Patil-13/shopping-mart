import React from 'react'
import Nav from './Nav';
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import { productContext } from './../utils/Contexts';
import Loading from './Loading';

const Home = () => {

  const {products}  = useContext(productContext);

  return  products?(
    <>
    <Nav/>    
      <div className='container w-[85%] h-full p-10 flex flex-wrap overflow-x-hidden overflow-y-auto '>

        {products.map((p,i)=>{
             return <Link key={p.id} to={`/details/${p.id}`} className='card w-[18%] h-[30vh] p-3 border shadow rounded mr-3 mb-3 flex-col flex justify-center items-center'>
              <div className='image w-full h-[80%] hover:scale-110 bg-contain bg-no-repeat bg-center mb-3 ' style={{backgroundImage:`url(${p.image})`}}>

              </div>
              <h1 className='hover:text-blue-300'>{p.title}</h1>
          </Link>
        })}
         
      </div>
    </>)
    : (<Loading/>);
};

export default Home