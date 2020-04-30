import React, { Component } from "react";
import "./footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer-distributed">
          <div className="footer-left">
            <div className="logo">
              <img src="images/logo.png" alt="" />
              <a
                href="#"
                style={{ fontFamily: "Montserrat", marginLeft: "5px" }}
              >
                PROFESSOR
              </a>
            </div>
            <p className="footer-links">
              <a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·
              <a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a>
            </p>
            <p className="footer-company-name">webdevtrick © 2019</p>
          </div>
          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker" />
              <p>
                <span>21 Revolution Street</span> Delhi, India
              </p>
            </div>
            <div>
              <i className="fa fa-phone" />
              <p>+1 555 123456</p>
            </div>
            <div>
              <i className="fa fa-envelope" />
              <p>
                <a href="mailto:support@company.com">contact@webdevtrick.com</a>
              </p>
            </div>
          </div>
          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the company</span>
              Web Dev Trick is a blog for web designers, graphic designers, web
              developers &amp; SEO Learner.
            </p>
            <div className="footer-icons">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
              <a href="#">
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}