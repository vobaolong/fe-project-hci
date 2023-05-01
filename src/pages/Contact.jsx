import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15674.004502843889!2d106.77288780781318!3d10.849437859293294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1681963397100!5m2!1svi!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="submit" className="d-flex flex-column gap-15">
                  <CustomInput
                    type="text"
                    name="Name"
                    className="form-control"
                    label="Name"
                  />
                  <CustomInput
                    type="email"
                    className="form-control"
                    label="Email"
                  />
                  <textarea
                    name=""
                    id=""
                    className="w-100 form-control"
                    cols="30"
                    rows="4"
                    placeholder="Comments"
                  ></textarea>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <p className="border-start border-2"></p>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <i class="fa-solid fa-location-dot fs-5"></i>
                      <address className="mb-0">
                        Add: No 1 Vo Van Ngan Street, Linh Chieu Ward, Thu Duc
                        City, Ho Chi Minh City
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <i class="fa-solid fa-phone fs-5"></i>
                      <a href="tel:+84 348073013">(+84) 348 073 013</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <i class="fa-solid fa-envelope fs-5"></i>
                      <a href="mailto:baolong01.dev@gmail.com">
                        baolong01.dev@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <i class="fa-solid fa-clock fs-5"></i>
                      <p className="mb-0">
                        Monday - Friday <br />
                        10:00 AM - 8:00 PM
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
