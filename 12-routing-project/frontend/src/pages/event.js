import { NavLink } from "react-router-dom";
import classes from './pages.module.css';

const EventPage = () =>{
    return <>
        <h1 className={classes.content}>HEllo Event Page!</h1>
        <ul className={classes.content}>
            <li>
                <NavLink to="/events/event-deatils" className={classes.content}>Event-Deatils</NavLink>
                <NavLink to="/events/edit-event" className={classes.content}>Edit Event</NavLink>
                <NavLink to="/events/new-event" className={classes.content}>New Event</NavLink>
                <NavLink to=".." className={classes.content}>Back</NavLink>
            </li>
        </ul>
    </>
}

export default EventPage;