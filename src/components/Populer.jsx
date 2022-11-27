import './Populer.css'
import { Link } from 'react-router-dom'
import { useEffect,useRef } from 'react';


const Populer = () => {
    const ref = useRef(null)

    useEffect(()=>{

        console.log('hello from useEffect')
        console.log(ref.current.width)
        console.log(ref.current.width)

    },[])


    return ( <> 
                <div className="container-fluid d-none d-md-block">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                        <div className="card">
                            <img src={require("../assets/desainLogo.png")} className="d-block w-100" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">Desain Logo</h5>
                                <p className="card-text">Buat Logo khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <img src={require("../assets/voiceActor.png")} className="d-block w-100" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title fw-semibold">Voice Actor</h5>
                                    <p className="card-text">Buat suara video khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                                
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <img src={require("../assets/fotografi.png")} className="d-block w-100" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title fw-semibold">Fotografi</h5>
                                    <p className="card-text">Buat Foto khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                                
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <img src={require("../assets/mediaSosial.png")} className="d-block w-100" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title fw-semibold">Kreatif Sosial Media</h5>
                                    <p className="card-text">Buat konten sosmed khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  
                <div id="carouselExampleControls" className="carousel slide d-block d-md-none" data-bs-ride="carousel">
                <div  className="carousel-inner">
                    <div ref ={ref} className="carousel-item active">
                        <div className="card">
                            <img src={require("../assets/desainLogo.png")} className="d-block w-100" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">Desain Logo</h5>
                                <p className="card-text">Buat Logo khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img src={require("../assets/voiceActor.png")} className="d-block w-100" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">Voice Actor</h5>
                                <p className="card-text">Buat suara video khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img src={require("../assets/fotografi.png")} className="d-block w-100" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">Fotografi</h5>
                                <p className="card-text">Buat Foto khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img src={require("../assets/mediaSosial.png")} className="d-block w-100" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">Kreatif Sosial Media</h5>
                                <p className="card-text">Buat konten sosmed khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </>
        );
}
 
export default Populer;