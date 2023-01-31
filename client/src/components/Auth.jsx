import React, { useState } from "react";
import Cookies from 'universal-cookie';
import axios from 'axios';
import SignupIcon from '../assets/signup.jpg'

const cookies=new Cookies();

const initState = {
    "fullname": '',
    "username": '',
    "phonenum": '',
    "avatarurl": '',
    "password": '',
    "convirmPassword": ''
};

const Auth = () => {

    const [form, setForm] = useState(initState);
    const [isSignup, setSignup] = useState(true);
    const handelChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // console.log(form);
    }

    const handelonSubmit = async (e) => {
        e.preventDefault();
        const {
            fullname,
            username,
            phonenum,
            avatarurl,
            password
        } = form;

        const url = "http://localhost:5000/auth";

        const { data:{token,userId,hashePassword} } = await axios.post(`${url}/${isSignup ? "signup" : "login"}`,{
            fullname,
            username,
            phonenum,
            avatarurl,
            password,
        });
        cookies.set('token',token);
        cookies.set('username',username);
        cookies.set('fullname',fullname);
        cookies.set('userId',userId);

        if(isSignup){
            cookies.set('phonenum',phonenum);
            cookies.set('avatarurl',avatarurl);
            cookies.set('hashePassword',hashePassword);
        }
        window.location.reload();
    };


    const switchMode = () => {
        setSignup((preIsSignup) => !preIsSignup);
    }
    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields ">
                <div className="auth__form-container_fields-content">
                    <p>{isSignup ? "Signup" : "Signin"}</p>
                    <form
                        onSubmit={handelonSubmit}
                    >
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullname">Full Name</label>
                                <input type="text"
                                    name="fullname"
                                    placeholder="Full Name"
                                    onChange={handelChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="username">User Name</label>
                            <input type="text"
                                name="username"
                                placeholder="User Name"
                                onChange={handelChange}
                                required
                            />
                        </div>

                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="phonenum">Phone Num</label>
                                <input type="text"
                                    name="phonenum"
                                    placeholder="Phone Num"
                                    onChange={handelChange}
                                    required
                                />
                            </div>
                        )}
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="avatarurl">Avatar Url</label>
                                <input type="text"
                                    name="avatarurl"
                                    placeholder="Avatar Url"
                                    onChange={handelChange}
                                    required
                                />
                            </div>
                        )}

                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handelChange}
                                required
                            />
                        </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="convirmPassword">Convirm Password</label>
                                <input type="password"
                                    name="convirmPassword"
                                    placeholder="Convirm Password"
                                    onChange={handelChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_button">
                            <button>{isSignup ? "SignUp" : "SignIN"}</button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        {isSignup
                            ? "Already have a Account ?" :
                            "Dom' Have Account ?"
                        }
                        <span onClick={switchMode}>
                            {isSignup ? "SignIn" : "Signup"}
                        </span>
                    </div>
                </div>
            </div>
            <div className="auth__form-container_image">
                <img src={SignupIcon} alt="SignupIcon" />
            </div>
        </div>
    );
}
export default Auth;