import './home.css'
import OurProducts from "../ourProducts/ourProducts";
import AboutUs from "../aboutUs/aboutUs";
import NewMaterials from "../newMaterials/newMaterials";
import ContactUs from "../contactUs/contactUs";

function home() {
    return (
        <>
            <div className="d-flex flex-wrap p-5 mt-5 ps-md-0">
                <div className="col-md-6 col-12 text-center">
                    <img src="/img/main-img.jpg" className="main-img w-75"/>
                </div>
                <div className="col-md-6 col-12 mt-md-0 mt-4">
                    <p className="des text-uppercase text-center">new catalog</p>
                    <h1 className="text-uppercase text-center">natural home decor</h1>
                    <p className="des text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                        lacus vel facilisis.
                    </p>
                    <div className="text-center">
                        <button
                            type="button"
                            className="btn btn-secondary ps-4 pe-4 rounded-0 text-center"
                        >
                            Read more
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <img src="/img/planet.jpg" className="rounded-circle w-50"/>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-wrap p-5">
                <div className="col-md-6 col-12 pe-md-5 ps-md-3 align-self-center text-center text-md-start">
                    <h1 className="text-uppercase">Download our new catalog</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                        lacus vel facilisis.</p>
                    <div>
                        <button type="button" className="btn btn-secondary ps-4 pe-4 rounded-0">Download Now</button>
                    </div>
                </div>
                <div className="col-md-6 col-12 mt-5 mt-md-0">
                    <img src="/img/catalog.jpg" className="w-100 rounded"/>
                </div>
            </div>
            <OurProducts/>
            <AboutUs/>
            <NewMaterials/>
            <ContactUs/>
        </>
    )
}

export default home;