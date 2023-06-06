import './cart.css'
import {useContext as UseContext} from "react";
import ProductsContext from "../../context/products";

function cart() {
    let cart = UseContext(ProductsContext);


    return(
        <div className='p-md-5 p-4 '>
            <h1 className='mt-5 text-center'>Cart</h1>

            <div className="text-center col-lg-6 col-md-9 col-12 mx-auto">
                {
                    cart.cart().length == 0?<h3 className="mb-5 mt-5">Cart is Empty</h3>:
                        cart.cart().map((cartItem, i) => {
                            return (
                                <div
                                    className="border-bottom d-flex flex-wrap justify-content-between mt-3 p-3"
                                    key={i}
                                >
                                    <div className="d-flex flex-wrap col-12">
                                        <div className='col-4' style={{height: '150px'}}>
                                            <img src={cartItem.imgSrc} className='w-100 rounded-4 h-100'/>
                                        </div>
                                        <div className='col-md-4 col-7 align-self-center ms-4'>
                                            <div>
                                                <h4 className="english-number text-start">{cartItem.name}</h4>
                                                <p className='text-secondary m-0 text-start d-md-block d-none'>{cartItem.des}</p>
                                            </div>
                                            <h4 className="english-number align-self-center text-start mt-2">${cartItem.price}</h4>

                                            <div className="border border-3 px-1 mx-2 d-flex justify-content-center align-items-center col-5 text-start">
                                                    <span className="mx-1 sign" onClick={()=>{

                                                        if (cartItem.count == 1)
                                                            cart.removeFromCart(cartItem.id)
                                                        else
                                                            cart.minCartCount(cartItem.id)

                                                    }}>-</span>
                                                <span className="mx-1">{cart.getCount(cartItem.id)}</span>
                                                <span className="mx-1 sign" onClick={()=>{cart.addCartCount(cartItem.id);}}>+</span>
                                            </div>
                                            <div className='col-6 mt-1 text-start'>
                                                <button type="button" className="btn ps-3 text-danger" onClick={() => {cart.removeFromCart(cartItem.id)}}
                                                        value={cartItem.id}>remove</button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            )
                        })
                }

                {cart.total() == 0 ? '':
                    <>
                        <h2 className="my-3">Total: ${cart.total()}</h2>
                        <div className="text-center">
                            <button type="button" className="btn btn-secondary ps-4 pe-4 my-3 rounded-0 " onClick={cart.buy}>
                                buy
                            </button>
                        </div>
                    </>
                }

            </div>
        </div>
    )
}


export default cart