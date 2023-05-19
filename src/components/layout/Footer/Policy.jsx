import React from "react";
import salePolicyImg from "../../../assets/salepolicy.png";
import MetaData from "../MetaData";
const Policy = () => {
  return (
    <>
      <MetaData title={`JAMILA | Chính sách`} />
      <div className="h-full flex mt-28 m-10 bg-white rounded-lg flex-wrap py-2 md:py-3 lg:mx-40 md:mx-4 sm:mx-2 justify-center">
        <div className="w-[100%] px-5">
          <h1 className="text-primaryBlue text-3xl font-semibold uppercase tracking-widest m-10 text-center">
            Chính sách bán hàng
          </h1>
        </div>
        <div>
          <p class="lg:text-lg md:text-base sm:text-sm text-mainColor mx-10 text-justify leading-loose">
            <p>
              <strong>1. Hàng hóa tại JAMILA</strong>
              <br />
              - Tất cả sản phẩm đều là chính hãng, mới 100%
              <br />- Hàng chính hãng được phân phối chính thức tại Việt Nam sẽ
              có tem/ phiếu bảo hành của nhà phân phối, có đầy đủ CO, CQ, giá đã
              bao gồm VAT, bảo hành tại <strong>JAMILA</strong>, tại hãng hoặc
              trung tâm bảo hành ủy quyền của hãng, chính sách bảo hành theo quy
              định của hãng
              <br />
            </p>
            <strong>2. Chính sách trả hàng tại JAMILA</strong>
            <p>
              <pre>
                {" "}
                2.1 Chính sách trả hàng tại <strong>JAMILA</strong>
              </pre>
              - <strong>JAMILA</strong> giao hàng không đúng theo đơn đặt hàng.
              <br />- <strong>JAMILA</strong> giao sản phẩm có dấu hiệu đã qua
              sử dụng hoặc không phải là hàng chính hãng.
              <br />
              - Sản phẩm còn trong thời hạn đổi mới nhưng không còn sản phẩm đổi
              và khách hàng không muốn đổi sang sản phẩm tương tự.
              <br />
              <pre>
                {" "}
                2.2 Trường hợp không được trả hàng tại <strong>JAMILA</strong>
              </pre>
              - Trường hợp sản phẩm của quý khách mua trả góp bị lỗi nhưng
              JAMILA.vn hết hàng đổi thì quý khách sẽ được đổi sang mã sản phẩm
              tương tự khác và bù trừ tiền chênh lệch (nếu có).
              <br />
              - Sản phẩm đặt hàng theo yêu cầu của quý khách sẽ không được trả
              hàng.
              <br />
            </p>
          </p>
        </div>
        <div className="lg:w-[100%] md:w-[100%] sm:w-[100%] mx-10 my-5">
          <img
            src={salePolicyImg}
            alt="salepolicyImg"
            className="rounded-xl w-[100%]"
          />
        </div>
      </div>
    </>
  );
};

export default Policy;
