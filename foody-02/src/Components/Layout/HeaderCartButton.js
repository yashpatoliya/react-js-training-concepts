import React,{ useContext, useEffect, useState } from 'react'
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/cart-context';

const HeaderCartButton = props => {
    const [btnHighLighted, setBtnHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx
    const numberOfItems = items.length;
    
    const btnClasses = `${classes.button} ${btnHighLighted ? classes.bump : ''}`;

    useEffect(() => {
       
        setBtnHighLighted(true);
        setTimeout(()=>{
            setBtnHighLighted(false);
        },300)
    }, [items])

    return <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
 
}

export default HeaderCartButton;