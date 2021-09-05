import React from 'react'
import "../index.css";
const Footer = () => {
    return (
        <div>
             <footer>
            <div id="footer-cards">
                <div class="footer-head">
                    <p class="footer-head-text">Find Support</p>
                    
        </div>

        <div class="footer-head">
          <p class="footer-head-text">Get To Know Us</p>
          <ul type="none" class="footer-links-parent">
            <li class="footer-link-items">
              <a href="#">About Us</a>
            </li>
            <li class="footer-link-items">
              <a href="#">Community Guidelines</a>
            </li>
            <li class="footer-link-items">
              <a href="#">FAQ's</a>
            </li>
          </ul>
        </div>
        <div class="footer-head">
          <p class="footer-head-text">Support Us</p>
          <ul type="none" class="footer-links-parent">
            <li class="footer-link-items">
              <a href="#">Share Your Story</a>
            </li>
            <li class="footer-link-items">
              <a href="#">Volunteer With Us</a>
            </li>
            <li class="footer-link-items">
              <a href="#">Privacy Policy</a>
            </li>
            <li class="footer-link-items">
              <a href="#">Security</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="footer-bottom">
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">© Copyright 2020</a>
      </div>
      </footer>
        </div>
    )
}

export default Footer
