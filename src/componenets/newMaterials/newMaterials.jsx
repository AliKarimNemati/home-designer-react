import './newMaterials.css'

function newMaterials() {
    return(
        <>
            <section className="d-flex flex-wrap p-5 justify-content-md-between justify-content-center" id="materials">
                <div className="col-md-5 col-12">
                    <h1 className="text-uppercase text-center text-md-start">New recyclable materials</h1>
                    <p className="w-75 text-center text-md-start me-auto ms-auto m-md-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                        lacus vel facilisis.
                    </p>
                    <div className="text-center text-md-start">
                        <button type="button" className="btn btn-secondary ps-4 pe-4 mt-3 rounded-0 ">
                            Read more
                        </button>
                    </div>
                </div>
                <div className="col-md-3 col-12 align-self-end mt-4 mt-md-0">
                    <img src="/img/calm-chair.jpg" className="w-100 rounded-circle"/>
                </div>
                <div className="col-md-3 col-12 mt-4 mt-md-0">
                    <img src="/img/main-img.jpg" className="w-100 main-img"/>
                </div>
            </section>
        </>
    )
}

export default newMaterials;