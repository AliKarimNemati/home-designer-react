import './footer.css'
import {useRef as UseRef, useState as UseState} from "react";

function footer() {
    const [errors, setErrors] = UseState({});
    const [successMessage, setSuccessMessage] = UseState('');

    const email = UseRef(null)
    const name = UseRef(null)
    const message = UseRef(null)
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
                        <form className="text-center" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email address"
                                    ref={email}
                                />
                                <p className="text-danger">{errors.email}</p>

                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Name"
                                    ref={name}
                                />
                                <p className="text-danger">{errors.name}</p>

                            </div>
                            <div className="mb-3">
                                <textarea
                                    rows="8"
                                    className="w-100 p-2 form-control"
                                    placeholder="Your Message"
                                    ref={message}
                                ></textarea>
                                <p className="text-danger">{errors.message}</p>

                            </div>
                            <button type="submit" className="btn btn-secondary ps-4 pe-4 rounded-0">
                                Send
                            </button>
                            <p className="text-info">{successMessage}</p>

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


    function handleSubmit(e) {
        e.preventDefault()
        let error = {
            name: nameValidation(name.current.value),
            email: emailValidation(email.current.value),
            message: messageValidation(message.current.value)
        }
        setErrors(error)

        if (nameValidation(name.current.value) == null && emailValidation(email.current.value) == null && messageValidation(message.current.value) == null) {
            setSuccessMessage('Send your message successfully')
            setInterval(() => {
                setSuccessMessage('')
            }, 2000)

            name.current.value = ''
            email.current.value = ''
            message.current.value = ''

        } else {
            setSuccessMessage('')
        }
    }

    function emailValidation(email) {
        if (email == '')
            return 'Email is required'
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            return 'Email is Not Valid'
        return null

    }

    function nameValidation(name) {
        if (name.length == '')
            return 'Name is required'
        else if (name.length < 5)
            return "Name must have at least 5 characters"
        return null
    }

    function messageValidation(name) {
        if (name.length == '')
            return 'Message is required'
        else if (name.length < 10)
            return "Message must have at least 10 characters"
        return null
    }
}

export default footer;