import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

export const HomeView = () => {


    const history = useHistory();
    var stored_datas = JSON.parse(localStorage["datas"]);

    for (let i = 0; i < stored_datas.length; i++) {

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

      // Fetch Dog Image Via 3rd party api - randomly
  
    const deleteDog = (id, name) => {

        //Ta bort object från array med specifikt index.

        for (let i = 0; i < stored_datas.length; i++) {
        
            const temp1 = stored_datas[i].friendList
            const temp2 = temp1.filter(x => x !== id);
    

            stored_datas[i].friendList = temp2
          }

        const removeIndex = stored_datas.findIndex( item => item.dogId === id );
        stored_datas.splice( removeIndex, 1 );

        localStorage["datas"] = JSON.stringify(stored_datas);
        window.location.reload();

    }

    return (
        <div>
            
        <h1>Dogs:</h1>
            
            {stored_datas.map((item, index) => (
                <div key={index}>
                
                 <a className="profileLink" onClick={() => history.push(`/profile/${item.name}`)} >@{item.name}</a> <a onClick={() => deleteDog(item.dogId, item.name)} className="profileLink">[x]</a>

                <br/></div>
))}<br/>
                        <a></a><span onClick={()=> history.push('/createview')}>Create new dog</span>

        </div>
    )
}