import React from 'react';
import Navbar from '../Components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Components/Logo';
import c1 from "../Assets/c4.jpg";

const StudentPage = () => {

  const navigate = useNavigate();

  const Submit = (e)=> {
    e.preventDefault();
    // navigate("/modal");
  }
  return (
    <div className="container-fluid p-3" style={{ backgroundImage: `url(${c1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)', fontFamily:'Raleway'}}>
      <Logo />
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 mx-5">
            <div className="container-fluid mx-5"  style={{fontFamily:'Raleway'}}>
                <Link className="navbar-brand fs-6" to="/">HOME</Link>
                <Link className="navbar-brand fs-6" to="/">ABOUT</Link>
                <Link className="navbar-brand fs-6" to="/.">CONTACT US</Link>
                <Link className="navbar-brand fs-6" to="/">LOGOUT</Link>  
            </div>
        </nav>
      </div>
      <div className="row mx-4 mt-5">
        <div className="col-md-4">
          <div className="card" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
          <div className="card-body">
              <h5 className="card-title mb-4"><b>My Profile</b></h5>
              <form onSubmit={Submit}>
                <div className="mb-4">
                    <label>Name</label>
                    <input type="text" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="password" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label>Phone Number</label>
                    <input type="password" className="form-control"  />
                </div>
                <Link to="/"><button type="submit" className="btn btn-success mb-3">Logout</button></Link>
              </form>
            </div>


          </div>
          <div className="card mt-3" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <div className="card-body">
              <h5 className="card-title"><b>Helpdesk</b></h5>
              <p className="card-text">Get assistance from our support team.</p>
              <Link to="#" className="btn btn-danger">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <div className="card-body">
              <h5 className="card-title"><b>Schemes Provided</b></h5>
              <p className="card-text">The portal is your personalized gateway to a world of educational resources. Designed for students, educators, and lifelong learners, this portal provides a centralized platform for all your learning needs.</p>
              <p><b>Here's what you can expect:</b></p>
                <li className='mt-1'><b>Scheme one:</b> Our intuitive interface makes it easy to find the resources you're looking for. Whether you're searching by subject, grade level, or learning style, the portal will guide you to the perfect materials.</li>
                <li className='mt-3'><b>Scheme two:</b> We house a vast collection of high-quality educational resources, including interactive games, engaging videos, downloadable worksheets, and in-depth articles. All content is carefully vetted to ensure it aligns with current curriculum standards and promotes effective learning.</li>
                <li className='mt-3'><b>Scheme three:</b> Create a profile to personalize your experience. Track your progress, set learning goals, and receive tailored recommendations based on your interests and academic needs.</li>
                {/* <li><b>Always Evolving:</b> We are constantly adding new content and features to the portal. Stay ahead of the curve with regular updates and announcements.</li> */}
              <Link to="#" className="btn btn-primary mt-3">Explore More </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <div className="card-body">
              <h5 className="card-title"><b>Latest Updates</b></h5>
              <p className="card-text">Exciting News</p>
                <li className='mt-1'><b>New Course Launch:</b> We're thrilled to announce the launch of our brand new course. This course will delve into brief description of course content and target audience. Enroll today and unlock new skills!</li>
                <li className='mt-3'><b>Free Webinar:</b> Join us for a free webinar on topic. Our expert will discuss webinar content. Register now to reserve your spot!</li>
                <li className='mt-3'><b>Resource Library Update:</b> We've added a wealth of new resources to our library, including list a few examples of new resources, e.g., ebooks, articles, templates. Be sure to check them out and enhance your learning experience!</li>
              <Link to="#" className="btn btn-primary mt-3">Read More</Link>
            </div>
          </div>
          <div className="card mt-3 mb-3" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <div className="card-body">
              <h5 className="card-title"><b>Scheme Description</b></h5>
              <p className="card-text">Click on button below to apply.</p>
              <Link to="/apply" className="btn btn-danger">Apply Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
