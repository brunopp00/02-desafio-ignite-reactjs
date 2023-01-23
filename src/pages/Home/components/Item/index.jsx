import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react';
import styles from './styles.module.css';

export function Item({text, color, icon}) {
    let ICON = ''
    switch (icon) {
        case 'cart':
            ICON = <ShoppingCart size={13.5} weight='fill' style={{width: '2rem'}} />
            break;
        case 'timer':
            ICON = <Timer size={13.5} weight='fill' style={{width: '2rem'}} />
            break;
        case 'coffee':
            ICON = <Coffee size={13.5} weight='fill' style={{width: '2rem'}} />
            break;
        case 'package':
            ICON = <Package size={13.5} weight='fill' style={{width: '2rem'}} />
            break;
    
        default:
            break;
    }
    return (
        <div className={styles.content}>
            <div className={styles.icon} style={{backgroundColor: `${color}`}}>
                {ICON}
            </div>
            <span>{text}</span>
        </div>
    )
}