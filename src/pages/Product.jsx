import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import './Product.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PopPesan from "../components/PopPesan";

const Product = () => {
    const [biasa,setBiasa] = useState(true)
    const [spesial,setSpesial] = useState(false)
    const [ekstrim,setEkstrim] = useState(false)
    const [popPesan, setPopPesan] = useState(false)

    const [loading, setLoading] = useState(false)
    const [data,setData] = useState([])
    const [img,setImg] = useState([])
    

    //get paramenter from url
    const {id} = useParams()

    const clickbiasa = () =>{
        setBiasa(true) 
        setSpesial(false) 
        setEkstrim(false)
    }

    const clickspesial = () =>{
        setSpesial(true)
        setBiasa(false)
        setEkstrim(false)
    }

    const clickekstrim = () =>{
        setEkstrim(true)
        setBiasa(false)
        setSpesial(false)
    }

    useEffect(() => {
        setLoading(true)
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}2`)  
        .then((res) => {
            console.log(res.data.images)
            setData(res.data)
            setImg(res.data.images)
            setLoading(false)
           
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])

    return ( <>
    <NavBar/>
    <div className="container">
        <div className="row">
             <h3 className="fw-bold mt-5 pt-5" style={{fontSize:"24px"}}>{data.title}</h3>
        </div>
        <div className="row d-flex align-items-center py-5">
            <div className="col-1 ">
            <img src={require("../assets/pp.jpg")} width="50rem"  className="rounded-circle" alt='...'></img>
            </div>
            <div className="col-11 ps-0">
                <h5 className="fw-medium mb-0 p-0" style={{fontSize:"16px"}}>M. Farhan Zachary</h5>
            </div>
        </div>

        <div className="row">
            <div className="col-8">
                <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                            {loading && "Loading..."}
                            {!!data  
                            ? 
                            <div className="carousel-inner" >
                                {img.map((img,index) => {
                                    return(
                                    <div className="carousel-item active" key={index}>
                                        <img src = {img} className="d-block w-100" alt="..." height="600vh"/>
                                    </div>
                                    )
                                })}
                            </div>
                               
                            : (<p>API did not provided any product, try again.</p>)    
                            } 
                        
                           
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                </div>
            </div>
            <div className="col-4" style={{border:"solid black 1px",borderRadius:"8px"}}>
                <div className="row">
                    <div className="col-4">
                        <button type="button" className={`btn btn-under p-3 pb-0 ${biasa?"btn-on":""}`} 
                        style={{fontSize:"20px"}} onClick={()=>clickbiasa()}>biasa</button>
                    </div>
                    <div className="col-4">
                        <button type="button" className={`btn btn-under p-3 pb-0 ${spesial?"btn-on":null}`} 
                        style={{fontSize:"20px"}} onClick={()=>clickspesial()}>spesial</button>
                    </div>
                    <div className="col-4">
                        <button type="button" className={`btn btn-under p-3 pb-0 ${ekstrim?"btn-on":null}`} 
                        style={{fontSize:"20px"}} onClick={()=>clickekstrim()}>ekstrim</button>
                    </div>
                    
                </div>

                {biasa?
                <>
                <div className="row my-5 mx-1">
                    <h3 className="fw-bold" style={{fontSize:"36px"}}>Rp{data.price}</h3>
                </div>
                <div className="row my-5">
                    <div className="container ">
                        <h3 className="fw-semibold" style={{fontSize:"20px"}}>Waktu Pengerjaan : 7 hari</h3>
                        <h3 className="fw-semibold" style={{fontSize:"20px"}}>Revisi : 0 X</h3>
                        <h3 className="fw-semibold mt-5" style={{fontSize:"20px"}}>Produk</h3>
                        <ul style={{listStyleType:"circle",fontSize:"18px"}}>
                            <li>1 konsep awal</li>
                            <li>1 logo</li>
                            <li>1 file original</li>
                        </ul>
                    </div>
                </div>
                </>
                :null}

                {spesial?
                <>
                <div className="row my-5 mx-1">
                    <h3 className="fw-bold" style={{fontSize:"36px"}}>Rp50.000,00-</h3>
                </div>
                <div className="row my-5">
                    <div className="container ">
                        <h3 className="fw-semibold" style={{fontSize:"20px"}}>Waktu Pengerjaan : 3 hari</h3>
                        <h3 className="fw-semibold" style={{fontSize:"20px"}}>Revisi : 1 X</h3>
                        <h3 className="fw-semibold mt-5" style={{fontSize:"20px"}}>Produk</h3>
                        <ul style={{listStyleType:"circle",fontSize:"18px"}}>
                            <li>1 konsep awal</li>
                            <li>1 logo</li>
                            <li>1 file original</li>
                        </ul>
                    </div>
                </div>
                </>
                :null}

                {ekstrim?
                <>
                <div className="row my-5 mx-1">
                    <h3 className="fw-bold" style={{fontSize:"36px"}}>Rp100.000,00-</h3>
                </div>
                <div className="row my-5">
                    <div className="container ">
                        <h3 className="fw-semibold" style={{fontSize:"20px"}}>Waktu Pengerjaan : 1 hari</h3>
                        <h3 className="fw-semibold" style={{fontSize:"20px"}}>Revisi : 2X</h3>
                        <h3 className="fw-semibold mt-5" style={{fontSize:"20px"}}>Produk</h3>
                        <ul style={{listStyleType:"circle",fontSize:"18px"}}>
                            <li>1 konsep awal</li>
                            <li>1 logo</li>
                            <li>1 file original</li>
                        </ul>
                    </div>
                </div>
                </>
                :null}

                <div className="row px-3">
                    <button type="button" className="btn btn-secondary fw-bold" 
                    style={{letterSpacing:"1px", fontSize:"24px"}} onClick={()=>{setPopPesan(true)}}>Lanjut</button>
                </div>

                {popPesan && <PopPesan popPesan={setPopPesan} price={data.price}/> }
                

            </div>
        </div>

        <div className="row">
             <h3 className="fw-bold mt-5" style={{fontSize:"24px"}}>Tentang Penawaran</h3>
        </div>
        <div className="row">
            <p style={{fontSize:"18px"}}>{data.description}</p>
        </div>
        <div className="row">
             <h3 className="fw-bold mt-5" style={{fontSize:"24px"}}>Tentang Penjual</h3>
        </div>
        <div className="row d-flex align-items-center py-2 my-4">
            <div className="col-1 pe-0">
            <img src={require("../assets/pp.jpg")} width="80rem"  className="rounded-circle" alt='...'></img>
            </div>
            <div className="col-11">
                <h5 className="fw-medium ms-3 mb-0 p-0" style={{fontSize:"24px"}}>M. Farhan Zachary</h5>
            </div>
        </div>
        <div className="row my-5">
            <div className="col-8">
                <div className="row p-3" style={{border:"solid black 1px", borderRadius:"8px"}}>
                    <div className="row">
                        <div className="col-4">
                            <div className="col fw-normal"  >
                                <h3 className="fw-normal" style={{fontSize:"20px"}}>Asal</h3>
                            </div>
                            <div className="col" >
                                <h3 className="fw-medium" style={{fontSize:"20px"}}>Jambi</h3>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="col fw-normal"  >
                                <h3 className="fw-normal" style={{fontSize:"20px"}}>Bergabung Pada</h3>
                            </div>
                            <div className="col" >
                                <h3 className="fw-medium" style={{fontSize:"20px"}}>2 November 2022</h3>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="col fw-normal"  >
                                <h3 className="fw-normal" style={{fontSize:"20px"}}>Pesanan Terakhir</h3>
                            </div>
                            <div className="col" >
                                <h3 className="fw-medium" style={{fontSize:"20px"}}>22 November 2022</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <p className='fw-normal' style={{fontSize:"18px"}}>
                            Halo saya seorang seniman digital.saya pernah bekerja di bidang pendesainan 2D.silahkan pesan karya saya.
                            </p>
                        </div> 
                    </div>
                </div>

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
        </div>
    <Footer/>
    </> );
}
 
export default Product;