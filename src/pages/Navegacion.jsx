import React from 'react';
import { ProductsInfo } from '../json';
import { Card } from '../components';

export const Navegacion = () => {

  return (
    <div className='productos'>

      {ProductsInfo.map(function(producto){
        if(producto.categoria === "equipos-navegacion"){
          // return productoCategory
          return <Card key={producto.id} producto={producto} />
        } 
         return null;
      })}

    </div>
    
  )
}
