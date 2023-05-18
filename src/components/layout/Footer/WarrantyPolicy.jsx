import React from "react";
import quyDinhBaoHanhImg from "../../../assets/quydinhbaohanh.png";
import MetaData from "../MetaData";
const WarrantyPolicy = () => {
  return (
    <>
      <MetaData title={`JAMILA | Bảo hành`} />

      <div className="h-full flex mt-28 m-10 bg-secColor rounded-3xl flex-wrap py-2 md:py-3 lg:mx-40 md:mx-4 sm:mx-2 justify-center">
        <div className="w-[100%] px-5">
          <h1 className="text-primaryBlue text-3xl font-semibold uppercase tracking-widest mt-5 text-center">
            Chính sách bảo hành
          </h1>
          <br />
          <br />
        </div>
        <div className="w-[100%] mx-10 my-5">
          <img
            src={quyDinhBaoHanhImg}
            alt="quydinhbaohanhImg"
            className="rounded-xl w-[100%] "
          />
        </div>
        <div class="w-[100%] px-5">
          <p class="lg:text-lg md:text-md sm:text-sm text-mainColor lg:mx-10 md:mx-5 sm:mx-3 text-justify leading-relaxed">
            <br />
            <strong>1. Điều kiện nhận bảo hành tại JAMILA</strong>
            <br />
            <br />
            - Đối với các sản phẩm, thiết bị được cấp phiếu bảo hành (PBH),
            khách hàng phải xuất trình PBH và có đầy đủ tem bảo hành của JAMILA
            (nếu thiết bị không cấp PBH thì phải còn nguyên tem của JAMILA) và
            phải còn trong thời hạn bảo hành.
            <br />
            <br />
            - Tem bảo hành, mã vạch số serial,… của sản phẩm phải còn nguyên
            vẹn, không có dấu hiệu cạo sửa, tẩy xóa, bị rách, mờ.
            <br />
            <br />
            - Những hư hỏng của thiết bị được xác định do lỗi kỹ thuật hoặc lỗi
            của nhà sản xuất.
            <br />
            <br />
            <strong>2. Không nhận bảo hành tại JAMILA</strong>
            <br />
            <br />
            - Các sản phẩm, thiết bị có dấu hiệu dung dịch lạ, có nước vào, có
            vết ẩm ướt, bị đứt mạch, bị trầy xước, bể mẻ, móp méo, biến dạng, có
            dấu hiệu cháy nổ, nám, phù tụ, gỉ sét hoặc các hiện tượng được cho
            là do lỗi cá nhân gây ra. Hoặc nếu được nhận BH, khách hàng phải
            hoàn toàn chịu chi phí phát sinh đối với các lỗi đó..
            <br />
            <br />
            - Thiết bị hư hỏng do thiên tai, hỏa hoạn, sử dụng nguồn điện không
            ổn định hoặc do lắp đặt, vận chuyển không đúng quy cách, …
            <br />
            <br />
            - Không bảo hành đối với quà khuyến mãi của cửa hàng.
            <br />
            <br />
            Đặc biệt: không nhận BH về dữ liệu trong các thiết bị lưu trữ, bản
            quyền phần mềm.
            <br />
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default WarrantyPolicy;
