import React,{useState,useEffect} from 'react';
import { Meetuplist } from '../componet/mettups/Meetuplist';


// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];

export const AllMettupsPage = () => {
  
  const [isloading, setisloading] = useState(true)
  const [allMettups, setallMettups] = useState([])
  useEffect(() => {
    fetch('https://reactmeetup-30eb5-default-rtdb.firebaseio.com/meetups.json').then((response)=>
    {
      return response.json()
    }
    ).then(data=>{
      setisloading(false)
      const meetupsdata=[]
    

      for(const key in data){
      const meetup={
        id:key,
        ...data[key]
      };
      meetupsdata.push(meetup)
      }
      setallMettups(meetupsdata)
     console.log(data)
    })
 
  }, [])
   
  if(isloading){  
    return <section>
      <h1>Loading.....</h1>
    </section>
  }
    return (
    <section>
        {/* <Meetuplist meetup={DUMMY_DATA}/> */}
        <Meetuplist meetup={allMettups}/>
    </section>
    )
}
