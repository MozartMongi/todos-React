import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'


    function Login (){
        const [email, setEmail] = React.useState('')
        const [password, setPassword] = React.useState('')
        const [loginStat, setLoginStat] = React.useState(false)


        function emailInput (event) {
            const value = event.target.value
            setEmail(value)
        }
        function passwordInput (event) {
            const value = event.target.value
            setPassword(value)
        }
        function submitLogin () {
            // console.log(email)
            // console.log(password)
            axios({
                method:'post',
                url: 'http://localhost:3001/login',
                data: {
                    email: email,
                    password: password
                }
            })
            .then(result => {
                localStorage.setItem('token_access', result.data.token_access)
                setEmail('')
                setPassword('')
                setLoginStat(true)
            })
            .catch(err => {
                console.log('errorrrr')
               
            })
        }
        if(loginStat || localStorage.getItem('token_access') ) {
            return (
                <Redirect to= {{pathname: "/mainpage"}} />
            )
        } else {
            return(
                <div id="login-form" className="container">
                <div className="row ">
                    <div id='login-img'className="col-md-8 ">
                        <img id='loginImg' src="img/2953998.jpg" className="img-fluid" alt=".."/>
                    </div>
                    <div id= 'form-login' className="col-md-4 mt-50">
                        <br/><br/>
                <h1 className="text-start">Login Form</h1>
                <br/>
                        <div className="login-table">
                            <form id="login-form2" action="" method="">
                                <label htmlFor="input-email">Email</label>
                                <input onChange={emailInput} type="text"id="login-email" value={email} />
                                <br/><br/>
                                <label  htmlFor="input-password">Password</label>
                                <input onChange={passwordInput} type="password"id="login-password" value={password} />
                                <br/>
                                <br/>
                            </form>
                                <button onClick={submitLogin} className='btn btn-primary mr-2'>Login</button>
                            <Link to="/register" >
                                <button id="btn-register" className="btn btn-outline-info">Register</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            )

        }
    }



export default Login