import { useState,createContext }  from 'react';
const Favouritecontext=createContext({
    favorites:[],
    totalfavourites:0,
    addFavourite:(favouriteMeetup)=>{},
    removeFavourite:(meetupId)=>{},
    itemIsFavourite:(meetupId)=>{}

})


export const Favouritecontexprovider = (props) => {
    const [userFavourites, setuserFavourites] = useState([])
    const addfavouriteHandler=(favouriteMeetup)=>{
        setuserFavourites((preUserfavourite)=>{
            return preUserfavourite.concat(favouriteMeetup);
        })
    }
    const removeFavouriteHandler=(meetupId)=>{
        setuserFavourites(preUserfavourite=>{
            return preUserfavourite.filter(meetup=>meetup.id !== meetupId);
        });

    }
    const itemisFavouriteHandler=(meetupId)=>{
        return userFavourites.some(meetup=>meetup.id === meetupId);
    }
    const contex={
        favorites:userFavourites,
        totalfavourites:userFavourites.length,
        addFavourite:addfavouriteHandler,
        removeFavourite:removeFavouriteHandler,
        itemIsFavourite:itemisFavouriteHandler
    }
    return <Favouritecontext.Provider value={contex}>
        {props.children}
    </Favouritecontext.Provider>
}
export default Favouritecontext;
