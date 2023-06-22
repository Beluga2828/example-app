import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Logins from "../jason/Logins";

const Login = () => {
    let navigate = useNavigate();
   

    const submitValue = () => {
        var { femail, fpassword } = document.forms[0];
        const formData = Logins.find((user) => user.email == femail.value);
      if (formData) {
            navigate('/');
        }
        else {
            navigate('/profile1');
        }
    };

    return (
        <><div className="div1" /*style={{ width: '100%', height: '600px',backgroundColor: 'pink',marginTop:'-184px' }}*/>
            <div className="div6"></div>
            <div className="div2" /*style={{ width: '80%',height:'300px',margin:'15%',marginBottom:'300px',border:'2px solid black'}}*/>

                <div className="div3" /*style={{ width: '40%',float: 'left',textAlign:'center' }}*/>
                    <div className="div9">
                        <h2>Login</h2>
                        <p>or use your account</p>
                        <form >
                            <input
                                type='text'
                                placeholder="Email"
                                style={{ padding: '3px 40px', marginTop: '6px' }}
                                //  onChange={(e) => e.target.value}
                                name="femail"
                            />
                            <input
                                type='password'
                                placeholder="password"
                                style={{ padding: '3px 40px', marginTop: '6px' }}
                                // onChange={(e) => e.target.value}
                                name="fpassword"
                            />
                            <p>Forgot your password?</p>

                        </form>
                        <button
                           onClick={submitValue}
                            style={{
                                width: '100px',
                                backgroundColor: 'red',
                                border: 'none',
                                borderRadius: '20px',
                                padding: '5px',
                                color: 'whitesmoke',
                                marginLeft: '10px'
                            }}
                        >Log In</button>
                    </div>
                </div>
                <div className="div4" /*style={{ width: '40%', color: 'whitesmoke',backgroundColor:'red',float: 'left',paddingBottom: '35px' }}*/> <div className="div8"><h1>HTML CSS LOGIN<br />Form</h1>
                    <p >
                        This Login form is created using pure<br />
                        HTML and CSS. For scoial icons,<br />
                        FontAwesome is used
                    </p>
                </div>
                </div>
            </div>


        </div><div className="div7"></div></>
    )
}

export default Login;




