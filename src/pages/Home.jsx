import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Home = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const navigate = useNavigate()

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
          />
        );
    }
      
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "transparent"}}
            onClick={onClick}
          />
        );
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    useEffect(() => {
        setLoading(true)
        axios.get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=12`)  
        .then((res) => {
            console.log(res)
            setData(res.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return ( <>
    <div className="home"></div>
    <NavBar/>
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
            {loading && "Loading..."}
            <Slider {...settings}>
                {!!data && data.length > 0 
                ? data.map((product) => {
                    return(
                    <div key={product.id} >
                        <div className="card" onClick={()=>{navigate(`/product/${product.id}`)}}>
                            <img src={product.images[0]} className="d-block w-100" alt="product"/>
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                        </div>
                    </div>
                    )   
                    })
                : (<p>API did not provided any product, try again.</p>)    
                } 
            </Slider>
            
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