import './contactUs.css'
import {useRef as UseRef, useState as UseState} from "react";

function contactUs() {
    const [errors, setErrors] = UseState({});
    const [successMessage, setSuccessMessage] = UseState('');

    const email = UseRef(null)
    const name = UseRef(null)
    const message = UseRef(null)


    return (
        <>
            <section className="p-5" id="contact">
                <h1 className="text-uppercase text-center">CONTACT</h1>
                <p className="text-center col-md-6 col-12 me-auto ms-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                    facilisis.
                </p>
                <form className="text-center col-md-6 col-12 me-auto ms-auto" onSubmit={handleSubmit}>

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
                        <textarea rows="8" className="w-100 p-2 form-control" placeholder="Your Message"
                            ref={message}
                        >
                        </textarea>
                        <p className="text-danger">{errors.message}</p>
                    </div>
                    <p className="text-info">{successMessage}</p>
                    <button type="submit" className="btn btn-secondary ps-4 pe-4 rounded-0">Send</button>
                </form>
            </section>
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
            setInterval(()=> {
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

export default contactUs