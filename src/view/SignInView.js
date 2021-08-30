import React, {useState, useContext } from 'react'
import { UserContext } from '../shared/global/provider/UserProvider'
import { useHistory} from 'react-router-dom'

export const SignInView = () => {
    const history = useHistory()
    const [dogname, setDogname] = useState()
    const [password, setPassword] = useState()
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
                "friendList": [2, 3],

            },
            {
                "dogId": 2, 
                "name": "Douglas",
                "nick": "Doggy",
                "age": 2,
                "bio": "Woff woff. That's what I tell 'em.",
                "home": "false",
                "friendList": [1],
            },
            {
                "dogId": 3, 
                "name": "Prime",
                "nick": "Gubben",
                "age": 9,
                "bio": "Grrrraaaaaaw! I sound just like chewbacca",
                "home": "true",
                "friendList": [1],
            },
            {

                "dogId": 4, 
                "name": "James",
                "nick": "Jamstrams",
                "age": 14,
                "bio": "I love my owner sp much! His name is Petterfjärt.",
                "home": "true",
                "friendList": [],
            }
            ]

        localStorage["datas"] = JSON.stringify(datas);
        history.push('/')

    }

    return (
        <div>
            <button onClick={() => createDog()}>Create dogs</button>
        </div>

    )
}