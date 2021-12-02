import { useRef } from 'react';
import { Card } from '../ui/Card'
import classes from "./NewmeetupForm.module.css"

export const NewmeetsupForm = (props) => {
    const titleinputRef=useRef();
    const imageinputRef=useRef();
    const adressinputRef=useRef();
    const descinputRef=useRef();
    const submitHandler=(e)=>{
        debugger
        e.preventDefault();
        const enteredtitle=titleinputRef.current.value;
        const enteredimage=imageinputRef.current.value;
        const enterdadress=adressinputRef.current.value;
        const entereddescription=descinputRef.current.value;
        const meetupdata={
            title:enteredtitle,
            image:enteredimage,
            address:enterdadress,
            description:entereddescription

        }
        console.log(meetupdata)
        props.onAddmeetup(meetupdata)
    }
    return  <Card>
        <form className={classes.form} onSubmit={submitHandler}> 
            <div className={classes.control} >
                <label>meetup title</label>
                <input type="text" required id="text" ref={titleinputRef} />
            </div>
            <div className={classes.control}>
                <lable htmlFor="image">meetup image</lable>
                <input type="url" required id="image" ref={imageinputRef}/>
            </div>
            <div className={classes.control}>
                <lable htmlFor="address">Address</lable>
                <input type="text" required id="address" ref={adressinputRef}/>
            </div>
            <div className={classes.control}>
                <lable htmlFor="description" >description</lable>
                <textarea required id="description" rows="5" ref={descinputRef}/>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}
