import './App.css';
import Home from "./componenets/home/home";
import Header from "./componenets/header/header";
import Footer from "./componenets/footer/footer";
import ProductsContext from "./context/products";
import {useState as UseState, useEffect as UseEffect} from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./componenets/productDetails/productDetails";
import Cart from "./componenets/cart/cart";


function App() {
    const [cart, setCart] = UseState([])
    const [n, setN] = UseState(0)
    const [products, setProducts] = UseState([])

    UseEffect(()=>{
        fetch('data/db.json')
            .then(res => res.json())
            .then(res => setProducts(res.products))

        if (localStorage.getItem('cart')) {
            let cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
            setCart(cartFromLocalStorage)
        }

    }, [])
    return (
        <>
            <ProductsContext.Provider value={{
                products: products,
                cart: getCart,
                addToCart: addToCart,
                removeFromCart: removeFromCart,
                total: getTotal,
                buy: buy,
                addCartCount: addCartCount,
                minCartCount: minCartCount,
                getCount: getCount
            }}>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/product/:id" element={<ProductDetails/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                </Routes>
                <Footer/>
            </ProductsContext.Provider>
        </>
    );
    function addToCart(product) {
        product.count = 1
        let lastCart = cart
        lastCart.push(product)
        setCart(lastCart)
        setN(n + 1)
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    function removeFromCart(id) {
        let lastCart = cart
        lastCart = lastCart.filter((cartItem)=> cartItem.id !== id)
        setCart(lastCart)
        localStorage.setItem('cart', JSON.stringify(lastCart))

    }

    function getCart() {
        return cart
    }

    function getTotal() {
        let total = 0
        cart.forEach((cartItem) => {
            total += (Number(cartItem.price))*cartItem.count
        })
        return total
    }

    function buy() {
        setCart([])
        localStorage.removeItem('cart')
    }

    function addCartCount(id) {
        let lasCart = cart
        lasCart.map((item) => {
            if(item.id === id){
                item.count += 1
            }
        })
        setN(n + 1)
        setCart(lasCart)
        localStorage.setItem('cart', JSON.stringify(cart))

    }

    function minCartCount(id) {
        let lasCart = cart
        lasCart.map((item) => {
            if(item.id === id){
                if (item.count !== 1){
                    item.count -= 1
                }
            }
        })
        setN(n + 1)
        setCart(lasCart)
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    function getCount(id) {
        let currentCart = cart.find((item)=>item.id == id)
        return currentCart.count
    }

}

export default App;
