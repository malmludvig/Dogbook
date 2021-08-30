import React, {useState, useContext } from 'react'
import { UserContext } from '../shared/global/provider/UserProvider'
import { useHistory } from 'react-router-dom'

export const EditView = () => {

  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  var stored_datas = JSON.parse(localStorage["datas"]);

  var str = window.location.href;
  str = str.substring(str.indexOf("w") + 2);

      //Skapa tillfälliga variabler av hundens object som skrivs ut på profilsidan
      let dogIdVar, nameVar, nickVar, ageVar, bioVar, homeVar, friendListVar, imageVar, indexTracker
      for (var i in stored_datas) {
          if (stored_datas[i].name === str) {
            dogIdVar = stored_datas[i].dogId; 
            nameVar = stored_datas[i].name;
            nickVar = stored_datas[i].nick; 
            ageVar = stored_datas[i].age; 
            bioVar = stored_datas[i].bio;
            homeVar = stored_datas[i].home; 
            friendListVar = stored_datas[i].friendList; 
            imageVar = stored_datas[i].img; 
            indexTracker = i;
  
          }
        }

console.log(nameVar)

  const history = useHistory()
  
    const [id, setDogId] = useState(dogIdVar);
    const [name, setName] = useState(nameVar);
    const [nick, setNick] = useState(nickVar);
    const [age, setAge] = useState(ageVar);
    const [bio, setBio] = useState(bioVar);
    const [home, setHome] = useState(homeVar);
    const [friends, setFriends] = useState(friendListVar);
    const [img, setImg] = useState(imageVar);
    const [newFriend, setNewFriend] = useState();





    
    const deleteFriend = (name) => {

      //Ta bort vän från nuvarande profilhund
        console.log(name)
            //Hitta Id för hund med namn
            let friendId = 0;
            for (var i in stored_datas) {
              if (stored_datas[i].name === name) {
      
                friendId = stored_datas[i].dogId
              }
            }
            console.log(friendId)

      function remove(arrOriginal, elementToRemove){
        return arrOriginal.filter(function(el){return el !== elementToRemove});
    }
    let newFriends = remove(friends, friendId);
    setFriends(newFriends)
    console.log(friends)
    stored_datas[indexTracker].friendList = friends;

    //Ta bort nuvarande profilhund från klickad vän
    console.log("Nuvarande hund ID:")
    console.log(id)

    console.log("Klickad hund ID:")
    console.log(friendId)


    let clickedFriends = []
    let indexTrackerForClickedDog
    for (var i in stored_datas) {
      if (stored_datas[i].dogId === friendId) {

        clickedFriends = stored_datas[i].friendList
        indexTrackerForClickedDog = [i]
      }
    }

    console.log("Clickad hunds vänlista")
    console.log(clickedFriends)

    let newFriendsForClickedDog = remove(clickedFriends, id);

    stored_datas[indexTrackerForClickedDog].friendList = newFriendsForClickedDog

    localStorage["datas"] = JSON.stringify(stored_datas);

  }

  const addNewFriend = () => {
  
    if(newFriend !== undefined)

    
    //Hämta Id av hund som finns på adda dropdown

    //Lägg till id av ny hund i nuvarande hunds lista


    //Lägg till id av nuvarande hund i nya vännens vänlista

    console.log("option:")
    console.log(newFriend)


    alert("En ny vän har addats")
  }

  



    const newObject = {}

    const  handleSubmit = (evt) => {

      evt.preventDefault();
      newObject.dogId = id
      newObject.name = name
      newObject.nick = nick
      newObject.age = age
      newObject.bio = bio
      setFriends(friendListVar)
      newObject.friendList = friends
      newObject.img = imageVar

      //newObject.img = tmpImgUrl;


      //Här vill jag ändra i object där str === name


      stored_datas[indexTracker] = newObject;
      localStorage["datas"] = JSON.stringify(stored_datas);

      history.push(`/`);

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

          <button onClick={() => addNewFriend()}>Klicka för att testa min option-funktion</button>

            <h1>{nameVar}'s profile</h1>
            <img className="profileImg" src={imageVar} alt="" />
      <br/>

 <form onSubmit={handleSubmit}>

<table>
  <tr>
  </tr>
  <tr>
    <td>Name:</td>
    <td><label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label></td>
  </tr>
  <tr>
    <td>Nick:</td>
    <td><label>
        <input
          type="text"
          value={nick}
          onChange={e => setNick(e.target.value)}
        />
      </label></td>
  </tr>
  <tr>
    <td>Age:</td>
    <td><label>
        <input
          type="text"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </label></td>
  </tr>
  <tr>
    <td>Bio:</td>
    <td><label>
        <input
          type="text"
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
      </label></td>
  </tr>
  
  <tr>
    <td>HomeOrNot:</td>
    <td><label>
        <input
          type="checkbox"
          value={name}
          onChange={e => setHome(e.target.value)}
        />
      </label></td>
  </tr>
  <tr>
    <td>Add friend</td>
    <td><label>
    <select
    
        name="Cities"
          onChange={e => setNewFriend(e.target.value)}
          
    >
          <option value="">Add a friend</option>

          {stored_datas.map((country, key) => (

            <option key={key} value={country.name}>{country.name}</option>
          
          ))}

        </select>
      </label></td>
  </tr>
  <tr>
    <td>Friends:</td>
    <td>

    {friendNames.map((item, index) => (
                <div key={index}>
                
                {item}<a onClick={() => deleteFriend(item)} className="profileLink">[x]</a>

                <br/></div>
))}

    </td>


  </tr>
</table>

<input type="submit" value="Submit" />
    </form>
 
        </div>
    )
}