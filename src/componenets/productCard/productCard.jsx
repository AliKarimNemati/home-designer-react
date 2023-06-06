import './productCard.css'
import CartContext from '../../context/products'
import {useContext as UseContext} from "react";
import {Link} from "react-router-dom";

function productCard({product}) {
    const cart = UseContext(CartContext)

    return (
        <>
            <div className="col-md-3 col-10 ms-4 me-4 mt-5 card p-4">
                <div className="position-relative">
                    <img src={product.imgSrc} className="product-img"/>
                </div>
                <Link to={'product/'+product.id} className="text-center text-secondary mb-0 mt-3 text-uppercase text-decoration-none h5">
                    {product.name}
                </Link>

                <p className="text-secondary text-center p-2 m-0">{product.des}</p>
                <p className="h4 text-center text-secondary text-uppercase english-number">
                    ${product.price}
                </p>
                <div className="text-center">
                    <button
                        type="button"
                        className="btn btn-secondary ps-4 pe-4 rounded-0"
                        onClick={() => {
                            cart.addToCart(product);
                        }}
                        value={product.id}
                        disabled={cart.cart().find((item) => item.id == product.id)}
                    >
                        {cart.cart().find((item) => item.id == product.id) ? 'added to cart' : 'Buy'}
                    </button>
                </div>
            </div>
        </>
    )
}

export default productCard