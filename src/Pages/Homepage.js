import React from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../Components/Logo';
import c1 from "../Assets/c4.jpg";
import Helpdesk from '../Components/Helpdesk';
import LatestUpdates from '../Components/LatestUpdates';
import PortalDesc from '../Components/PortalDesc';

const Homepage = () => {

  // const navigate = useNavigate();

  const Submit = (e)=> {
    e.preventDefault();
    // navigate("/modal");
  }
  return (
    <div className="container-fluid pt-3" style={{ backgroundImage: `url(${c1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)', fontFamily:'Raleway'}}>
      <Logo />
      <Navbar />
      <div className="row mx-1 mt-5">
        <div className="col-md-4 pb-3">
          <LatestUpdates />
          <Helpdesk/>
        </div>
        <div className="col-md-4 pb-3">
          <PortalDesc />
        </div>
        <div className="col-md-4">
          <div className="card mb-5" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <div className="card-body">
              <h5 className="card-title mb-4">Student Login <b>:</b></h5>
              <form onSubmit={Submit}>
                <div className="mb-4">
                  <input type="text" className="form-control" placeholder="Uid" />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="mb-2">
                    <Link to="#"><b>Forgot Password?</b></Link>
                </div>
                <div className='mb-3'><b>Institute/State/Ministry</b></div>
                <Link to="/studentpage"><button type="submit" className="btn btn-success mb-3">Login</button></Link>
              </form>
            </div>
          </div>
          {/* <div className="card mt-3 mb-3" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <div className="card-body">
              <h5 className="card-title">Scheme Description</h5>
              <p className="card-text">Click on button below to apply.</p>
              <Link to="/apply" className="btn btn-danger">Apply Now</Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
