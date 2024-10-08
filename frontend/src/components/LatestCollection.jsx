import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from './title';
import ProductItem from './ProductItem';
import { useState } from 'react';

const LatestCollection = () => {
    const {products} =useContext(ShopContext);
    const [latestProducts,setLatestProduct] = useState([]);
    useEffect(()=>{
      setLatestProduct(products.slice(0,10));
    },[products])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
      <Title text1={'LATEST'} text2={'COLLECTION'}/>
      <p className='w-3/4 m-auto text-xs sm:text-sm md-text-base text-gray-600'>Stay Trendy! Discover what's new and now in fashion.</p>
      </div>
      {/* rendering prodycts */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price }/>
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection