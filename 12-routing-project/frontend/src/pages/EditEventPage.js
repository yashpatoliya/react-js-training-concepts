import { NavLink } from "react-router-dom";
import classes from './pages.module.css';
// import EventItem from '../components/EventItem'

const EditEventPage = () =>{
    return <>
        <h1 className={classes.content}>HEllo Edit Event Page!</h1>
        {/* <EventItem/> */}
        <ul className={classes.content}>
            <li>
                <NavLink to=".." className={classes.content}>back</NavLink>
            </li>
        </ul>
    </>
}

export default EditEventPage;