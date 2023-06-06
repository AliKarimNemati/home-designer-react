import './ourProducts.css'
import {useContext as UseContext, useEffect as UseEffect, useState as UseState} from "react";
import ProductCard from "../productCard/productCard";
import ProductsContext from "../../context/products";
function ourProducts() {
    let products = UseContext(ProductsContext);

    return(
        <>
            <section className="p-5" id="ourProducts">
                <h1 className="text-uppercase text-center">Our products</h1>
                <p className="text-center col-md-6 col-12 me-auto ms-auto">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida.</p>
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        products.products.map((product) => {
                            return <ProductCard key={product.id} product={product}/>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default ourProducts;
