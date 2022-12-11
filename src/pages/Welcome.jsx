import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Welcome.css';
import SearcBar from '../components/SearchBar';
import NavBar0 from '../components/NavBar0';
import Footer from '../components/Footer';
import PopLogin from '../components/PopLogin';
import PopRegister from '../components/PopRegister';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

//mengambil link API backend dari environement variable
const base_url = process.env.REACT_APP_URL_BACKEND;


const Welcome = () => {
const [popLogin,setPopLogin] = useState(false);
const [popRegister,setPopRegister] = useState(false);
const [isLogin, setIsLogin] = useState(false);   
const navigate = useNavigate()

const [loading, setLoading] = useState(false)
const [data, setData] = useState(null)

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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

    
useEffect(()=>{
    const token=localStorage.getItem('token')
    const verify = async() =>{
        try {
            const response = await axios.post(`${base_url}/verify`, {
            token: token
            })
            if(response.status === 200){
            setIsLogin(true)
            navigate('/home')
        }
        
    } catch (error) {
        console.log(error)
        }
    }
    
    if(token){
        verify()
    }  
    
// eslint-disable-next-line
}, [isLogin])



return (
    <>
    <div className='welcomee'></div>
    <NavBar0 popLogin={setPopLogin} popRegister={setPopRegister}/>
    {popLogin && <PopLogin popLogin={setPopLogin} popRegister={setPopRegister} isLogin={setIsLogin}/>}
    {popRegister && <PopRegister popLogin={setPopLogin} popRegister={setPopRegister}/>}
    <div className="container">
        <div className='row welcome '>
            <div className='col'>
                <div className="row slogan">
                    <h3 >Ubah waktu <span style={{color:'rgba(141, 52, 255, 1)', fontStyle:'italic'}}>luang</span> menjadi <span style={{color:'rgba(255, 0, 0, 1)'}}>uang</span></h3>
                    <h5>Temukan layanan yang sesuai dengan keperluanmu</h5>
                </div>
                <div className="row">
                    <SearcBar />
                </div>
                
            </div>

            <div className="col d-none d-lg-block">
                <img className='absolute gembok' src={require("../assets/gembok.png")} alt="" />
                <img className='absolute qr' src={require("../assets/qr.png")} alt="" />
                <img className='absolute code' src={require("../assets/code.png")} alt="" />
                <img className='absolute coin' src={require("../assets/coin.png")} alt="" />
                <img className='absolute play' src={require("../assets/play.png")} alt="" />
                <img className='absolute eth' src={require("../assets/eth.png")} alt="" />
            </div>
        </div>
        
    </div>

    <div className="container-fluid populer">
        <div className="container py-5">
            <h1 className='fw-semibold pb-5' style={{fontSize:"41px"}}>Layanan Populer</h1>
            {loading && "Loading..."}

            <Slider {...settings}>
                {!!data && data.length > 0 
                ? data.map((product) => {
                    return(
                    <div key={product.id}>
                        <div className="card">
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

    <div className="container-fluid keynote">
        <div className="container">
            <div className="row p-1 py-5">
                <h3>Memepertemukan berbagai <span style={{color:'rgba(141, 52, 255, 1)'}}>talenta</span></h3>
                <h3>lokal hanya dengan <span style={{color:'rgba(255, 0, 0, 1)'}}>sentuhan jari</span></h3>
            </div>

            <div className="row pb-5">
                <div className="col ">
                    <h5 style={{display:'block'}}><img src={require('../assets/checkRing.png')} alt=".." width="24px" 
                    style={{display:'inline'}}/> Layanan <span style={{color:'rgba(141, 52, 255, 1)'}}>24 jam</span></h5>
                    <p>Ada pertanyaan?  tim support siklis kami  tersedia dari mana saja dan kapan saja.</p>

                    <h5 style={{display:'block'}}><img src={require('../assets/checkRing.png')} alt=".." width="24px" 
                    style={{display:'inline'}}/> Kesepakatan kerja yang <span style={{color:'rgba(141, 52, 255, 1)'}}>cepat</span></h5>
                    <p>Temukan pekerja tepat yang dapat mengerjakan projekmu dengan cepat.</p>
                    
                    <h5 style={{display:'block'}}><img src={require('../assets/checkRing.png')} alt=".." width="24px" 
                    style={{display:'inline'}}/> Sesuaikan dengan <span style={{color:'rgba(141, 52, 255, 1)'}}>dana</span><span style={{color:'rgba(255, 0, 0, 1)'}}>mu</span></h5>
                    <p>Temukan harga yang sesuai dengan kualitas yang maksimal dengan skema harga proyek</p>
                </div>
                <div className="col-md ms-md-5">
                    <img src={require('../assets/teamWork.png')} alt=".." width='100%' ></img>
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

    </>
    
    )
}
 
export default Welcome;
