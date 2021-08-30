import React, {useEffect, useContext} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {HomeView} from '../view/HomeView'
import {CreateView} from '../view/CreateView'
import {ProfileView} from '../view/ProfileView'
import {EditView} from '../view/EditView'

export const Routing = (props) => {

    return(
        <Router>
            {props.children}
            <Switch>

                <Route exact path="/createview" component={CreateView} />
                <Route path="/profile" component={ProfileView} />
                <Route path="/editview" component={EditView} />
                <Route component={HomeView} />
    
            </Switch>
        </Router>
    )
}