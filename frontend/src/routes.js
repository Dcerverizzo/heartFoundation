import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import New from './pages/New'
import GetOs from './pages/GetOs';
import Os from './pages/Os';



export default function Routes(){

    return (

        <BrowserRouter>
        <Switch>
            
            <Route path="/" exact component={Login}/>
            <Route path="/getos" component={GetOs}/>
            <Route path="/os" component={Os}/>
            <Route path="/new" component={New}/>

        </Switch>
        
        </BrowserRouter>


    )
}