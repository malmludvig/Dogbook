import React, { useContext } from 'react'
import { UserContext } from '../shared/global/provider/UserProvider'
import { useHistory } from 'react-router-dom'


export const HomeView = () => {

    const history = useHistory();

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    var stored_datas = JSON.parse(localStorage["datas"]);

    for (let i = 0; i < stored_datas.length; i++) {
        console.log(stored_datas[i].name)

        console.log(stored_datas[i].friendList)
    }

    


    //stored_datas[0].friendList = []

    //ta bort alla 1:or


    //fido (id 1) har vänner (douglas) id 2 och (prime) id 3

    //ta bort fido
    //ta bort siffran 1 från douglas
    //ta bort siffran 1 från prime

    //alla hundar är object inuti en array





    //stored_datas -> object.friendList

    //const arr2 = stored_datas.filter(item => item.friendList !== 2);
    //const arr3 = stored_datas[0].friendList
    //const arr4 = arr3.filter(x => x !== 2);

    //console.log("Fidos vänner efteråt:")
    //console.log(arr4)

    //Ta bort alla värden i Fidos.friendList



    const deleteDog = (id, name) => {




        //Ta bort object från array med specifikt index.

        for (let i = 0; i < stored_datas.length; i++) {
        
            const temp1 = stored_datas[i].friendList
            const temp2 = temp1.filter(x => x !== id);
    
            console.log(stored_datas[i].name + " vänner :")
            console.log(temp2)
            stored_datas[i].friendList = temp2
          }


        const removeIndex = stored_datas.findIndex( item => item.dogId === id );
        stored_datas.splice( removeIndex, 1 );

        localStorage["datas"] = JSON.stringify(stored_datas);
        window.location.reload();

        alert(name + " has been deleted.");


    }


    const goToProfile = (item) => {

        history.push(`/profile/${stored_datas[item].name}`);

    }


    return (
        <div>
        <h1>Dogs:</h1>
            
            {stored_datas.map((item, index) => (
                <div key={index}>
                
                 <a className="profileLink" onClick={() => history.push(`/profile/${item.name}`)} >@{item.name}</a> <a onClick={() => deleteDog(item.dogId, item.name)} className="profileLink">[x]</a>

                <br/></div>
))}
            
        </div>
    )
}