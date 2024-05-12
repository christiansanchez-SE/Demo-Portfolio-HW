import React from 'react'
import { Link } from "react-router-dom"

function Contact() {
  return (
    <div>
      <div>
        <div>Contact</div>
        <div className="return">
          <Link to="/">Go back</Link>
        </div>
      </div>
    </div>
  )
}

export default Contact