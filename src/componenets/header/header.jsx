import './header.css'
import {useContext as UseContext} from "react";
import ProductsContext from "../../context/products"
import {Link} from "react-router-dom";

function header() {
    let cart = UseContext(ProductsContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <div className="container-fluid">
                    <Link
                        className="navbar-brand text-uppercase text-white fs-4 me-5" to='/'>
                        naturehomedec
                    </Link
                    >
                    <button
                        className="navbar-toggler bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-1 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/#contact" className="nav-link text-light ms-2">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/#aboutUs" className="nav-link text-light ms-2">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/#materials" className="nav-link text-light ms-2">Materials</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/#ourProducts"
                                    className="nav-link text-light ms-2"
                                >Our Products</Link
                                >
                            </li>
                            <Link
                                to='/cart'
                                className="btn btn-secondary"
                            >
                                Cart
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>

            {/*Modal */}
            <div
                className="modal fade"
                id="shopingitems"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                        </div>
                        <div className="text-center">
                            {
                                cart.cart().length == 0?<h3 className="mb-5">Empty</h3>:
                                cart.cart().map((cartItem, i) => {
                                    return (
                                        <div
                                            className="border-bottom d-flex flex-wrap justify-content-between mt-3 p-3"
                                            key={i}
                                        >
                                            <div className="d-flex">
                                                <button type="button" className="btn-close ps-3" aria-label="Close" onClick={() => {cart.removeFromCart(cartItem.id)}}
                                                        value={cartItem.id}></button>
                                                <h5 className="english-number">{cartItem.name}</h5>
                                                <div className="border border-3 px-1 mx-2 d-flex justify-content-center align-items-center">
                                                    <span className="mx-1 sign" onClick={()=>{

                                                        if (cartItem.count == 1)
                                                            cart.removeFromCart(cartItem.id)
                                                        else
                                                            cart.minCartCount(cartItem.id)

                                                    }}>-</span>
                                                    <span className="mx-1">{cart.getCount(cartItem.id)}</span>
                                                    <span className="mx-1 sign" onClick={()=>{cart.addCartCount(cartItem.id);}}>+</span>
                                                </div>
                                            </div>
                                            <h5 className="english-number">${cartItem.price}</h5>
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
                </div>
            </div>
        </>
    )

}

export default header;