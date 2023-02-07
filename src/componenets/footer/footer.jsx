import './footer.css'

function footer() {
    return (
        <>
            <footer className="bg-dark p-5">
                <a className="navbar-brand text-uppercase text-white fs-4" href={'/'}>
                    naturehomedec
                    <i className="bi bi-house"></i>
                </a>
                <div className="d-flex flex-wrap justify-content-around border-bottom pb-5">
                    <div className="col-md-4 col-12 mt-5">
                        <h3 className="text-uppercase text-light">CONTACT</h3>
                        <form className="text-center">
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
            <textarea
                rows="8"
                className="w-100 p-2 form-control"
                placeholder="Your Message"
                required
            ></textarea>
                            </div>
                            <button type="submit" className="btn btn-secondary ps-4 pe-4 rounded-0">
                                Send
                            </button>
                        </form>
                    </div>
                    <div className="col-md-4 col-12 mt-5">
                        <ul className="navbar-nav ms-auto me-1 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="/#contact" className="nav-link text-light ms-2">CONTACT</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#aboutUs" className="nav-link text-light ms-2">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#materials" className="nav-link text-light ms-2">MATERIALS</a>
                            </li>
                            <li className="nav-item">
                                <a href={'/'} className="nav-link text-light ms-2">STORE</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-5 d-flex justify-content-between">
                    <p className="text-light text-uppercase">CopyRight | naturehomedec</p>
                    <div>
                        <i className="bi bi-facebook text-light fs-3 ps-3"></i>
                        <i className="bi bi-whatsapp text-light fs-3 ps-3"></i>
                        <i className="bi bi-telegram text-light fs-3 ps-3"></i>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default footer;