import React, {Component}  from 'react';
import {createStore} from 'redux';
import {Provider as ReduxProvider} from 'react-redux';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Reducers from '../Reducers/Reducers';
import Login from '../Container/Login';
import Schools from '../Container/Schools';
import AuthRoute from '../Container/AuthRoute';
import Details from '../Container/Details';
import '../App.css';

const storevalue = createStore(Reducers);

class MainApp extends Component{

    render(){
        return(
            <div>
                <ReduxProvider store ={storevalue}>
                <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <AuthRoute path="/schools" component={Schools}></AuthRoute>
                    <Route path="/details" component={Details}></Route>
                    <Redirect to="/login"/>
                </Switch>
                </BrowserRouter>
                </ReduxProvider>
            </div>
        )
    }
}

export default MainApp;