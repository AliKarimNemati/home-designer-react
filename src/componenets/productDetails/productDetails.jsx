import './productDetails.css'
import {useParams as UseParams} from "react-router-dom";
import {useContext as UseContext, useEffect as UseEffect, useState as UseState} from "react";
import ProductsContext from "../../context/products";

function productDetails() {
    const {id} = UseParams()
    const [product, setProduct] = UseState({})
    let products = UseContext(ProductsContext);


    UseEffect(()=> {
        setProduct(products.products.find((item) => item.id == id))
    }, [])


    return (
        <div className="p-4 mt-5 m-md-5 d-flex flex-wrap justify-content-md-between">
            <div className='col-md-4 col-12'>
                <img src={product.imgSrc} className='w-100 rounded-3' style={{'height': '400px'}}/>
            </div>
            <div className='col-md-7 col-12 mt-5'>
                <h1>{product.name}</h1>
                <p className="text-secondary m-0">{product.des}</p>
                <h1 className="text-secondary text-uppercase english-number mt-2">
                    ${product.price}
                </h1>

                <div className="">
                    <button
                        type="button"
                        className="btn btn-secondary ps-4 pe-4 rounded-0"
                        onClick={() => {
                            products.addToCart(product);
                        }}
                        value={product.id}
                        disabled={products.cart().find((item) => item.id == product.id)}
                    >
                        {products.cart().find((item) => item.id == product.id) ? 'added to cart' : 'Buy'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default productDetails;