import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Components/Logo';
import bg1 from '../../Assets/bg2.jpg';

const Login = () => {

  const [password, setPassword] = useState('');
  const [aadhar, setAadhar] = useState('');


  const navigate = useNavigate();

  const Submit = (e)=> {
    e.preventDefault();
    navigate('/');
  }
  

  return (
    <div className="container-fluid py-3 pb-5" style={{ backgroundImage: `url(${bg1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)', height: '100vh'}}>
    <div className='mt-3'>
      <Logo/>
    </div>        
    <div className="row d-flex justify-content-center align-items-center mt-5 p-3">
      <div className="col col-xl-6">
        <div className="" style={{ borderRadius: "1rem", backgroundColor: 'rgba(255, 255, 255, 0.5)'}}> 
          <div className="row g-0">
            
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={Submit} style={{fontFamily:'Raleway'}}>

                  <h5 className="mb-3 pb-1 fw-bold" style={{"letterSpacing": "1px"}}><u>Login into your account</u></h5>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example25">Username</label>
                    <input required type="text" id="form2Example25" className="form-control" onChange={(e)=>{setAadhar(e.target.value)}} name="email" value={aadhar}/>
                  </div>


                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example21">Password</label>
                    <input required type="password" id="form2Example21" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} name="password" value={password}/>
                  </div>

                  <Link to='/studentpage'>
                    <div className="pt-2 mb-4">
                      <button className="btn btn-success btn-block" type="submit">Log in</button>
                    </div>
                  </Link>
                  <p className="mb-2 text-black fw-bold" style={{"color": "blue"}}>Don't have a account? <Link to="/register"className="" style={{"color": "blue"}}>Register here</Link></p>

                  <Link className="text-danger fw-bold" to="/">Return to Home</Link>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Login;