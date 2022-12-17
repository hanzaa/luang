import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

//mengambil link API backend dari environement variable
const base_url = process.env.REACT_APP_URL_BACKEND


const Pesanan = () => {

    const [pesan, setPesan] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.post(`${base_url}/getpesan`,{
            userid: 10
        })  
        .then((res) => {
            console.log(res)
            setPesan(res.data)
            setLoading(false)
           
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return ( <>
    <NavBar/>
    {loading && "loading..."}
    <div className="container">
        <h1 className="fw-bold mt-5 pt-5" style={{fontSize:"24px"}}>Daftar Pesanan</h1>
    </div>


    <div className=" container d-flex justify-content-center align-items-center my-5 ">

        <table class= "table table-striped border" >
            <thead style={{tableLayout:'fixed',textOverflow:'inherit'}}>
                <tr>
                    <th>Pesanan ID</th>
                    <th>Produk </th>
                    <th>Jumlah Pesanan</th>
                    <th>Upload Bukti Pembayaran</th>
                    <th>Total</th>
                    <th>File</th>
                    <th>Status</th>

                    
                </tr> 
            </thead> 
            <tbody>
            {!!pesan 
            ?
            pesan.map((pesan)=>{
                return(
                <tr>
                    <td>{pesan.pesananid}</td>
                    <td>{pesan.product}</td>
                    <td>{pesan.jumlah}</td>
                    <td>{pesan.foto_bukti_pembayaran}</td>
                    <td>Rp{pesan.total_harga}</td>
                    <td>{pesan.file_kerja}</td>
                    <td>Menunggu Pembayaran</td>
                </tr>
                )
            })
            :<h1>data not found</h1>}   
            </tbody>

        </table>
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
 
export default Pesanan;