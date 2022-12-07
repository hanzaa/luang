import { useState } from "react";
const base_url = process.env.REACT_APP_URL_BACKEND


const PopRegister = (props) => {
    
    const [passwordError, setPasswordErr] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [passwordInput, setPasswordInput]= useState({
        password:'',
        confirmPassword:''
    })

    const handleSubmit = async (event) => {
        event.target.confirmPassword.setCustomValidity("")
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const cpv=event.target.confirmPassword.value
        const pv=event.target.password.value

        if(data.get('registerEmail')=='' || data.get('registerUsername')==' ' || data.get('password') =='' ||  data.get('confirmPassword')==''){
            alert('Fill All The Form First!')
        }else if(passwordError) {
            event.target.password.setCustomValidity(passwordError)
        }else if(confirmPasswordError){
            event.target.confirmPassword.setCustomValidity(confirmPasswordError)
        }else{
            console.log({
                email: data.get('registerEmail'),
                username: data.get('registerUsername'),
                pass: data.get('password'),
                confirmPass: data.get('confirmPassword'),    
            })
          }

      
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

      
    const handlePasswordChange =(evnt)=>{
    
        const passwordInputValue = evnt.target.value.trim();
        const passwordInputFieldName = evnt.target.name;
        const NewPasswordInput = {...passwordInput,[passwordInputFieldName]:passwordInputValue}
        setPasswordInput(NewPasswordInput);
        
    }

    const handleValidation= (evnt)=>{
        //reset custom validity when user is typing
        evnt.target.setCustomValidity("")
    
        const passwordInputValue = evnt.target.value.trim();
        const passwordInputFieldName = evnt.target.name;
    
        //for password 
        if(passwordInputFieldName==='password'){
            const uppercaseRegExp   = /(?=.*?[A-Z])/;
            const lowercaseRegExp   = /(?=.*?[a-z])/;
            const digitsRegExp      = /(?=.*?[0-9])/;
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
            const minLengthRegExp   = /.{8,}/;
        
            const passwordLength =      passwordInputValue.length;
            const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
            const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
            const digitsPassword =      digitsRegExp.test(passwordInputValue);
            const specialCharPassword = specialCharRegExp.test(passwordInputValue);
            const minLengthPassword =   minLengthRegExp.test(passwordInputValue);
        
            let errMsg ="";
            if(passwordLength===0){
                    errMsg="Password is empty";
            }else if(!uppercasePassword){
                    errMsg="At least one Uppercase";
            }else if(!lowercasePassword){
                    errMsg="At least one Lowercase";
            }else if(!digitsPassword){
                    errMsg="At least one digit";
            }else if(!specialCharPassword){
                    errMsg="At least one Special Characters";
            }else if(!minLengthPassword){
                    errMsg="At least minumum 8 characters";
            }else{
                errMsg="";
            }
            setPasswordErr(errMsg);
        }
        
        // for confirm password
        if(passwordInputFieldName=== "confirmPassword" || (passwordInputFieldName==="password" && passwordInput.confirmPassword.length>0) ){
                
            if(passwordInput.confirmPassword!==passwordInput.password)
            {
            setConfirmPasswordError("Confirm password is not matched");
            }else{
            setConfirmPasswordError("");
            }
            
        }
    }

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
                    <input type="password" className="form-control w-100" name="password" placeholder="Password" 
                    value={passwordInput.password}  onChange={handlePasswordChange} onKeyUp={handleValidation} />
                    <p className="text-danger">{passwordError}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="registerConfirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control w-100" name="confirmPassword" placeholder="Password" 
                    value={passwordInput.confirmPassword}  onChange={handlePasswordChange} onKeyUp={handleValidation} />
                    <p className="text-danger">{confirmPasswordError}</p>
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