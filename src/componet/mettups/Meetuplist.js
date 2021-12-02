import React from 'react'
import { Meetupitem } from './Meetupitem';
import classes from "./Meetuplist.module.css"


export const Meetuplist = (props) => {
  console.log(props.description)
    return (

        <ul className={classes.list}>
            {props.meetup.map((meetupitem)=>{
               return <Meetupitem
                key={meetupitem.id}
                id={meetupitem.id}
                image={meetupitem.image}
                title={meetupitem.title}
                description={meetupitem.description}
                address={meetupitem.address}
               />
                
            })}
        </ul>
   
    )
}
