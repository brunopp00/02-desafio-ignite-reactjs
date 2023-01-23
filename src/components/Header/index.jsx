import styles from './styles.module.css';
import headerLogo from '../../assets/header-logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext, useEffect, useState } from 'react';

export function Header() {
    const { cart } = useContext(CartContext);
    const [cartAmount, setAmountCart] = useState(0);

    useEffect(() => {
        let amount = 0;
        for(let i = 0; i < cart.length; i++) {
            amount = cart[i].amount + amount;
        }
        setAmountCart(amount);
    }, [cart])

    return (
        <header>
                <NavLink to='/'>
                    <img src={headerLogo} alt="" />
                </NavLink>

                <div className={styles.headerButtons}>
                    <button className={styles.locationButton}>
                        <MapPin size={22} weight='fill' />
                        <span>Maratá, RS</span>
                    </button>
                    <NavLink className={styles.cartButton} to={cart.length > 0 ? '/checkout' : '#'}>
                        {cart.length != 0 ? <div className={styles.counter}>{cartAmount}</div> : ""}
                        <ShoppingCart size={22} weight='fill' />
                    </NavLink>
                </div>
        </header>
    )
}