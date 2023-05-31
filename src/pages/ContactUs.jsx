import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import MetaData from "../components/layout/MetaData";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2qtm328",
        "template_vdsi5aj",
        form.current,
        "sGKnCrCziVNUJzJlw"
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
    toast.success("Gửi tin nhắn thành công");
  };
  return (
    <>
      <MetaData title={`JAMILA | Liên hệ`} />
      <div className="h-full flex mt-28 m-10 bg-white rounded-lg flex-wrap py-2 md:py-3 lg:mx-40 md:mx-4 sm:mx-2 justify-center">
        <div className="px-5">
          <h1 className="text-primaryBlue lg:text-3xl md:text-2xl sm:text-2xl text-center font-semibold uppercase tracking-widest my-5">
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
        <div className="flex lg:flex-row md:flex-col sm:flex-col p-2 justify-around text-lightGray w-[100%] text-base lg:divide-x xl:divide-x md:gap-3 sm:gap-3">
          <div className="xl:w-[40%] lg:w-[40%] md:w-[100%] sm:w-[100%] mx-3 flex flex-col gap-2">
            <p>
              Điền vào biểu mẫu và chúng tôi sẽ liên hệ lại với bạn trong vòng
              24 giờ
            </p>
            {/* place */}
            <div className="py-4 sm:p-0 flex items-center">
              <div className="pr-2">
                <FaMapMarkerAlt className="h-8 text-primaryBlue" />
              </div>
              <span className="font-semibold">
                01 đường Võ Văn Ngân, phường Linh Chiểu, thành phố Thủ Đức,
                thành phố Hồ Chí Minh
              </span>
            </div>
            {/* phone */}
            <div className="py-4 sm:p-0 flex flex-wrap items-center">
              <div className="pr-2">
                <FaPhoneAlt className="h-8 text-primaryBlue" />
              </div>
              <a
                className="hover:text-primaryBlue font-semibold"
                href="tel:+84348073013"
              >
                0348073013
              </a>
            </div>
            {/* email */}
            <div className="py-4 sm:p-0 flex flex-wrap items-center">
              <div className="pr-2">
                <FaMailBulk className="h-8 text-primaryBlue" />
              </div>
              <a
                className="hover:text-primaryBlue font-semibold"
                href="mailto:baolong01.dev@gmail.com"
              >
                baolong01.dev@gmail.com
              </a>
            </div>
          </div>

          <div className="xl:w-[60%] lg:w-[60%] sm:w-[100%]">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex xl:flex-row lg:flex-row sm:flex-col flex-wrap text-black"
            >
              <div className="lg:w-[40%] sm:w-[100%] px-3 gap-3 flex flex-col flex-wrap mb-2 xl:mt-0 lg:mt-0 md:mt-3 sm:mt-3">
                <TextField
                  name="user_name"
                  type="text"
                  required
                  id="outlined-basic"
                  label="Họ và tên"
                  variant="outlined"
                  className="w-[100%]"
                />
                <TextField
                  name="user_email"
                  type="email"
                  required
                  id="outlined-basic"
                  label="Địa chỉ email"
                  variant="outlined"
                  className="w-[100%]"
                />
                <TextField
                  name="subject"
                  type="text"
                  required
                  id="outlined-basic"
                  label="Tiêu đề"
                  variant="outlined"
                  className="w-[100%]"
                />
              </div>
              <div className="lg:w-[60%] sm:w-[100%] px-3 flex flex-wrap justify-end mb-2">
                <TextField
                  name="message"
                  className="w-[100%]"
                  id="outlined-multiline-static"
                  label="Nội dung"
                  multiline
                  required
                  rows={7}
                />
              </div>
              <div className="lg:w-[100%] md:w-[100%] sm:w-[100%] px-3 flex flex-wrap justify-end">
                <button
                  type="submit"
                  value="Gửi"
                  className="mt-5 xl:w-[58%] lg:w-[100%] sm:w-[100%] bg-secondaryDark hover:bg-primaryBlue text-white font-bold py-2 px-4 rounded justify-end"
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
