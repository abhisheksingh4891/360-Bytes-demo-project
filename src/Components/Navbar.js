import React from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Navbar = () => {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 mx-5">
      <div className="container-fluid mx-5"  style={{fontFamily:'Raleway'}}>
        <Link className="navbar-brand fs-6" to="/">HOME</Link>
        <Link className="navbar-brand fs-6" to="/">ABOUT</Link>
        <Link className="navbar-brand fs-6" to="/.">CONTACT US</Link>
        <Link className="navbar-brand fs-6" to="/register">NEW REGISTERATION</Link>  
      </div>
    </nav>
    </>
  );
};

export default Navbar;