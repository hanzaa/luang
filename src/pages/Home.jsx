import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

//mengambil link API backend dari environement variable
const base_url = process.env.REACT_APP_URL_BACKEND;


const Home = () => {

  useEffect(()=>{
    const token=localStorage.getItem('token')
    const verify = async() =>{
        try {
          const response = await axios.post(`${base_url}/verify`, {
          token: token
          })
          if(response.status === 200){
            // eslint-disable-next-line
            null
          }else{
            navigate('/')
          }
        } catch (error) {
          console.log(error)
          navigate('/')
        }
        }
        
        if(token){
            verify()
        }else{
          navigate('/')
        }  
// eslint-disable-next-line
}, [])

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [categories, setCategories] =useState([])

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
          style={{ ...style, display: "block", color: "green"}}
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
  }

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

  useEffect(() => {
    setLoading(true)
    axios.get(`${base_url}/getcategory`)  
    .then((res) => {
        console.log(res)
        setCategories(res.data)
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
      <div className="row py-5 ">
          <div className="col-2 me-4 p-4 d-flex align-items-center" style={{background:"#D9D9D9"}}>
            <div className="row">
              <div className="row">
                <h1 className='fw-bold' style={{fontSize:"34px"}}>Hi {localStorage.getItem('username')}</h1>
              </div>
              <div className="row">
                <h5 className='fw-medium' style={{fontSize:"16px"}}>Cari penjual yang cocok untukmu</h5>
              </div>
              <div className="row">
                <button type="button" className="btn btn-secondary mt-4" 
                style={{fontSize:"16px"}} onClick={()=>{navigate('/category')}}>Explore Products</button>
              </div>
            </div>
          </div>
          <div className="col-9 ms-5" style={{border:"solid black 1px", borderRadius:"8px"}}>
            <div className="row" >
              {loading && "Loading..."}
              <Slider {...settings} 
                dots={false} 
                slidesToShow={1} 
                slidesToScroll={1} 
                arrows={false} 
                autoplay={true} 
                autoplaySpeed={3000}
                infinite={true}>
                {!!categories && categories.length>0
                ? categories.map((category)=>{
                  return(
                    <div key={category.categoryid}>
                      <div class="carousel-item carousel-item:before d-flex align-items-center" >
                        <img src= {category.image_category} alt="category" class="d-block w-100 opacity-75" style={{background:"black"}}/>
                        <div class="carousel-caption d-none d-md-block mb-5" >
                          <h1 className='pt-4 ps-4 fw-bold mb-5 ' style={{fontSize:"6rem",textShadow:"2px 2px 2px black"}}>{category.category}</h1>
                          <h1 className='mb-4' style={{fontSize:"1px"}}>.</h1>
                        </div>
                      </div>
                    </div>
                  
                  )})
                : null
                }
              </Slider>
            </div>
          </div>
      </div>
      
      <div className="row" style={{border:"solid black 1px", borderRadius:"8px"}}>
          <h3 className='p-4 fw-bold' style={{fontSize:"30px"}}>Rekomendasi untukmu</h3>
          {loading && "Loading..."}
          <div className='p-5'>
          <Slider {...settings}>
              {!!data && data.length > 0 
              ? data.map((product) => {
                  return(
                  <div key={product.id}>
                      <div className="card"  onClick={()=>{navigate(`/product/${product.id}`)}}>
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
  </div>

  <Footer/>
  </> )
}
 
export default Home;