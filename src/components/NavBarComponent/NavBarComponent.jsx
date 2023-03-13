import React from 'react'
import NavItem from './NavItem'
import styles from "./NavBarComponent.module.css"
import { CartWidgetComponent } from '../CartWidgetComponent/CartWidgetComponent'

export const NavBarComponent = () => {
  return (
    <nav className={styles.nav}>
      <header><img src="./logo.png" /></header>
      <div className={styles.navItems}>
        <NavItem label="Home" src="#" />
        <NavItem label="Equipos de Navegación" src="#" />
        <NavItem label="Equipos de Comunicación" src="#" />
        <NavItem label="Equipos para Pesca" src="#" />
        
      </div>
      <CartWidgetComponent />
    </nav>
  )
}