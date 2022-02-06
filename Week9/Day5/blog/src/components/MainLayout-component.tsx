import React from "react";
import {Outlet, NavLink} from 'react-router-dom'
import { styles } from "../styles";

export const MainLayout: React.FC = () => {
   return (
      <div>
         <header style={styles.header}>
            <NavLink style={{...styles.navLink, fontSize: 30, marginRight: '50%', color: 'white'}} to='/'>My Blog</NavLink>
            <NavLink style={styles.navLink} to='/'>Home</NavLink>
            <NavLink style={styles.navLink} to='/about'>About</NavLink>
            <NavLink style={styles.navLink} to='/contact'>Contact</NavLink>
        </header>
        <Outlet/>
      </div>
   )
}

