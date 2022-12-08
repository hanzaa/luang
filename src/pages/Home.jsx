import './Home.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




const Home = (props) => {
    return ( <>
    <div className="home"></div>
    <NavBar isLogin={props.isLogin}/>
    <div className="container pb-5">
        <div className="row py-5">
            <div className="col-2 me-4 p-4 " style={{background:"#D9D9D9"}}>
                <h1 className='fw-bold' style={{fontSize:"24px"}}>Hi Fais</h1>
                <h5 className='fw-medium' style={{fontSize:"11px"}}>Cari penjual yang cocok untukmu</h5>
                <button type="button" className="btn btn-secondary" style={{fontSize:"11px"}}>Buat Penawaran</button>
            </div>
            <div className="col-9 bg-danger ">
                <h3 className='p-3 ps-5 text-white fw-normal' style={{fontSize:"20px"}}>Judul Proyek</h3>
                <h5 className='p-1 ps-5 text-white fw-normal' style={{fontSize:"14px"}}>Carousel tentang project apa aja yang direkonendasi</h5>
            </div>
        </div>
        <div className="row" style={{border:"solid black 1px", borderRadius:"8px"}}>
            <h3 className='p-4 fw-normal' style={{fontSize:"20px"}}>Rekomendasi untukmu</h3>
            <div className="py-3">
                <OwlCarousel className='owl-theme' loop margin={10} nav>
                    <div className="item ">
                        <div className="card">
                            <img src={require("../assets/desainLogo.png")} className="d-block w-100" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">Desain Logo</h5>
                                <p className="card-text">Buat Logo khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img src={require("../assets/voiceActor.png")} className="d-block w-100" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">Voice Actor</h5>
                                <p className="card-text">Buat suara video khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img src={require("../assets/fotografi.png")} className="d-block w-100" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">Fotografi</h5>
                                <p className="card-text">Buat Foto khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img src={require("../assets/mediaSosial.png")} className="d-block w-100" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">Kreatif Sosial Media</h5>
                                <p className="card-text">Buat konten sosmed khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                            </div>
                        </div>
                    </div>
                    <div className="item ">
                        <div className="card">
                            <img src={require("../assets/desainLogo.png")} className="d-block w-100" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">Desain Logo</h5>
                                <p className="card-text">Buat Logo khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img src={require("../assets/voiceActor.png")} className="d-block w-100" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">Voice Actor</h5>
                                <p className="card-text">Buat suara video khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img src={require("../assets/fotografi.png")} className="d-block w-100" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">Fotografi</h5>
                                <p className="card-text">Buat Foto khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img src={require("../assets/mediaSosial.png")} className="d-block w-100" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">Kreatif Sosial Media</h5>
                                <p className="card-text">Buat konten sosmed khusus untuk dirimu berdasarkan pekerjaan para profesional</p>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    </div>
    <div className="container-fluid footer">
        <div className="container">
            <div className="row pb-5">
                <div className="col">
                    <h5>Kategori</h5>
                    <h3>Grafis & Desain</h3>
                    <h3>Digital Marketing</h3>
                    <h3>Video & Animasi</h3>
                    <h3>Musik & Audio</h3>
                    <h3>Programming & Teknologi</h3>
                    <h3>Data</h3>
                    <h3>Bisnis</h3>
                    <h3>Fotografi</h3>
                </div>
                <div className="col">
                    <h5>Tentang</h5>
                    <h3>Kebijakan Privasi</h3>
                    <h3>Terms of Service</h3>
                </div>
                <div className="col">
                    <h5>Dukungan</h5>
                    <h3>Bantuan & Dukungan</h3>
                    <h3>Kepercayaan & Keamanan</h3>
                </div>
                <div className="col">
                    <h5>Komunitas</h5>
                    <h3>Event</h3>
                    <h3>Forum</h3>
                </div>
            </div>
        </div>
        <Footer/>


    </div>

    </> )
}
 
export default Home;