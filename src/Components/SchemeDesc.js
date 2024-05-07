import React from 'react'
import { Link } from 'react-router-dom'

const SchemeDesc = () => {
  return (
    <div>
        <div className="card mt-3 mb-3" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <div className="card-body">
              <h5 className="card-title"><b>Scheme Description</b></h5>
              <p className="card-text">Click on button below to apply.</p>
              <Link to="/apply" className="btn btn-danger">Apply Now</Link>
            </div>
        </div>
    </div>
  )
}

export default SchemeDesc