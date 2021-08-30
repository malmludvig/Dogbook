import React, { useContext } from 'react'
import './NavigationBar.css'
import LogoType from '../../shared/images/logotype.png'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../shared/global/provider/UserProvider'
import { Profile } from '../profile/Profile'

export const NavigationBar = () => {
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)


    const createDog = () => {

        let datas = [
            {
                "dogId": 1, 
                "name": "Fido",
                "nick": "fidde",
                "age": 4,
                "bio": "I like to bark at old people!",
                "home": "true",
                "friendList": [2, 3, 5],

            },
            {
                "dogId": 2, 
                "name": "Douglas",
                "nick": "Doggy",
                "age": 2,
                "bio": "Woff woff. That's what I tell 'em.",
                "home": "false",
                "friendList": [1, 5],
            },
            {
                "dogId": 3, 
                "name": "Prime",
                "nick": "Gubben",
                "age": 9,
                "bio": "Grrrraaaaaaw! I sound just like chewbacca",
                "home": "true",
                "friendList": [1,5],
            },
            {

                "dogId": 4, 
                "name": "James",
                "nick": "Jamstrams",
                "age": 14,
                "bio": "I love my owner sp much! His name is Petterfjärt.",
                "home": "true",
                "friendList": [5],
            },
            {

                "dogId": 5, 
                "name": "Huffy",
                "nick": "Hufflepuff",
                "age": 2,
                "bio": "Everyone thinks I am named after the Harry Potter name.",
                "home": "false",
                "friendList": [1, 2, 3, 4],
            }
            ]

        localStorage["datas"] = JSON.stringify(datas);
        history.push('/')

    }








 

    return(
        <div className="navigationBarWrapper">
            <h1 className="logotype" onClick={()=> history.push('/')}>DogBook</h1>
            
            <span  onClick={() => createDog()} className="signIn">Create dogs</span>         

        </div>
    )
}