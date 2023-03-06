import { NavLink } from "react-router-dom";
import classes from './pages.module.css';
// import EventForm from '../components/EventForm';

const NewEventPage = () =>{
    return <>
        <h1 className={classes.content}>HEllo NEw Event Page!</h1>
        {/* <EventForm/> */}
        <ul className={classes.content}>
            <li>
                <NavLink to=".." className={classes.content}>back</NavLink>
            </li>
        </ul>
    </>
}

export default NewEventPage;