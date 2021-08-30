import React, { useContext } from 'react'
import { UserContext } from '../shared/global/provider/UserProvider'
import { useHistory } from 'react-router-dom'


export const HomeView = () => {

    const history = useHistory();

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    var stored_datas = JSON.parse(localStorage["datas"]);
    console.log("stored_datas:")

    const deleteDog = (id, name) => {

        //Ta bort object från array med specifikt index.
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