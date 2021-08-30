import React, { useContext } from 'react'
import { UserContext } from '../../shared/global/provider/UserProvider'
import { useHistory } from 'react-router'
import './Profile.css'


export const Profile = () => {

    
    const history = useHistory()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const logout = () => {
        localStorage.removeItem('username')
        setAuthenticatedUser(false)
        history.push('/')
    }

    return (
        <div className="profileWrapper">
            <img className="profileImg" src={"https://thispersondoesnotexist.com/image"} alt="" />
            <span className="displayedUsername">{authenticatedUser}</span>
            <div className="profileDropdown">
                <a onClick={() => history.push('/settings')}>Settings</a>
                <a onClick={() => history.push('/profile')}>Profile</a>
                <a onClick={() => logout()}>Logout</a>
            </div>
        </div>
    )
}