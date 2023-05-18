import React from "react";
import FooterContent from "./FooterContent";
import logo from "../../../assets/logo.png";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
const Footer = ({ jsonData }) => {
  const footerData = jsonData[0];
  const heading = footerData.heading[0];

  return (
    <div className="bg-primaryDarkBlue w-[100%] top-full ">
      <div className="flex flex-wrap sm:flex-col lg:justify-between md:flex-row mx-4 lg:mx-40 md:mx-8 gap-3 sm:mx-4">
        <div className="md:w-1/4 sm:w-full items-center justify-center py-10">
          <img className="md:w-[50%] sm:w-[10%]" src={logo} alt="logo" />
          <p className="text-primaryBlue mt-4">
            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp
            từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt
            hơn nữa.
          </p>
          <div className="flex gap-10 mt-2 transition-all">
            <a
              className="text-primaryBlue text-3xl hover:text-secColor"
              href="/"
            >
              <FaGithub />
            </a>
            <a
              className="text-primaryBlue text-3xl hover:text-secColor"
              href="/"
            >
              <FaFacebook />
            </a>
            <a
              className="text-primaryBlue text-3xl hover:text-secColor"
              href="/"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="md:w-1/5 py-10">
          <FooterContent
            title={heading.policy}
            data={footerData.policy}
            disabled
          />
        </div>

        <div className="md:w-1/5 py-10">
          <FooterContent
            title={heading.information}
            data={footerData.infoData}
          />
        </div>

        <div className="md:w-1/5 py-10">
          <FooterContent
            title={heading.account}
            data={footerData.accountInfo}
          />
        </div>
      </div>
      <div className="border-t-2 py-5 px-8 md:px-24 flex flex-col md:flex-row items-center justify-center">
        <div>
          <p className="tracking-wider text-sm text-center">
            <strong>JAMILA</strong> &copy; 2023 - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
