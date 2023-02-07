import './contactUs.css'
function contactUs() {
    return(
        <>
            <section className="p-5" id="contact">
                <h1 className="text-uppercase text-center">CONTACT</h1>
                <p className="text-center col-md-6 col-12 me-auto ms-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                    facilisis.
                </p>
                <form className="text-center col-md-6 col-12 me-auto ms-auto">
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email address"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <textarea rows="8" className="w-100 p-2 form-control" placeholder="Your Message"
                                  required></textarea>
                    </div>
                    <button type="submit" className="btn btn-secondary ps-4 pe-4 rounded-0">Send</button>
                </form>
            </section>
        </>
    )
}

export default contactUs