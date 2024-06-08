import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";



const Login = (props) => {

    const [credentials, setCrediantials] = useState({ email: "", password: "" })
    let navigate = useNavigate();
    const [shake, setShake] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(credentials.email)
        // https://book-xchange-client-bbcxkbvar-shaik-mosins-projects.vercel.app/
        // https://book-xchange-client.vercel.app/
        const response = await fetch(`https://book-xchange-client.vercel.app/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })


        });
        const json = await response.json();
        // console.log(json);
        if (json.success) {
            //save authtoken  and redirect
            localStorage.setItem("name", credentials.email)
            localStorage.setItem("token", json.authtoken)
            // console.log("success",json.success)
            props.showAlert("Logged in Successfully", "success")
            navigate("/");
        }
        else {
            // console.log("invalid credintials", json.success)
            setShake(true); // Trigger shake animation
            setTimeout(() => setShake(false), 500); // Disable animation after 500ms
            props.showAlert("Invalid Credintials", "danger")

        }

    }
    const onChange = (e) => {
        setCrediantials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className={`signup-container`}>
            <h2>Login to continue to BookXchange Services </h2>
            <form onSubmit={handleSubmit} className={`${shake ? 'shake' : ''}`} >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
