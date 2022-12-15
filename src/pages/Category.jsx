import { useState,useEffect } from "react"
import axios from "axios"

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

//mengambil link API backend dari environement variable
const base_url = process.env.REACT_APP_URL_BACKEND;

const Category = () => {
    const [categories, setCategories] =useState([])
    const [loading, setLoading] = useState(false)

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
                        <h1>{category.category}</h1>
                        <div className='p-5'>
                            <Slider {...settings } dots={false} slidesToScroll={3} slidesToShow={3}>
                            <h1>1</h1>
                            <h1>2</h1>
                            <h1>3</h1>
                            <h1>4</h1>
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