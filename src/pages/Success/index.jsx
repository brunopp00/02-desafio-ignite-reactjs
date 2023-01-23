import styles from './styles.module.css';
import delivery from '../../assets/delivery.png';
import { Item } from './components/Item';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useLocation } from 'react-router-dom'

export function Succeess() {
    const { setCart } = useContext(CartContext);

    const location = useLocation()
    const { street, bairro, number, paymentMethod } = location.state;
    let payment = '';

    switch (paymentMethod) {
        case 1: 
            payment = 'Cartão de Crédito'
            break;
        case 2: 
            payment = 'Cartão de Débito'
            break;
        case 3: 
            payment = 'Dinheiro'
            break;
            
    }

    useEffect(() => {
        setCart([]);
    }, []) 
        
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Uhu! Pedido confirmado</h1>
            <span className={styles.text}>Agora é só aguardar que logo o café chegará até você</span>
            <div className={styles.row}>
                <div className={styles.box}>
                    <Item title={street + ', ' + number} subtitle={bairro} icon="delivery" />
                    <Item subtitle="20 min - 30 min" icon="timer" />
                    <Item subtitle={payment} icon="money" />
                </div>

                <img src={delivery} alt="Figura ilustrativa do entregador em cima da moto indo entregar seu pedido" className={styles.image} />
            </div>
        </div>
    )
}