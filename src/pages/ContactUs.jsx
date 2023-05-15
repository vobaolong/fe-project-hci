import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import { useAlert } from "react-alert";

const ContactUs = () => {
  const form = useRef();
  const alert = useAlert();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jrrzssf",
        "template_jmgmnuj",
        form.current,
        "wj1KVPLMC5fGuwGhv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert.success("Gửi tin nhắn thành công");
  };
  return (
    <div className="h-full flex mt-28 m-10 bg-secColor rounded-3xl flex-wrap py-2 md:py-3 mx-4 lg:mx-40">
      <div className="w-[100%] px-5">
        <h1 className="text-primaryBlue text-3xl font-semibold uppercase tracking-widest mt-5 text-center">
          Thông tin liên lạc
        </h1>
      </div>
      <div className="w-[100%] p-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15674.004502843889!2d106.77288780781318!3d10.849437859293294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1681963397100!5m2!1svi!2s"
          width="600"
          height="450"
          className="border-0 w-[100%] shadow-orange-50 shadow-sm"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
      <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col p-2 justify-around text-lightGray w-[100%] text-md">
        <div className="xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] mx-3 flex flex-col gap-5">
          <p>
            Điền vào biểu mẫu và nhóm của chúng tôi sẽ liên hệ lại với bạn trong
            vòng 24 giờ
          </p>
          {/* place */}
          <div className="py-4 sm:p-0 flex items-center">
            <div className="pr-2">
              <FaMapMarkerAlt className="h-8 text-primaryBlue" />
            </div>
            <span>
              01 đường Võ Văn Ngân, phường Linh Chiểu, thành phố Thủ Đức, thành
              phố Hồ Chí Minh
            </span>
          </div>
          {/* phone */}
          <div className="py-4 sm:p-0 flex flex-wrap items-center">
            <div className="pr-2">
              <FaPhoneAlt className="h-8 text-primaryBlue" />
            </div>
            <a className="hover:text-primaryBlue" href="tel:+84348073013">
              0348073013
            </a>
          </div>
          {/* email */}
          <div className="py-4 sm:p-0 flex flex-wrap items-center">
            <div className="pr-2">
              <FaMailBulk className="h-8 text-primaryBlue" />
            </div>
            <a
              className="hover:text-primaryBlue"
              href="mailto:baolong01.dev@gmail.com"
            >
              baolong01.dev@gmail.com
            </a>
          </div>
        </div>
        <span className="border-l-2"></span>
        <div className="xl:w-[50%] sm:w-[100%]">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex xl:flex-row lg:flex-row sm:flex-col flex-wrap text-black"
          >
            <div className="lg:w-[40%] sm:w-[100%] px-3">
              <input
                className="w-[100%] p-2 my-2 rounded-lg h-11"
                name="user_name"
                placeholder="Họ và tên *"
                type="text"
                required
              />
              <input
                className="w-[100%] p-2 my-2 rounded-lg h-11"
                name="user_email"
                placeholder="Địa chỉ email *"
                type="email"
                required
              />
              <input
                className="w-[100%] p-2 my-2 rounded-lg h-11"
                name="subject"
                placeholder="Tiêu đề *"
                type="text"
                required
              />
            </div>
            <div className="lg:w-[60%] sm:w-[100%] px-3 flex flex-wrap justify-end">
              <textarea
                className="w-[100%] p-2 my-2 rounded-lg h-40 resize-none"
                name="message"
                placeholder="Nội dung *"
                type="text"
              ></textarea>
              <button
                type="submit"
                value="Gửi"
                className="xl:w-[30%] lg:w-[30%] sm:w-[100%] bg-secondaryDark hover:bg-primaryBlue text-white font-bold py-2 px-4 rounded"
              >
                Gửi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
