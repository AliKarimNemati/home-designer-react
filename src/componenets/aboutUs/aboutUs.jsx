import './aboutUs.css'
function aboutUs() {
    return(
        <>
            <section className="d-flex flex-wrap justify-content-center p-5" id="aboutUs">
                <div className="col-md-6 col-12 text-center">
                    <img src="/img/about-us-img.jpg" className="about-us-img w-75"/>
                </div>
                <div className="col-md-6 col-12 align-self-center mt-4 mt-md-0">
                    <h1 className="text-uppercase text-center text-md-start">About Us</h1>
                    <p className="col-md-9 col-12 text-center text-md-start">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                        lacus vel facilisis.
                    </p>
                    <div className="text-center text-md-start">
                        <button type="button" className="btn btn-secondary ps-4 pe-4 rounded-0">
                            Read more
                        </button>
                    </div>
                </div>
            </section>
            <section className="p-5">
                <h1 className="text-uppercase text-center">Our work</h1>
                <p className="text-center col-md-5 col-12 me-auto ms-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                    facilisis.
                </p>
                <div className="col-md-10 col-12 ms-auto me-auto">
                    <img src="/img/our-work-img.jpg" className="w-100"/>
                </div>
                <div className="text-center mt-4">
                    <button type="button" className="btn btn-secondary ps-4 pe-4 rounded-0">
                        Read more
                    </button>
                </div>
            </section>
        </>
    )
}

export default aboutUs;