import React from "react";
import aboutUsImg from "../assets/about.png";
const AboutUs = () => {
  return (
    <div className="">
      <div className="h-full flex md:flex-row sm:flex-col mt-28 m-10 bg-secColor rounded-3xl py-5">
        <div class="md:w-[50%] sm:w-[100%] px-5">
          <h1 class="text-primaryBlue text-3xl text-center font-semibold uppercase tracking-widest my-5">
            Vai trò và sứ mệnh
          </h1>
          <p class="mt-5 text-mainColor mx-10 text-justify leading-6">
            <strong>JAMILA</strong> là công ty chuyên cung cấp các sản phẩm về
            công nghệ như Laptop, PC, phụ kiện PC hàng đầu hiện nay.
            <br />
            <br />
            Là sản phẩm đầu tay cũng như là đứa con tinh thần của cả nhóm
            <br />
            <br />
            Sứ mệnh của JAMILA là sẽ cũng cố hơn nữa về mặt kỹ thuật để có thể
            đưa nào hoạt động rộng rãi và chính thức
          </p>
        </div>
        <div className="md:w-[50%] sm:w-[100%] p-5 my-auto">
          <img
            src={aboutUsImg}
            alt="aboutusImg"
            className="rounded-xl w-[100%] "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
