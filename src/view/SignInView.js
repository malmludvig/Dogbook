import React, {useState, useContext } from 'react'
import { UserContext } from '../shared/global/provider/UserProvider'
import { useHistory} from 'react-router-dom'

var stored_datas = JSON.parse(localStorage["datas"]);

export const SignInView = () => {
    const history = useHistory()
    const [name, setName] = useState("");
    const [nick, setNick] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");
    const [home, setHome] = useState("");
    const [asdd, setNadme] = useState("");

    const newObject =             {
        "dogId": 10, 
        "name": "Fidoran",
        "nick": "fidde",
        "age": 4,
        "bio": "I like to bark at old people!",
        "home": "true",
        "friendList": [],
        "img": "https://images.dog.ceo/breeds/mastiff-bull/n02108422_2678.jpg"

    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        newObject.name = name
        newObject.nick = nick
        newObject.age = age
        newObject.bio = bio

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
    <th>Dog</th>
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
    <td>Friends:</td>
    <td>
    <input
          type="checkbox"
          value={name}
          onChange={e => setName(e.target.value)}
        />Prime<br/>        
        <input
        type="checkbox"
        value={name}
        onChange={e => setName(e.target.value)}
      />Douglas <br/><input
      type="checkbox"
      value={name}
      onChange={e => setName(e.target.value)}
    />Fido

    </td>

    <td>
        
    </td>
  </tr>
</table>

<input type="submit" value="Submit" />
    </form>

<h1>Dogs:</h1>
            
            {stored_datas.map((item, index) => (
                <div key={index}>
                
                 <a className="profileLink" onClick={() => history.push(`/profile/${item.name}`)} >@{item.name}</a> 

                <br/></div>
))}

</>
    )
}