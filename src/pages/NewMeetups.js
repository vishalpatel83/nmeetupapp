import React from 'react'
// import {useHistory} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { NewmeetsupForm } from '../componet/mettups/NewmeetsupForm'

export const NewMeetupsPage = () => {
    // const history=useHistory()
    const navigate = useNavigate();
    const addmeetuphandler=(meetupdata)=>{
        fetch(
            'https://reactmeetup-30eb5-default-rtdb.firebaseio.com/meetups.json',
            {
            method:'POST',
            body:JSON.stringify(meetupdata),
            headers:{
                'Content-Type':'application/json'
            }
             
            }
        ).then(
            
            ()=>{
                alert("meetting added")
                navigate('/')
            }
        )

    }
    return <section>
    <h1>New Meetups</h1>
    <NewmeetsupForm onAddmeetup={addmeetuphandler}/>
    </section>
}

