const base_url = process.env.REACT_APP_URL_BACKEND

const PopRegister = (props) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('registerEmail'),
          username: data.get('registerUsername'),
          pass: data.get('registerPassword'),
          confirmPass: data.get('registerConfirmPassword'),
          
        })
        // try {
        //   // 1. Lakukan Axios POST ke API Register pada backend di bawah ini
        //   // body yang digunakan adalah username, email, dan password
        //   const response = await axios.post(`${base_url}/register`, {
        //     username: data.get('username'),
        //     email: data.get('email'),
        //     password: data.get('password')
        //   })
          
        //   // jika berhasil, redirect ke halaman login
        // } catch (error) {
        //   // jika gagal, tampilkan alert 'Register Gagal'
        //   alert('Register Gagal');  
        // }
      };

    return ( <>
        <div className="pop d-flex align-items-center justify-content-center">
        <div className="container login p-4 pt-3 m-5 ">
            <div className="btn btn-secondary btn-close ms-auto  d-flex align-items-center justify-content-center" 
            onClick={()=> props.popRegister(false)} style={{background:"#FF0000",color:"black"}}>x</div>
            
            <div className="row d-flex justify-content-center">
                <h3 className='fw-bold d-flex justify-content-center pt-1' style={{fontSize:"24px"}}>Gabung ke Luang</h3>
            </div>
            <form onSubmit={event => handleSubmit(event)} >
                <div className="mb-3 pt-1">
                    <label htmlFor="registerEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control w-100" id="registerEmail" name="registerEmail" label="registerEmail" aria-describedby="emailHelp" placeholder="masukan email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="registerUsername" className="form-label">Username</label>
                    <input type="text" className="form-control w-100" id="registerUsername" name="registerUsername" placeholder="masukan username"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="registerPassword" className="form-label">Password</label>
                    <input type="password" className="form-control w-100" id="registerPassword" name="registerPassword" placeholder="password"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="registerConfirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control w-100" id="registerConfirmPassword" name="registerConfirmPassword" placeholder="confirm password"/>
                </div>
                <button type="submit" className="btn btn-primary w-100 fw-bold" 
                style={{background:"#FF0000",fontSize:"23px"}}>lanjut</button>
                <p className='fw-light d-flex justify-content-center pt-1'>Sudah punya akun? .<span className='link-danger' onClick={()=> {props.popLogin(true) ;props.popRegister(false)}}>masuk</span> .</p>
            </form>
        </div>
    </div>
    </> );
}
 
export default PopRegister;