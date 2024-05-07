import React from 'react'
import { Link } from 'react-router-dom'

const LatestUpdates = () => {
  return (
    <div>
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
    </div>
  )
}

export default LatestUpdates