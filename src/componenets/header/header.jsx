import './header.css'

function header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a
                        className="navbar-brand text-uppercase text-white fs-4 me-5" href={'/'}>
                        naturehomedec
                    </a
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
                                <a href="/#contact" className="nav-link text-light ms-2">CONTACT</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#aboutUs" className="nav-link text-light ms-2">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#materials" className="nav-link text-light ms-2">MATERIALS</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href={'/'}
                                    className="nav-link text-light ms-2"
                                >STORE</a
                                >
                            </li>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="modal"
                                data-bs-target="#shopingitems"
                            >
                                Cart
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default header;