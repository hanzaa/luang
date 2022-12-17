import './PopLogin.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//mengambil link API backend dari environement variable
const base_url = process.env.REACT_APP_URL_BACKEND


const PopLogin = (props) => {

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        try {
          //Melakukan Axios POST ke backend pada endpoint /login
          
          const response = await axios.post(`${base_url}/login`, {
            email: data.get('email'),
            password: data.get('password')
          })

          console.log(response)
  
          // simpan 'token' dan 'user' ke localStorage
          localStorage.setItem('id',response.data.userid)
          localStorage.setItem('username',response.data.username)
          localStorage.setItem('email',response.data.email)
          localStorage.setItem('token',response.data.token)
          
          alert('Login Berhasil')
          

          // set isLogin true 
          props.isLogin(true) 
          props.popLogin(false)
          
        } catch (error) {
          // jika gagal, tampilkan alert 'Login Gagal'
          alert(error.response.data.error);
          console.log(error)
        }
      };
    

    return ( <>
    <div className="pop d-flex align-items-center justify-content-center">
        <div className="container login p-4 pt-3 m-5 ">
            <div className="btn btn-secondary btn-close ms-auto  d-flex align-items-center justify-content-center" 
            onClick={()=> props.popLogin(false)} style={{background:"#FF0000",color:"black"}}>x</div>
            
            <div className="row d-flex justify-content-center">
                <h3 className='fw-bold d-flex justify-content-center pt-5' style={{fontSize:"24px"}}>Masuk ke Luang</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 pt-5">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control w-100" id="email" name="email" label="email" aria-describedby="emailHelp" placeholder="masukan email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control w-100" name="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-secondary w-100 fw-bold" style={{fontSize:"22px"}}>lanjut</button>
                <span className='fw-light' style={{fontSize:"1px"}}>.</span>
                <span className='link-danger d-flex justify-content-center fw-light' onClick={()=>{navigate('/forget')}}>lupa password?</span>
                <p className='fw-light d-flex justify-content-center pt-5'>Belum punya akun? .<span className='link-danger' onClick={()=> {props.popLogin(false) ;props.popRegister(true)}}>daftar</span> .</p>
            </form>
        </div>
    </div>
    </> );
}
 
export default PopLogin;