import './PopLogin.css'
const PopLogin = (props) => {
    return ( <>
    <div className="pop d-flex align-items-center justify-content-center">
        <div className="container login p-4 pt-3 m-5 ">
            <div className="btn btn-secondary btn-close ms-auto  d-flex align-items-center justify-content-center" 
            onClick={()=> props.popLogin(false)} style={{background:"#FF0000",color:"black"}}>x</div>
            
            <div className="row d-flex justify-content-center">
                <h3 className='fw-bold d-flex justify-content-center pt-5' style={{fontSize:"24px"}}>Masuk ke Luang</h3>
            </div>
            <form >
                <div class="mb-3 pt-5">
                    <label for="exampleInputEmail1" class="form-label" >Email address</label>
                    <input type="email" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="masukan email"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control w-100" id="exampleInputPassword1" placeholder='password'/>
                </div>
                <button type="submit" class="btn btn-primary w-100 fw-bold" style={{background:"#FF0000",fontSize:"23px"}}>lanjut</button>
                <p className='fw-light d-flex justify-content-center pt-5'>Belum punya akun? .<span className='link-danger' onClick={()=> {props.popLogin(false) ;props.popRegister(true)}}>daftar</span> .</p>
            </form>
        </div>
    </div>
    </> );
}
 
export default PopLogin;