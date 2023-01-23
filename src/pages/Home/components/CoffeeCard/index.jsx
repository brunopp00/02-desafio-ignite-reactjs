import styles from './styles.module.css';
import { ShoppingCart} from 'phosphor-react';
import { CounterButton } from '../../../../components/CounterButton';
import { useContext, useState } from 'react';
import { CartContext } from '../../../../context/CartContext';

export function CoffeeCard({data}) {
    const { addToCart } = useContext(CartContext);
    const [coffeeAmount, setCoffeeAmount] = useState(1)

    function handleAddToCart(data) {
        addToCart(data, coffeeAmount)
        setCoffeeAmount(1);
    }
    return (
        <div className={styles.container}>
            <img src={data.image} alt="" />

            <div className={styles.tagContainer}>
            {data.tag.map((tagg, index) => {
                return (
                    <span key={index} className={styles.tag}>{tagg.name}</span>
                    )
                })}
            </div>

            <h1 className={styles.name}>{data.name}</h1>
            <span className={styles.description}>{data.description}</span>

            <div className={styles.cartRow}>
                <span>R$ <b>{data.price.replace('.', ',')}</b></span>
                <div className={styles.cartButtons}>
                    <CounterButton height='2.375rem' amount={coffeeAmount} setCoffeeAmount={setCoffeeAmount} />
                    <button className={styles.cartButton} onClick={() => handleAddToCart(data)}>
                        <ShoppingCart weight='fill' size={20} />
                    </button>
                </div>

            </div>
        </div>
    )
}