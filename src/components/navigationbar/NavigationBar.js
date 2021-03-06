import './NavigationBar.css'
import { useHistory } from 'react-router-dom'

export const NavigationBar = () => {
    const history = useHistory();

    const createTemplateDogs = () => {

        let templateData = [
            {
                "dogId": 1, 
                "name": "Fido",
                "nick": "Fidde",
                "age": 4,
                "bio": "I like to bark at old people!",
                "home": true,
                "friendList": [2, 3, 5],
                "img": "https://images.dog.ceo/breeds/malamute/n02110063_3853.jpg"

            },
            {
                "dogId": 2, 
                "name": "Douglas",
                "nick": "Doggy",
                "age": 2,
                "bio": "Woff woff. That's what I tell 'em.",
                "home": false,
                "friendList": [1, 5],
                "img": "https://images.dog.ceo/breeds/husky/n02110185_4677.jpg"

            },
            {
                "dogId": 3, 
                "name": "Prime",
                "nick": "Gubben",
                "age": 9,
                "bio": "Grrrraaaaaaw! I sound just like chewbacca",
                "home": true,
                "friendList": [1,5],
                "img": "https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191112123933390_COVER.jpg"
            },
            {

                "dogId": 4, 
                "name": "James",
                "nick": "Jamstrams",
                "age": 14,
                "bio": "I love my owner so much! His name is Petterfjärt.",
                "home": true,
                "friendList": [5],
                "img": "https://images.dog.ceo/breeds/bulldog-boston/n02096585_2560.jpg"
            },
            {

                "dogId": 5, 
                "name": "Huffy",
                "nick": "Hufflepuff",
                "age": 2,
                "bio": "Everyone thinks I am named after the Harry Potter name.",
                "home": false,
                "friendList": [1, 2, 3, 4],
                "img": "https://images.dog.ceo/breeds/shiba/shiba-15.jpg"
            }
            ]

        localStorage["datas"] = JSON.stringify(templateData);
        history.push('/')

    }

    return(
        <div className="navigationBarWrapper">
            <h1 className="logotype" onClick={()=> history.push('/')}>DogBook</h1>
            <span  onClick={() => createTemplateDogs()} className="createDogs">Create template dogs</span>         
        </div>
    )
}