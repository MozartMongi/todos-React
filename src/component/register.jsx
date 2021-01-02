import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'



function Register () {

        const [email, setEmail] = React.useState('')
        const [password, setPassword] = React.useState('')
        const [registered, setRegistered] = React.useState(false)

        function emailInput (event) {
            const value = event.target.value
            setEmail(value)
        }
        function passwordInput (event) {
            const value = event.target.value
            setPassword(value)
        }
        function submitRegister () {
            // console.log(email)
            // console.log(password)
            axios({
                method:'post',
                url: 'http://localhost:3001/register',
                data: {
                    email: email,
                    password: password
                }
            })
            .then(data => {
                console.log('mashokk')
                setRegistered(true)
                setEmail('')
                setPassword('')
            })
            .catch(err => {
                console.log(err)
            })
        }
        if(registered) {
            return (
                <Redirect to= {{pathname: "/"}} />
            )
        } else {
            return (
                <div id="register-form"  className="container">
                    <div className="row ">
                        <div className="col-md-8">
                            <img id='registImg' src="img/2953998.jpg" className="img-fluid" alt="Responsive"/>
                        </div>
                        <div className="col-md-4 mt-5">
                        <h1 className="text-start">Register Form</h1>
                        <br/>
                        <div className='register-table'>
        
                        <form action="" method="post">
                            
                            <label htmlFor="input-email" >Email</label>
                            <input onChange={emailInput} type="text"id="regist-email" value={email} />
                            <br/><br/>
                            <label htmlFor="input-password">Password</label>
                            <input onChange={passwordInput} type="password"id='regist-password' value={password}/>
                            <br/><br/>
                        </form>
                        <button onClick={submitRegister} type="submit" className=" btn btn-primary text-light mr-2">Sign Up</button>
                        <Link to='/'>
                            <button className='btn btn-outline-dark' >Back</button>
                        </Link>
                        </div>
                        </div>
                    </div>
                </div>
            )

        }
        
}
export default Register