import { NavLink } from "react-router-dom";
import classes from './pages.module.css';
// import EventsList from '../components/EventsList';

const EventDetailsPage = () =>{
    return <>
        <h1 className={classes.content}>HEllo Event Details Page!</h1>
        {/* <EventsList/> */}
        <ul className={classes.content}>
            <li>
                <NavLink to=".." className={classes.content}>back</NavLink>
            </li>
        </ul>
    </>
}

export default EventDetailsPage;