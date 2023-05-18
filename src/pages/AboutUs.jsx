import React from "react";
import aboutUsImg from "../assets/about.png";
import MetaData from "../components/layout/MetaData";
const AboutUs = () => {
  return (
    <>
      <MetaData title={`JAMILA | Về chúng tôi`} />
      <div className="h-full flex mt-28 m-10 bg-secColor rounded-3xl flex-wrap py-2 md:py-3 lg:mx-40 md:mx-4 sm:mx-2 justify-center">
        <div class="px-5">
          <h1 class="text-primaryBlue lg:text-3xl md:text-2xl sm:text-2xl text-center font-semibold uppercase tracking-widest my-5">
            Vai trò và sứ mệnh
          </h1>
        </div>
        <div>
          <p class="mt-5 lg:text-lg md:text-md sm:text-sm text-mainColor mx-10 text-justify leading-relaxed">
            <strong className="lg:text-xl md:text-lg sm:text-md text-neutral-700 font-bold">
              MỤC TIÊU CỦA CHÚNG TÔI
            </strong>
            : Mọi khách hàng đều hài lòng
            <div className="border-b-2 border-slate-500 my-2"></div>
            <p>
              JAMILA.com là tất cả về giày dép. Chúng tôi đã kinh doanh giày hơn
              5 năm. Hôm nay, chúng tôi tự hào cung cấp dịch vụ khách hàng tốt
              nhất cho khách hàng quen trực tuyến tại đây tại JAMILA.com. <br />
              <br />
              Kể từ khi thành lập JAMILA.com, chúng tôi đã cống hiến sức lực của
              mình để cung cấp dịch vụ khách hàng thân thiện và hiểu biết với
              giao hàng miễn phí nhanh chóng đến mọi khách hàng. Dịch vụ khách
              hàng xuất sắc là tiêu chuẩn của JAMILA.com và sẽ không bị ảnh
              hưởng. Mục tiêu của chúng tôi là đảm bảo rằng nhu cầu của bạn về
              chất lượng, phong cách và sự thoải mái được đáp ứng. Phong cách,
              sự thoải mái và chất lượng là trọng tâm của nhóm mua hàng
              JAMILA.com <br />
              <br /> Các thương hiệu chúng tôi mang theo phản ánh các giá trị
              của chúng tôi, đó là lý do tại sao chúng tôi tìm kiếm trên thế
              giới những đôi giày tốt nhất mỗi mùa. Chúng tôi biết rằng nếu bạn
              không chăm sóc đôi chân của mình thì toàn bộ cơ thể của bạn sẽ bị
              ảnh hưởng. Các thương hiệu như New Balance, Munro, Ecco, KEEN,
              Birkenstock và Sorel là hình ảnh thu nhỏ của chúng tôi. Phong cách
              chất lượng hàng đầu được chế tác với sự hỗ trợ, phong cách và vật
              liệu tinh tế.
            </p>
          </p>
        </div>
        <div className="lg:w-[100%] md:w-[100%] sm:w-[100%] mx-10 my-5">
          <img
            src={aboutUsImg}
            alt="aboutusImg"
            className="rounded-xl w-[100%] "
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
