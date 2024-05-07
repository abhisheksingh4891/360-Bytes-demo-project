import React from 'react'
import { Link } from 'react-router-dom'

const PortalDesc = () => {
  return (
    <div>
        <div className="card" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <div className="card-body">
              <h5 className="card-title">Welcome to the National scholarship portal!</h5>
              <p className="card-text">The portal is your personalized gateway to a world of educational resources. Designed for students, educators, and lifelong learners, this portal provides a centralized platform for all your learning needs.</p>
              <p><b>Here's what you can expect:</b></p>
                <li className='mt-1'><b>Seamless Navigation:</b> Our intuitive interface makes it easy to find the resources you're looking for. Whether you're searching by subject, grade level, or learning style, the portal will guide you to the perfect materials.</li>
                <li className='mt-3'><b>Curated Content:</b> We house a vast collection of high-quality educational resources, including interactive games, engaging videos, downloadable worksheets, and in-depth articles. All content is carefully vetted to ensure it aligns with current curriculum standards and promotes effective learning.</li>
                <li className='mt-3'><b>Personalized Learning:</b> Create a profile to personalize your experience. Track your progress, set learning goals, and receive tailored recommendations based on your interests and academic needs.</li>
                {/* <li><b>Always Evolving:</b> We are constantly adding new content and features to the portal. Stay ahead of the curve with regular updates and announcements.</li> */}
              <Link to="#" className="btn btn-primary mt-3">Explore</Link>
            </div>
          </div>
    </div>
  )
}

export default PortalDesc