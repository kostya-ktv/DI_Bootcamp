import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { ErrorBoundary } from "./ErrorBoundary";

export const Layout = props => {
    return(
        <>     
        <header>
            <NavLink to='/'>HOME</NavLink><br></br>
            <NavLink to='/profile'>PROFILE</NavLink><br></br>
            <NavLink to='/shop'>SHOP</NavLink><br></br>
            <NavLink to='/posts'>POSTS</NavLink><br></br>
            <NavLink to='/exmaple1'>exmaple1</NavLink><br></br>
            <NavLink to='/exmaple2'>exmaple2</NavLink><br></br>
            <NavLink to='/exmaple3'>exmaple3</NavLink><br></br>
        </header>
        <ErrorBoundary>
            <Outlet/>
        </ErrorBoundary>
            
        </>
    )
}