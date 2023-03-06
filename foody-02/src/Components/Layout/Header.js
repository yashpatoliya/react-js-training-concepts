import {Fragment} from 'react'
import MealImg from '../../assests/meals.jpg'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onClick}/>
            </header>
            <div className={classes['main-image']}>
                <img src={MealImg} alt="A food delicius" />
            </div>
        </Fragment>
};

export default Header;