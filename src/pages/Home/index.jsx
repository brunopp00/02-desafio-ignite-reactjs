import { Item } from './components/Item';
import { CoffeeCard } from './components/CoffeeCard';

import styles from './styles.module.css';
import bannerCoffee from '../../assets/bannerCoffee.png';
import bannerBg from '../../assets/bannerBg.png';

import { coffees } from '../../data/coffees';

export function Home() {
    return (
        <div className={styles.home}>
            <section className={styles.landingSection}>
                <img className={styles.bannerBackground} src={bannerBg} alt="" />
                <div className={styles.textSide}>
                    <div className={styles.textBox}>
                        <h1 className={styles.title}>Encontre o café perfeito para qualquer hora do dia</h1>
                        <span className={styles.text}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                    </div>
                    <div className={styles.item}>
                        <Item 
                            text='Compra simples e segura'
                            color='#C47F17'
                            icon='cart'
                        />
                        <Item 
                            text='Embalagem mantém o café intacto'
                            color='#574F4D'
                            icon='timer'
                        />
                        <Item 
                            text='Entrega rápida e rastreada'
                            color='#DBAC2C'
                            icon='package'
                        />
                        <Item 
                            text='O café chega fresquinho até você'
                            color='#8047F8'
                            icon='coffee'
                        />
                    </div>
                </div>
                <img className={styles.bannerCoffee} src={bannerCoffee} alt="" />
            </section>

            <section className={styles.coffeeSection}>
                <h1 className={styles.titleCoffee}>Nossos cafés</h1>
                <div className={styles.coffeeList}>
                    {coffees.map(coffee => {
                        return <CoffeeCard key={coffee.id} data={coffee} />
                    })}
                </div>
            </section>
        </div>
    )
}