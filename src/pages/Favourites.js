import React,{useContext} from 'react'
import { Meetupitem } from '../componet/mettups/Meetupitem'
import { Meetuplist } from '../componet/mettups/Meetuplist'
import Favouritecontext from '../store/favourite-contex'

export const FavouritesPage = () => {
    const FavouriteCtx = useContext(Favouritecontext)
    let content;
    if(FavouriteCtx.totalfavourites === 0){
        console.log(FavouriteCtx.totalfavourites.length)
        content=<p>not favourite item yet</p>
    }
    else{
        content=<Meetuplist meetup={FavouriteCtx.favorites}/>
    }
    return (
        <div>
            <h1>favouritepages</h1>
            {content}
        </div>
    )
}
