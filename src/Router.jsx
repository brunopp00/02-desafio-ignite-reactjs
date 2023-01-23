import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Succeess } from './pages/Success';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';

export function Router() {
    const { cart, canAcessSuccessPage } = useContext(CartContext);

    return (
        <Routes>
            <Route path='/' element={ <DefaultLayout /> }>
                <Route path='/' element={ <Home /> } />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/success' element={ canAcessSuccessPage ? <Succeess /> : <Home /> } />
            </Route>
        </Routes>
    )
}