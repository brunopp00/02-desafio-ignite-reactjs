import { createContext, useState } from "react"

export const CartContext = createContext({});

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState(0);
    const [street, setStreet] = useState('');
    const [bairro, setBairro] = useState('');
    const [number, setNumber] = useState('');
    const [cep, setCep] = useState('');
    const [canAcessSuccessPage, setCanAcessSuccessPage] = useState(false);
    const [complement, setComplement] = useState('');

    function addToCart(data, counter) {
        data = {...data, amount: counter}
        setCart(state => [...state, data]);
    }

    function removeCoffee(coffeeId) {
        var index = cart.findIndex(x => x.id === coffeeId);
        var cartList = [...cart];
        cartList.splice(index, 1);
        setCart(cartList)
    }

    return (
        <CartContext.Provider
            value={{
                cart, setCart, addToCart, removeCoffee, 
                paymentMethod, setPaymentMethod, 
                street, setStreet, 
                bairro, setBairro, 
                number, setNumber, 
                cep, setCep, 
                complement, setComplement,
                canAcessSuccessPage, setCanAcessSuccessPage
            }}
        >
            {children}
        </CartContext.Provider>
    )
}