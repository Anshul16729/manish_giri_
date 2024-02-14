import React from 'react'
import { basicContactDetails } from '../../utils/constants'

const Footer = () => {
  return (
    <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright
            <strong>
              <span>@2024</span>
            </strong>
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ --> */}
            Developer <a href="https://www.linkedin.com/in/%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-anshul-shrivastava-6b1483152" target='_blank'>Anshul Shrivastava</a><br/>
            Designer <a href="https://www.linkedin.com/in/manish-giri-4192a2158" target='_blank'>Manish Giri</a>
          </div>
        </div>
      </footer>
  )
}

export default Footer