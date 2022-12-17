import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

//mengambil link API backend dari environement variable
const base_url = process.env.REACT_APP_URL_BACKEND;

const Category = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const verify = async () => {
            try {
                const response = await axios.post(`${base_url}/verify`, {
                    token: token
                })
                if (response.status === 200) {
                    null
                } else {
                    navigate('/')
                }
            } catch (error) {
                console.log(error)
                navigate('/')
            }
        }

        if (token) {
            verify()
        } else {
            navigate('/')
        }
        // eslint-disable-next-line
    }, [])

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
    }
    
    const [categories, setCategories] =useState([])
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

    const [data, setData] = useState([])
    useEffect(() => {
      setLoading(true)
      axios.get(`https://api.escuelajs.co/api/v1/products?offset=12&limit=24`)  
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
        <NavBar/>
        {loading && "Loading..."}
        <div className="container">
            <div className="row">
                <h3 className="fw-bold mt-5" style={{fontSize:"48px"}}>Our Products</h3>
            </div>
        </div>
        {!!categories && categories.length>0
        ? categories.map((category)=>{
            return(
                <div key={category.categoryid} className="container bg-danger m-5" style={{border:"solid black 1px", borderRadius:"8px"}}>
                    <div className="row" >
                        <h1 className="text-white fw-bold mt-4 ms-4">{category.category}</h1>
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
                
            )})
        :null
        }
        <Footer/>
    </> );
}
 
export default Category;