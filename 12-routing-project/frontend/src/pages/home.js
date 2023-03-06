import { NavLink } from "react-router-dom";
import classes from './pages.module.css';
const HomePage = () =>{
    return <>
        <h1 className={classes.content}>HEllo Home Page!</h1>
        <ul className={classes.content}>
            <li>
                <NavLink to="/events">Events</NavLink>
            </li>
        </ul>
    </>
}

export default HomePage;