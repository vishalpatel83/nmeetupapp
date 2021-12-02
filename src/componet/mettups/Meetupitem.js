import React,{useContext} from 'react'
import { Card } from '../ui/Card'
import classes from "./Meetupitem.module.css";
import Favouritecontext from '../../store/favourite-contex';
export const Meetupitem = (props) => {
    const FavouriteCtx = useContext(Favouritecontext);
    const itemIsFavourite=FavouriteCtx.itemIsFavourite(props.id);
    const toggelfavouriteStatushandler=()=>{
        
        if(itemIsFavourite){
            FavouriteCtx.removeFavourite(props.id)
        }
        else{
            FavouriteCtx.addFavourite({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address:props.address
            })
        }

    }
    return (
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggelfavouriteStatushandler}>{itemIsFavourite?'remove from favouritelist':'Add to favourites'}To Favourite</button>
            </div>
            </Card>
        </li>
    )
}
