import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PopOTP from "../components/PopOTP";

//mengambil link API backend dari environement variable
const base_url = process.env.REACT_APP_URL_BACKEND;

const Account = () => {
    const navigate = useNavigate()

    const [changeUsername, setChangeUsername] = useState(false)
    const [newUsername, setNewUsername] = useState(localStorage.getItem('username'))
    const handleUsernameChange = (event) => {
        setNewUsername(event.target.value)
    }

    const [changePass, setChangePass] = useState(false)
    const [passwordInput, setPasswordInput] = useState({
        password: '',
        confirmPassword: ''
    })
    const [passwordError, setPasswordErr] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const handlePasswordChange = (evnt) => {

        const passwordInputValue = evnt.target.value.trim();
        const passwordInputFieldName = evnt.target.name;
        const NewPasswordInput = { ...passwordInput, [passwordInputFieldName]: passwordInputValue }
        setPasswordInput(NewPasswordInput);

    }
    const handleValidation = (evnt) => {
        //reset custom validity when user is typing
        evnt.target.setCustomValidity("")

        const passwordInputValue = evnt.target.value.trim();
        const passwordInputFieldName = evnt.target.name;

        //for password 
        if (passwordInputFieldName === 'password') {
            const uppercaseRegExp = /(?=.*?[A-Z])/;
            const lowercaseRegExp = /(?=.*?[a-z])/;
            const digitsRegExp = /(?=.*?[0-9])/;
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
            const minLengthRegExp = /.{8,}/;

            const passwordLength = passwordInputValue.length;
            const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
            const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
            const digitsPassword = digitsRegExp.test(passwordInputValue);
            const specialCharPassword = specialCharRegExp.test(passwordInputValue);
            const minLengthPassword = minLengthRegExp.test(passwordInputValue);

            let errMsg = "";
            if (passwordLength === 0) {
                errMsg = "Password is empty";
            } else if (!uppercasePassword) {
                errMsg = "At least one Uppercase";
            } else if (!lowercasePassword) {
                errMsg = "At least one Lowercase";
            } else if (!digitsPassword) {
                errMsg = "At least one digit";
            } else if (!specialCharPassword) {
                errMsg = "At least one Special Characters";
            } else if (!minLengthPassword) {
                errMsg = "At least minumum 8 characters";
            } else {
                errMsg = "";
            }
            setPasswordErr(errMsg);
        }

        // for confirm password
        if (passwordInputFieldName === "confirmPassword" || (passwordInputFieldName === "password" && passwordInput.confirmPassword.length > 0)) {

            if (passwordInput.confirmPassword !== passwordInput.password) {
                setConfirmPasswordError("Confirm password is not matched");
            } else {
                setConfirmPasswordError("");
            }

        }
    }

    const [popOTP, setPopOTP] = useState(false)
    const getOTP = () => {
        setPopOTP(true)
        const email = localStorage.getItem('email')
        axios.post(`${base_url}/otp`, { email: email })
    }
    const [OTPInput, setOTPInput] = useState("")
    const handleOTPChange = (event) => {
        setOTPInput(event.target.value)
    }
    const handleConfirm = async () => {

        if (newUsername === '') {
            alert("oops! can't change your username to empty")
        } else if (passwordInput.password === '' && changePass) {
            alert("oops~ i don't think empty password is secure!")
        } else if (passwordError) {
            alert(passwordError)
        } else if (passwordInput.confirmPassword === '' && changePass) {
            alert("please confirm your new password first")
        } else if (confirmPasswordError) {
            alert(confirmPasswordError)
        } else if (OTPInput === '') {
            alert("Input your OTP code first!")
        } else {
            try {
                //Melakukan Axios POST ke backend pada endpoint /ubah

                const response = await axios.post(`${base_url}/ubah`, {
                    token: OTPInput,
                    username: newUsername,
                    password: passwordInput.password
                })

                alert("Data Berhasil Diubah")
                setChangeUsername(false)
                setChangePass(false)
                console.log(response)

                //menghapus data local storage lama
                localStorage.removeItem('id');
                localStorage.removeItem('username');
                localStorage.removeItem('email');
                localStorage.removeItem('token');

                // simpan data baru ke localStorage
                localStorage.setItem('id', response.data.userid)
                localStorage.setItem('username', response.data.username)
                localStorage.setItem('email', response.data.email)
                localStorage.setItem('token', response.data.token)
            } catch (error) {
                // jika gagal, tampilkan alert 'Login Gagal'
                alert(error.response.data);
            }
        }
    }

    const [delAcc, setDelAcc] = useState(false)
    const handleDel = () => {
        if (OTPInput === '') {
            alert("Input your OTP Code Before Proceed to Delete Your Account")
        } else {
            axios.post(`${base_url}/hapus`, {
                token: OTPInput,
            })
                .then((res) => {
                    alert(res.data)
                    localStorage.removeItem('id');
                    localStorage.removeItem('username');
                    localStorage.removeItem('email');
                    localStorage.removeItem('token');
                    navigate('/')
                })
                .catch(err => {
                    console.log(err)
                })

        }
    }


    return (<>
        <NavBar />
        <div className="container">
            <h1 className="fw-bold my-5 pt-5" style={{ fontSize: "36px" }}>Account Setting</h1>
        </div>

        <div className="container" >
            <div className="row my-5"></div>

            <div className="row my-4">
                <div className="col-2">
                    <h3 className="fw-600 m-0 p-0">Email</h3>
                </div>
                <div className="col-9">
                    <input className="form-control" type="text" placeholder={localStorage.getItem('email')} aria-label="Disabled input example" disabled />
                </div>
            </div>

            <div className="row my-5"></div>

            <div className="row my-4">
                <div className="col-2">
                    <h3 className="fw-600 ">Username</h3>
                </div>
                <div className="col-5">
                    {changeUsername
                        ? <input className="form-control" type="text" placeholder="input your new username"
                            name="newUsername" value={newUsername} onChange={handleUsernameChange} />
                        : <input className="form-control" type="text" placeholder="your current username"
                            name="newUsername" value={newUsername} readOnly />
                    }
                </div>
                <div className="col-1">
                    <button type="btn" className={`btn ${changeUsername ? "btn-secondary" : "btn-outline-secondary"}`}
                        onClick={() => { setChangeUsername((prev) => !prev); setNewUsername(localStorage.getItem('username')) }}>Change Username</button>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-2">
                    <h3 className="fw-password ">Password</h3>
                </div>
                {changePass &&
                    <div className="col-5 ">
                        <input className="form-control" type="password" name="password" placeholder="input your new pasword "
                            value={passwordInput.password} onChange={handlePasswordChange} onKeyUp={handleValidation} />
                        <p className="text-danger">{passwordError}</p>
                    </div>
                }
                <div className="col-1">
                    <button type="btn" className={`btn ${changePass ? "btn-secondary" : "btn-outline-secondary"}`}
                        onClick={() => { setChangePass((prev) => !prev); setPasswordInput((prev) => ({ ...prev, password: '', confirmPassword: '' })) }}>Change Password</button>
                </div>
            </div>
            {changePass &&
                <div className="row my-4">
                    <div className="col-2">
                        <h3 className="fw-password ">Confirm Password</h3>
                    </div>
                    <div className="col-5 ">
                        <input className="form-control" type="password" name="confirmPassword" placeholder="confirm your new pasword "
                            value={passwordInput.confirmPassword} onChange={handlePasswordChange} onKeyUp={handleValidation} />
                        <p className="text-danger">{confirmPasswordError}</p>
                    </div>
                </div>
            }
            {changeUsername || changePass
                ?
                <>
                    <div className="container">
                        <div className="row py-3 "></div>
                    </div>
                    <div className="row my-4">
                        <div className="col-2">
                            <h3 className="fw-600 ">OTP</h3>
                        </div>
                        <div className="col-5">
                            <input className="form-control" type="text" placeholder="input your otp code" value={OTPInput} onChange={handleOTPChange} />
                        </div>
                        <div className="col-2">
                            <button type="btn" className="btn btn-outline-secondary ms-4" onClick={getOTP}>Get OTP Code</button>
                            {popOTP && <PopOTP popOTP={setPopOTP} />}
                        </div>
                    </div>
                    <div className="container">
                        <div className="row py-4 "></div>
                    </div>
                    <div className="row ">
                        <div className="col-11 my-5">
                            <button type="btn" className="btn btn-secondary" style={{ width: "80%" }} onClick={handleConfirm} >Confirm Changes</button>
                        </div>
                    </div>
                </>
                : null
            }

            <div className="row my-5"></div>


            <div className="row my-5 py-3" style={{ border: "solid #DC3545 2px", borderRadius: "8px" }}>
                <div className="row" >
                    <h3 className="text-danger p-4">Danger Zone</h3>
                </div>
                <div className="row">
                    <div className="col-2">
                        <button className={`btn ${delAcc ? "btn-danger" : "btn-outline-danger"} ms-3 mb-2`}
                            onClick={() => { setDelAcc(prev => !prev) }}>Delete Account</button>
                    </div>
                    {delAcc
                        ?
                        <>
                            <div className="col-5">
                                <input className="form-control" type="text" placeholder="input your otp code" value={OTPInput} onChange={handleOTPChange} />
                            </div>
                            <div className="col-2">
                                <button type="btn" className="btn btn-outline-danger ms-5" onClick={getOTP}>Get OTP Code</button>
                                {popOTP && <PopOTP popOTP={setPopOTP} />}
                            </div>
                        </>
                        : null}
                </div>


                {delAcc
                    ?
                    <div className="row ">
                        <div className="col-9 my-5 ms-3">
                            <button type="btn" className="btn btn-danger" style={{ width: "98%" }} onClick={handleDel} >Proceed to Delete</button>
                        </div>
                    </div>
                    : null}

            </div>
            <div className="row my-5"></div>
        </div>
        <Footer />
    </>);
}

export default Account;