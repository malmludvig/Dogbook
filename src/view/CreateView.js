import React, {useState, useContext } from 'react'
import { useHistory} from 'react-router-dom'

var stored_datas = JSON.parse(localStorage["datas"]);





export const CreateView = () => {

    const history = useHistory()
    const [name, setName] = useState("");
    const [nick, setNick] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");
    const [home, setHome] = useState("");
    const [url, setUrl] = useState("");

 let highestId = 0
  for (var i in stored_datas) {
    if(stored_datas[i].dogId > highestId)
      highestId = stored_datas[i].dogId + 1
    
  }
  console.log("Högsta ID")
  console.log(highestId)





    const newObject =             {
        "name": "Fidoran",
        "nick": "fidde",
        "age": 4,
        "bio": "",
        "home": "false",
        "friendList": [],
        "img": ""

    }

    if (!url) {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
          setUrl(data.message);
        })
        .catch(console.log);
    }
    

    const handleSubmit = (evt) => {
        evt.preventDefault();
        newObject.dogId = highestId
        newObject.name = name
        newObject.nick = nick
        newObject.age = age
        newObject.bio = bio
        newObject.img = url
        
        stored_datas.push(newObject)
        localStorage["datas"] = JSON.stringify(stored_datas);

        history.push(`/`);
    }

    console.log(stored_datas)

    return (
        <>
<form onSubmit={handleSubmit}>

<table>
  <tr>
    <th>Create new dog</th>
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
  </tr>

</table>

<input type="submit" value="Submit" />
    </form>

</>
    )
}