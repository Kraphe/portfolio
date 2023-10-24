import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="contact">
        <div className="footer_container container">
            <h1 className="footer_title">Raphe</h1>
            <ul className="footer_list">
                <li>
                    <a href="https://codeforces.com/profile/g70104805" className="footer_link">Codeforces</a>
                </li>

                <li>
                    <a href="https://leetcode.com/k_raphe" className="footer_link">Leetcode</a>
                </li>

                <li>
                    <a href="https://www.codechef.com/users/k_raphe" className="footer_link">Codechef</a>
                </li>
            </ul>

            <div className="footer_social">
            <a href="https://github.com/Kraphe/"className="footer_social-link"  target="_blank">
                <i class="bx bxl-github"></i>
            </a>
            <a href="https://in.linkedin.com/in/kraphe001"className="footer_social-link"  target="_blank">
                <i class="bx bxl-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/raphe001/"className="footer_social-link"  target="_blank">
                <i class="bx bxl-instagram"></i>
            </a>
            </div>

            <span className="footer_copy">&#169; Mohammad Raphe. All rigths reserved</span>

        </div>
    </footer>
  )
}

export default Footer
