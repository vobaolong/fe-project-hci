import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { about } from "../utils/Data";
import store from "../images/store.jpg";

const About = () => {
  return (
    <>
      <Meta title={"About Us"} />
      <BreadCrumb title="About Us" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row align-items-center justify-content-center">
          <div className="col-9">
            <div className="policy rounded-3">
              <h3 className="mb-5 d-flex text-capitalize align-items-center justify-content-center">
                About Us
              </h3>
              {about?.map((index) => {
                return (
                  <p
                    style={{ textAlign: "justify" }}
                    className="fst-italic"
                    key={index}
                  >
                    {index.content}
                    <br />
                  </p>
                );
              })}
              <p>Contact: Store Inquiries: +84 348 073 013</p>
              <p>Customer Service: baolong01.dev@gmail.com</p>
              <img
                className="img-fluid rounded-3 my-3"
                src={store}
                alt="store"
              />
              <div className="about-info gap-15 d-flex flex-column">
                <li>
                  <strong>NALOVA</strong>
                </li>
                <li>
                  Phone: <a href="tel:+84 348073013">(+84) 348 073 013</a>
                </li>
                <li>
                  No 1 Vo Van Ngan Street, Linh Chieu Ward, Thu Duc City, Ho Chi
                  Minh City
                </li>
                <li>Monday - Friday: 10:00 AM - 8:00 PM</li>
                <li>Saturday: 10:00 AM - 7:00 PM</li>
                <li>Sunday: 10:30 AM - 6:00 PM</li>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
