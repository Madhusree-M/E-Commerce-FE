import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import ProductList from './components/ProductList.jsx'
import HomeLayout from './layouts/HomeLayout.jsx'
import Cart from './components/Cart.jsx'
import LoginForm from './components/LoginForm.jsx'
import AdminPage from './components/AdminPage.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import OrdersPage from './components/OrdersPage.jsx'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import EditProductForm from './components/EditProductForm.jsx'
import SignInForm from './components/SignInForm.jsx'
import Checkout from './components/CheckoutPage.jsx'


createRoot(document.getElementById('root')).render(
  <>
  <ToastContainer/>                                     {/* toast.success , error */}
    <BrowserRouter>                                     {/* Handling routes */}
        <Routes>                                        {/* switch */}
            <Route element={<HomeLayout/>}>             {/* case */}
                <Route path='/' element={<App/>}/>
                <Route path='/products' element={<ProductList/>}/>
                
                
                <Route path='/cart' element={
                    <ProtectedRoute>
                        <Cart/>
                    </ProtectedRoute>
                }/>

                <Route path='/orders' element={
                    <ProtectedRoute>
                        <OrdersPage/>
                    </ProtectedRoute>
                }/>

                <Route path="/checkout" element={
                    <ProtectedRoute>
                    <Checkout />
                    </ProtectedRoute>
                    } />
                
            </Route>
            <Route path='/admin' element={
                    <PrivateRoute>
                        <AdminPage/>
                    </PrivateRoute>
                }/>
            <Route path='/products/edit/:id' element={
                <PrivateRoute>
                    <EditProductForm/>
                </PrivateRoute>
            } />

            <Route path='/cart' element={
                    <Cart/>
            } />

            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/signin' element={<SignInForm/>}/>
        </Routes>
    </BrowserRouter>
    </>
)
