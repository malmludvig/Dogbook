import React, {useState} from 'react'
import { useHistory} from 'react-router-dom'

export const CreateView = () => {
  
    if (localStorage.getItem('datas') === null) 
    {
        let emptyArray = []
        localStorage["datas"] = JSON.stringify(emptyArray);
    } 

    var stored_datas = JSON.parse(localStorage["datas"]);

    const history = useHistory()
    const [name, setName] = useState("");
    const [nick, setNick] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");
    const [url, setUrl] = useState("");

 let uniqueId = 0
  for (var i in stored_datas) {
    if(stored_datas[i].dogId > uniqueId)
      uniqueId = stored_datas[i].dogId + 1
    
  }

    const newObject =             
    {
        "home": false,
        "friendList": []
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
        newObject.dogId = uniqueId
        newObject.name = name
        newObject.nick = nick
        newObject.age = age
        newObject.bio = bio
        newObject.img = url
        
        stored_datas.push(newObject)
        localStorage["datas"] = JSON.stringify(stored_datas);

        history.push(`/`);
    }

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