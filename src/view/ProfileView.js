import React, { useContext } from 'react'
import { UserContext } from '../shared/global/provider/UserProvider'
import { useHistory } from 'react-router-dom'


export const ShowFriends = () => {

    //hämta alla ID från nuvarande profil


    //hämta namnen för dessa ID:n i min array
}


export const ProfileView = () => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    var stored_datas = JSON.parse(localStorage["datas"]);

    var str = window.location.href;
    str = str.substring(str.indexOf("e") + 2);


    //Skapa tillfälliga variabler av hundens object som skrivs ut på profilsidan
    let dogIdVar, nameVar, nickVar, ageVar, bioVar, homeVar, friendListVar
    for (var i in stored_datas) {
        if (stored_datas[i].name === str) {
          dogIdVar = stored_datas[i].dogId; 
          nameVar = stored_datas[i].nick;
          nickVar = stored_datas[i].name; 
          ageVar = stored_datas[i].age; 
          bioVar = stored_datas[i].bio;
          homeVar = stored_datas[i].home; 
          friendListVar = stored_datas[i].friendList; 

        }
      }

      let friendIds = friendListVar.map((item, index) => (
          
        stored_datas.find(x => x.dogId === item)

        ))


        //Får problem om det är undefined
        const friendNames = friendIds.map(item => {
            return item.name
        })

    return (
        <div>

            <h1>This is the Profile View!</h1>
            <img className="profileImg" src={"https://dog.ceo/api/breeds/image/random"} alt="" />
            <table>
  <tr>
    <th>Dog</th>
  </tr>
  <tr>
    <td>Id:</td>
    <td>{dogIdVar}</td>
  </tr>
  <tr>
    <td>Name:</td>
    <td>{nameVar}</td>
  </tr>
  <tr>
    <td>Nick:</td>
    <td>{nickVar}</td>
  </tr>
  <tr>
    <td>Age:</td>
    <td>{ageVar}</td>
  </tr>
  <tr>
    <td>Bio:</td>
    <td>{bioVar}</td>
  </tr>
  <tr>
    <td>HomeOrNot:</td>
    <td>{homeVar}</td>
  </tr>
  <tr>
    <td>Friend list:</td>
    <td>
        
    {friendNames.map((item, index) => (
                <div key={index}>
                
                {item}

                <br/></div>
))}
 
    </td>
  </tr>
</table>

        </div>
    )
}

