import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import PopOTP from "../components/PopOTP";

//mengambil link API backend dari environement variable
const base_url = process.env.REACT_APP_URL_BACKEND;

const Forget = () => {


    const navigate = useNavigate()

    const[emailInput, setEmailInput] = useState("")
    const handleEmailChange = (event) =>{
        setEmailInput(event.target.value)
    }

    const [popOTP, setPopOTP]=useState(false)
    const getOTP = () =>{
        setPopOTP(true)
        const email = emailInput
        axios.post(`${base_url}/otp`, {email: email})
    }
    const [OTPInput, setOTPInput]=useState("")
    const handleOTPChange = (event) =>{
        setOTPInput(event.target.value)
    }

    const handleSubmit = async()=>{

        if(emailInput===''){
            alert("Input your registered email!")
        }else if(OTPInput===''){
            alert("Input your OTP code first!")
        }else{
            try {
                //Melakukan Axios POST ke backend pada endpoint /lupa
                
                const response = await axios.post(`${base_url}/lupa`, {
                    token : OTPInput,
                })
                console.log(response)

                //menghapus data local storage lama
                localStorage.removeItem('id');
                localStorage.removeItem('username');
                localStorage.removeItem('email');
                localStorage.removeItem('token');
        
                // simpan data baru ke localStorage
                localStorage.setItem('id',response.data.userid)
                localStorage.setItem('username',response.data.username)
                localStorage.setItem('email',response.data.email)
                localStorage.setItem('token',response.data.token)

                navigate('/changepass')
      
                
              } catch (error) {
                // jika gagal, tampilkan alert 'Login Gagal'
                alert(error.response.data.error);
              }
        }
    }

    return (<>
    <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
            <Link className="navbar-brand" to='/'><span style={{color:'rgba(141, 52, 255, 1)'}}>L</span><span style={{color:'rgba(255, 0, 0, 1)'}}>uang</span> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto me-auto w-50">
                <SearchBar/>
            </div>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link className="nav-link active" to='/'>Eksplorasi</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/becomeseller'>Jadi Penjual</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/'>Masuk</Link>
                </li>        
            </ul>
            <form>
                <Link to="/">
                <button className="btn btn-sm btn-outline-secondary" type="button" style={{color:"#8D34FF",borderColor:"#8D34FF"}}>Daftar</button>
                </Link>
            </form>
            </div>
        </div>
    </nav>

    <div className="container">
        <h1 className="fw-bold my-5 pt-5" style={{fontSize:"36px"}}>Forget Password</h1>
    </div>

    <div className="container">
        <div className="row my-4">
            <div className="col-2">
                <h3 className="fw-600 m-0 p-0">Email</h3>
            </div>
            <div className="col-9">
                <input className="form-control" type="text" placeholder="example@gmail.com" value={emailInput} onChange={handleEmailChange}/>
            </div>
        </div>
        <div className="row my-4">
            <div className="col-2">
                <h3 className="fw-600 ">OTP</h3>
            </div>
            <div className="col-5">
               <input className="form-control" type="text" placeholder="input your otp code" value={OTPInput} onChange={handleOTPChange}/> 
            </div>
            <div className="col-2">
                <button type="btn" className="btn btn-outline-secondary ms-4" onClick={getOTP}>Get OTP Code</button>
                {popOTP && <PopOTP popOTP={setPopOTP}/>}
            </div>
        </div>
        <div className="row ">
            <div className="col-11 my-5">
                <button type="btn" className="btn btn-secondary" style={{width:"80%"}} onClick={handleSubmit} >Confirm</button> 
            </div>
        </div>
    </div>

    <Footer/>
    </>);
}
 
export default Forget;