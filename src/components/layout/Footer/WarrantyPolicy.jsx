import React from "react";
import quyDinhBaoHanhImg from "../../../assets/quydinhbaohanh.png";
import MetaData from "../MetaData";
const WarrantyPolicy = () => {
  return (
    <>
      <MetaData title={`JAMILA | Bảo hành`} />

      <div className="h-full flex mt-28 m-10 bg-white rounded-lg flex-wrap py-2 md:py-3 lg:mx-40 md:mx-4 sm:mx-2 justify-center">
        <div className="w-[100%] px-5">
          <h1 className="text-primaryBlue text-3xl font-semibold uppercase tracking-widest m-10 text-center">
            Chính sách bảo hành
          </h1>
          <br />
          <br />
        </div>
        <div className="w-[100%] mx-10 my-5">
          <img
            src={quyDinhBaoHanhImg}
            alt="quydinhbaohanhImg"
            className="rounded-xl w-[100%] shadow"
          />
        </div>
        <div class="w-[100%] px-5">
          <p class="lg:text-lg md:text-base sm:text-sm text-mainColor lg:mx-10 md:mx-5 sm:mx-3 text-justify leading-relaxed">
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
            - Các sản phẩm có dấu hiệu dung dịch lạ, có nước vào, có vết ẩm ướt,
            bị trầy xước, biến dạng hoặc các hiện tượng được cho là do lỗi cá
            nhân gây ra. Hoặc nếu được nhận BH, khách hàng phải hoàn toàn chịu
            chi phí phát sinh đối với các lỗi đó..
            <br />
            <br />- Không bảo hành đối với quà khuyến mãi của cửa hàng.
          </p>
        </div>
      </div>
    </>
  );
};

export default WarrantyPolicy;
