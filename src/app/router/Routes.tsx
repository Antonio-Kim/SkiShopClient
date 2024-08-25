import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../ui/App';
import ProductDetails from '../../features/catalog/ProductDetails';
import Catalog from '../../features/catalog/Catalog';
import HomePage from '../../features/home/HomePage';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import ServerError from '../errors/ServerError';
import NotFound from '../errors/NotFound';
import CartPage from '../../features/cart/CartPage';
import CheckoutPage from '../../features/checkout/CheckoutPage';
import LoginPage from '../../features/account/LoginPage';
import RegisterPage from '../../features/account/RegisterPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'catalog', element: <Catalog /> },
      { path: 'catalog/:id', element: <ProductDetails /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'server-error', element: <ServerError /> },
      { path: 'not-found', element: <NotFound /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: '*', element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
