import React, {useEffect, useContext} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {RecipeView} from '../view/RecipeView'
import {HomeView} from '../view/HomeView'
import {SignInView} from '../view/SignInView'
import {UserContext} from '../shared/global/provider/UserProvider'
import {ProfileView} from '../view/ProfileView'
import {SettingsView} from '../view/SettingsView'
import {EditView} from '../view/EditView'


export const Routing = (props) => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const checkIfUserIsAuthenticatedInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem("username"))
    }

    useEffect(() => {
        checkIfUserIsAuthenticatedInBrowser()
    }, [])

    return(
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/recipe" component={RecipeView} />
                <Route exact path="/signin" component={SignInView} />
                <Route path="/profile" component={ProfileView} />
                <Route exact path="/settings" component={SettingsView} />
                <Route path="/editview" component={EditView} />

                <Route component={HomeView} />
                
            </Switch>
        </Router>

    )
}