import React from 'react';
import { ProductsInfo } from '../json';
import { Card } from '../components';

export const Pesca = () => {

  return (
    <div className='productos'>

      {ProductsInfo.map(function(producto){
        if(producto.categoria === "equipos-pesca"){
          // return productoCategory
          return <Card key={producto.id} producto={producto} />
        } 
         return null;
      })}

    </div>
    
  )
}