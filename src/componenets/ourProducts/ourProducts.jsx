import './ourProducts.css'
function ourProducts() {
    return(
        <>
            <section className="p-5">
                <h1 className="text-uppercase text-center">Our products</h1>
                <p className="text-center col-md-6 col-12 me-auto ms-auto">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida.</p>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="col-md-2 col-10 ms-5 me-5">
                        <div className="position-relative">
                            <img src="/img/calm-chair.jpg" className="product-img "/>
                        </div>
                        <p className="text-center text-secondary mt-3">BLUE ARMCHAIR</p>
                    </div>
                    <div className="col-md-2 col-10 ms-5 me-5">
                        <img src="/img/sofa.jpg" className="product-img"/>
                        <p className="text-center text-secondary mt-3">GRAY SOFA</p>
                    </div>
                    <div className="col-md-2 col-10 ms-5 me-5">
                        <img src="/img/planet.jpg" className="product-img"/>
                        <p className="text-center text-secondary mt-3">ROPE POT</p>
                    </div>
                </div>
                <div className="text-center">
                    <a href='/' type="button" className="btn btn-secondary ps-4 pe-4 rounded-0">Shop Now</a>
                </div>
            </section>
        </>
    )
}

export default ourProducts;
