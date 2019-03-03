import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const AuthRoute = ({component: Component, ...rest})=>{
    console.log("AUTHROUTEUSERNAME" , rest.username);
    return(
        <Route {...rest} render={(props)=> rest.username !==""? <Component {...props}/>: <Redirect to="/login"/> }></Route>
    )
}