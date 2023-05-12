import React from "react";
import { Link } from "react-router-dom";
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3 footer-contact">
              <h4 className="text-white mb-4">Contact Us</h4>
              <address>
                <a
                  href="https://goo.gl/maps/WTbcMkfgpwhBH96k9"
                  className="text-white fs-6"
                >
                  <i className="fa-solid fa-location-dot me-2"></i>
                  No 1 Vo Van Ngan Street, Linh Chieu Ward, Thu Duc City, Ho Chi
                  Minh City
                </a>
                <a
                  href="tel:+84 348073013"
                  className="mt-3 d-block mb-1 text-white"
                >
                  <i className="fa-solid fa-phone me-2"></i>
                  (+84) 348 073 013
                </a>
                <a
                  href="mailto:baolong01.dev@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  <i className="fa-solid fa-envelope me-2"></i>
                  baolong01.dev@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="https://www.linkedin.com/">
                    <i className="fa-brands fa-linkedin fs-3"></i>
                  </a>
                  <a className="text-white" href="https://github.com/">
                    <i className="fa-brands fa-github fs-3"></i>
                  </a>
                  <a className="text-white" href="https://www.youtube.com/">
                    <i className="fa-brands fa-youtube fs-3"></i>
                  </a>
                </div>
              </address>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-secondary py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-secondary py-2 mb-1">
                  Refund Policy
                </Link>
                <Link
                  to="/shipping-policy"
                  className="text-secondary py-2 mb-1"
                >
                  Shipping Policy
                </Link>
                <Link
                  to="/term-conditions"
                  className="text-secondary py-2 mb-1"
                >
                  Terms & Conditions
                </Link>
                <Link to="blogs" className="text-secondary py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/about" className="text-secondary py-2 mb-1">
                  About Us
                </Link>
                <Link to="/faqs" className="text-secondary py-2 mb-1">
                  FAQs
                </Link>
                <Link to="/contact" className="text-secondary py-2 mb-1">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-secondary py-2 mb-1">Vans</Link>
                <Link className="text-secondary py-2 mb-1">Sneaker</Link>
                <Link className="text-secondary py-2 mb-1">Run Shoes</Link>
                <Link className="text-secondary py-2 mb-1">Sandal</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                {new Date().getFullYear()} &copy; Design & Develop by Group 07
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
