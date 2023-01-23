import styles from './styles.module.css';
import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';
import { TitleForm } from './components/TitleForm';
import { CoffeeItemCard } from './components/CoffeeItemCard';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export function Checkout() {
    const { 
        cart, paymentMethod, setPaymentMethod, 
        street, setStreet, 
        bairro, setBairro, 
        number, setNumber, 
        cep, setCep, 
        complement, setComplement,
        setCanAcessSuccessPage
    } = useContext(CartContext);
    const [total, setTotal] = useState('0');
    const [coffeesPrice, setCoffeesPrice] = useState('0');
    const delivery = 3.50;

    const navigate = useNavigate();

    function handleConfirmCart(event) {
        event.preventDefault();
        if(paymentMethod === 0) {
            alert('Selecione uma forma de pagamento!');
            return false;
        } else {
            setCanAcessSuccessPage(true);
            navigate('/success', {state: { "street": street, "bairro": bairro, "number": number, "paymentMethod": paymentMethod  }});
        }
    }

    useEffect(() => {
        if(cart.length === 0) { 
            navigate('/');
        }
        window.scrollTo(0, 0);
        let sum = 0;
        cart.forEach(coffee => {
            let coffeePrice = coffee.price * coffee.amount;
            sum += parseFloat(coffeePrice);
        })
        setCoffeesPrice(sum.toFixed(2).replace('.', ','));
        sum += parseFloat(delivery);
        setTotal(sum.toFixed(2).replace('.',','));
    }, [cart])
    return (
        <form className={styles.container} onSubmit={handleConfirmCart}>

            <div className={styles.formComplete}>
                <h1 className={styles.title}>Complete seu pedido</h1>
                <div className={styles.completeBox}>

                    <TitleForm 
                        title="Endereço de Entrega"
                        subtitle="Informe o endereço onde deseja receber seu pedido"
                        icon={<MapPinLine size={22} color='#C47F17' />}
                    />

                    <div className={styles.formInputs}>
                        <input 
                            type="number" 
                            placeholder='CEP' 
                            required 
                            className={`${styles.cepInput} ${styles.defaultInput}`} 
                            onChange={(e) => {setCep(e.target.value)}} 
                            value={cep}
                        />
                        <input 
                            type="text"
                            placeholder='Rua' 
                            required 
                            className={`${styles.teste} ${styles.defaultInput}`} 
                            onChange={(e) => {setStreet(e.target.value)}} 
                            value={street} 
                        />
                        <div className={styles.formRow}>
                            <input 
                                type="number" 
                                placeholder='Número' 
                                required 
                                className={`${styles.numberInput} ${styles.defaultInput}`} 
                                onChange={(e) => {setNumber(e.target.value)}} 
                                value={number} 
                            />
                            <input 
                                type="text" 
                                placeholder='Complemento' 
                                className={`${styles.complementInput} ${styles.defaultInput}`} 
                                onChange={(e) => {setComplement(e.target.value)}} 
                                value={complement} 
                            />
                        </div>
                        <div className={styles.formRow}>
                            <input 
                                type="text" 
                                placeholder='Cidade' 
                                disabled 
                                value="Porto Alegre" 
                                className={`${styles.cityInput} ${styles.defaultInput}`} 
                            />
                            <div className={styles.formRowMobile}>
                                <input 
                                    type="text" 
                                    placeholder='Bairro' 
                                    required 
                                    className={`${styles.bairroInput} ${styles.defaultInput}`} 
                                    onChange={(e) => {setBairro(e.target.value)}} 
                                    value={bairro} 
                                />
                                <input 
                                    type="text" 
                                    placeholder='UF' 
                                    value="RS" 
                                    disabled 
                                    className={`${styles.ufInput} ${styles.defaultInput}`} 
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.completeBox}>
                    <TitleForm 
                        title="Pagamento"
                        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                        icon={<CurrencyDollar size={22} color='#8047F8' />}
                    />
                    <div className={styles.payment}>
                        <a onClick={() => setPaymentMethod(1)} className={paymentMethod == 1 ? styles.selected : ''} >
                            <CreditCard size={16} color='#8047F8'  />
                            <span>CARTÃO DE CRÉDITO</span>
                        </a>
                        <a onClick={() => setPaymentMethod(2)} className={paymentMethod == 2 ? styles.selected : ''} >
                            <Money size={16} color='#8047F8'  />
                            <span>CARTÃO DE DÉBITO</span>
                        </a>
                        <a onClick={() => setPaymentMethod(3)} className={paymentMethod == 3 ? styles.selected : ''} >
                            <Bank size={16} color='#8047F8'  />
                            <span>DINHEIRO</span>
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <h1 className={styles.title}>Cafés selecionados</h1>
                <div className={styles.selectedCoffeesBox}>
                    {cart.map((coffee, index) => {
                        return <CoffeeItemCard key={coffee.name+index} data={coffee} />
                    })}

                    <div className={styles.totalBox}>
                        <div>
                            <span className={styles.textS}>Total de itens</span>
                            <span className={styles.textM}>R$ {coffeesPrice}</span>
                        </div>

                        <div>
                            <span className={styles.textS}>Entrega</span>
                            <span className={styles.textM}>R$ {delivery.toFixed(2).replace('.', ',')}</span>
                        </div>

                        <div>
                            <span className={styles.textBoldL}>Total</span>
                            <span className={styles.textBoldL}>R$ {total}</span>
                        </div>
                    </div>

                    <button type='submit' className={styles.confirm}>CONFIRMAR PEDIDO</button>
                </div>
            </div>
        </form>
    )
}