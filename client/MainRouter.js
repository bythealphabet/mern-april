import React from 'react'
import {Switch, Route} from "react-router-dom"

///NAVIGATION 


import Home from "./container/home/Home"
 
function MainRouter(){

            return <Switch>
        <Route path="/" exact><Home /></Route>
    </Switch>

}
export default MainRouter