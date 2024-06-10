import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
    
    const [credentials,setCrediantials]=useState({name:"",email:"",password:"",cpassword:"",phone:""})
    let navigate=useNavigate();
    const [shake, setShake] = useState(false); // State to control animation
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, phone } = credentials;
        // https://book-xchange.vercel.app/api/auth/createuser
        // https://book-xchange-client.vercel.app/
        const response = await fetch(`https://book-xchange.vercel.app/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, phone })
        });

        const json = await response.json();
        if (json.success) {
            localStorage.setItem("token", json.authToken);
            navigate("/");
            props.showAlert("Signed In Successfully", "success");
        } else {
            props.showAlert("Invalid Details", "danger");
            setShake(true); // Trigger shake animation
            setTimeout(() => setShake(false), 500); // Disable animation after 500ms
        }
    };
    const onChange = (e) => {
        setCrediantials({ ...credentials, [e.target.name]: e.target.value })
      }
    return (
        <div className={`signup-container`}>
        <h2>SignUp to Use BookXchange </h2>
        <form onSubmit={handleSubmit} className={`${shake ? 'shake' : ''}`}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name" onChange={onChange} value={credentials.name} required />
                
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">phone Number</label>
                <input type="phone" className="form-control" id="phone" aria-describedby="emailHelp" name="phone" onChange={onChange} value={credentials.phone} required />
                
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} value={credentials.email} required/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password} required minLength={5}/>
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} value={credentials.cpassword} required minLength={5}/>
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>


    )
}

export default SignUp
