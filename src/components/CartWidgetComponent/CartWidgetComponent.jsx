import React from 'react'
import cartImage from './images/cart.png'
import styles from './CartWidgetComponent.module.css'
import stylesCart from './CartWidgetComponent.module.css'


export const CartWidgetComponent = () => {
  return (
    <div className={styles.cartWidget}>
      <img src={cartImage} alt="Carrito de Compras"/>
      <div className={stylesCart.qtyDisplay}>0</div>
    </div>
  )
}
