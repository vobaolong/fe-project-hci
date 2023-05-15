import React from "react";
import salePolicyImg from "../../../assets/salepolicy.png";
const Policy = () => {
  return (
    <div className="">
      <div className="h-full flex mt-28 m-10 bg-secColor rounded-3xl py-5 flex-wrap">
        <div className="w-[100%] px-5">
          <h1 className="text-primaryBlue text-3xl font-semibold uppercase tracking-widest mt-5 text-center">
            Chính sách bán hàng
          </h1>
        </div>
        <div class="md:w-[60%] sm:w-[100%] px-5">
          <p class="mt-5 text-lightGray mx-10 text-justify leading-6">
            <br />
            <br />
            <strong>1. Hàng hóa tại JAMILA</strong>
            <br />
            <br />
            - Tất cả sản phẩm đều là chính hãng, mới 100%
            <br />
            <br />
            - Hàng chính hãng được phân phối chính thức tại Việt Nam sẽ có tem/
            phiếu bảo hành của nhà phân phối, có đầy đủ CO, CQ, giá đã bao gồm
            VAT, bảo hành tại JAMILA, tại hãng hoặc trung tâm bảo hành ủy quyền
            của hãng, chính sách bảo hành theo quy định của hãng
            <br />
            <br />
          </p>
          <p class="mt-4 text-lightGray mx-10 text-justify leading-6">
            <strong>2. Chính sách trả hàng tại JAMILA</strong>
          </p>
          <p class="mt-4 text-lightGray mx-10 text-justify leading-6">
            <pre> 2.1 Chính sách trả hàng tại JAMILA </pre>
            <br />
            - JAMILA giao hàng không đúng theo đơn đặt hàng.
            <br />
            <br />
            - JAMILA giao sản phẩm có dấu hiệu đã qua sử dụng hoặc không phải là
            hàng chính hãng.
            <br />
            <br />
            - Sản phẩm còn trong thời hạn đổi mới nhưng không còn sản phẩm đổi
            và khách hàng không muốn đổi sang sản phẩm tương tự.
            <br />
            <br />
            <pre> 2.2 Trường hợp không được trả hàng tại JAMILA </pre>
            <br />
            - Trường hợp sản phẩm của quý khách mua trả góp bị lỗi nhưng
            JAMILA.vn hết hàng đổi thì quý khách sẽ được đổi sang mã sản phẩm
            tương tự khác và bù trừ tiền chênh lệch (nếu có).
            <br />
            <br />
            - Sản phẩm đặt hàng theo yêu cầu của quý khách sẽ không được trả
            hàng.
            <br />
            <br />
          </p>
        </div>
        <div className="md:w-[40%] sm:w-[100%] p-1 my-auto h-1/2">
          <img
            src={salePolicyImg}
            alt="salepolicyImg"
            className="rounded-xl w-[100%] "
          />
        </div>
      </div>
    </div>
  );
};

export default Policy;
