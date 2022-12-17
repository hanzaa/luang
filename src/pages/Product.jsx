import { useState,useEffect } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

import './Product.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PopPesan from "../components/PopPesan";

//mengambil link API backend dari environement variable
const base_url = process.env.REACT_APP_URL_BACKEND;

const Product = () => {

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

    const [biasa,setBiasa] = useState(true)
    const [spesial,setSpesial] = useState(false)
    const [ekstrim,setEkstrim] = useState(false)
    const [popPesan, setPopPesan] = useState(false)

    const [loading, setLoading] = useState(false)
    const [data,setData] = useState([])
    const [img,setImg] = useState([])

    const [product,setProduct] = useState([])
    

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
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)  
        .then((res) => {
            console.log(res.data)
            setData(res.data)
            setImg(res.data.images)
            setLoading(false)
           
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])

    useEffect(() => {
        setLoading(true)
        axios.get(`${base_url}/getproduct`,{
            id:id
        })  
        .then((res) => {
            console.log(...res.data)
            setProduct(res.data)
           
            setLoading(false)
           
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])

    return ( <>
    <NavBar/>
    {loading && "Loading..."}
    {!!product  
    ? 
    product.map((product) => {
        return(
        <>
        <div className="container">
            <div className="row">
                <h3 className="fw-bold mt-5 pt-5" style={{fontSize:"24px"}}>{product.product}</h3>
            </div>
            <div className="row d-flex align-items-center py-5">
                <div className="col-1 ">
                <img src={product.foto} width="50rem"  className="rounded-circle" alt='...'></img>
                </div>
                <div className="col-11 ps-0">
                    <h5 className="fw-medium mb-0 p-0" style={{fontSize:"16px"}}>{product.nama_lengkap}</h5>
                </div>
            </div>

            <div className="row">
                <div className="col-8">
                    <div className="carousel-inner" >
                            <div className="carousel-item active" >
                                <img src = {product.image} className="d-block w-100" alt="..." height="600vh"/>
                            </div>
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
                        <h3 className="fw-bold" style={{fontSize:"36px"}}>Rp{product.harga_biasa}</h3>
                    </div>
                    <div className="row my-5">
                        <div className="container ">
                            <h3 className="fw-semibold" style={{fontSize:"20px"}}>Waktu Pengerjaan : {product.waktu_biasa}</h3>
                            <h3 className="fw-semibold" style={{fontSize:"20px"}}>Revisi : {product.revisi_biasa} X</h3>
                        </div>
                    </div>
                    </>
                    :null}

                    {spesial?
                    <>
                    <div className="row my-5 mx-1">
                        <h3 className="fw-bold" style={{fontSize:"36px"}}>Rp{product.harga_spesial}</h3>
                    </div>
                    <div className="row my-5">
                        <div className="container ">
                            <h3 className="fw-semibold" style={{fontSize:"20px"}}>Waktu Pengerjaan : {product.waktu_spesial}</h3>
                            <h3 className="fw-semibold" style={{fontSize:"20px"}}>Revisi : {product.revisi_spesial} X</h3>
                        </div>
                    </div>
                    </>
                    :null}

                    {ekstrim?
                    <>
                    <div className="row my-5 mx-1">
                        <h3 className="fw-bold" style={{fontSize:"36px"}}>Rp{product.harga_ekstrim}</h3>
                    </div>
                    <div className="row my-5">
                        <div className="container ">
                            <h3 className="fw-semibold" style={{fontSize:"20px"}}>Waktu Pengerjaan : {product.waktu_ekstrim}</h3>
                            <h3 className="fw-semibold" style={{fontSize:"20px"}}>Revisi : {product.revisi_ekstrim}X</h3>
                        </div>
                    </div>
                    </>
                    :null}

                    <div className="row px-3">
                        <button type="button" className="btn btn-secondary fw-bold" 
                        style={{letterSpacing:"1px", fontSize:"24px"}} onClick={()=>{setPopPesan(true)}}>Lanjut</button>
                    </div>

                    {popPesan
                    ? 
                    <>
                    {biasa && <PopPesan popPesan={setPopPesan} price={product.harga_biasa} type="biasa"/>}
                    {spesial && <PopPesan popPesan={setPopPesan} price={product.harga_spesial} type="spesial"/>}
                    {ekstrim && <PopPesan popPesan={setPopPesan} price={product.harga_ekstrim} type="ekstrim"/>}
                    </>
                    :null
                    }
                    

                </div>
            </div>

            <div className="row">
                <h3 className="fw-bold mt-5" style={{fontSize:"24px"}}>Tentang Penawaran</h3>
            </div>
            <div className="row">
                <p style={{fontSize:"18px"}}>{product.deskripsi}</p>
            </div>
            <div className="row">
                <h3 className="fw-bold mt-5" style={{fontSize:"24px"}}>Tentang Penjual</h3>
            </div>
            <div className="row d-flex align-items-center py-2 my-4">
                <div className="col-1 pe-0">
                <img src={product.foto} width="80rem"  className="rounded-circle" alt='...'></img>
                </div>
                <div className="col-11">
                    <h5 className="fw-medium ms-3 mb-0 p-0" style={{fontSize:"24px"}}>{product.nama_lengkap}</h5>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-8">
                    <div className="row p-3" style={{border:"solid black 1px", borderRadius:"8px"}}>
                        <div className="row mt-3">
                            <div className="col-12">
                                <p className='fw-normal' style={{fontSize:"18px"}}>{product.deskripsi_profile}</p>
                            </div> 
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
        )
    })
    : (<p>API did not provided any product, try again.</p>)    
    } 
    <Footer/>
    </> );
}
 
export default Product;