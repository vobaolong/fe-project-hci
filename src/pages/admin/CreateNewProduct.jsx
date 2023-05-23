import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../actions/productAction";
import Button from "../../components/user/Button";
import MetaData from "../../components/layout/MetaData";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  AccountTree,
  Description,
  Storage,
  Spellcheck,
  AttachMoney,
  DiscFullOutlined,
} from "@material-ui/icons";
import SideBar from "../../components/admin/Sidebar";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import InputField from "../../components/user/InputField";
import { useNavigate } from "react-router-dom";
import { brands } from "../../data/brand";
import { toast } from "react-toastify";

const CreateNewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, success, loading } = useSelector((state) => state.newProduct);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Thêm sản phẩm thành công");
      navigate("/admin/products");

      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, error, navigate, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", productName);
    myForm.set("price", price);
    myForm.set("discount", discount);
    myForm.set("description", description);
    myForm.set("brand", brand);
    myForm.set("stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title={`Sản phẩm | Admin`} />

      {/* dashboard */}
      <div className="dashboardStyle">
        <div className="sidebarStyle">
          <SideBar />
        </div>

        <div className="dashboardRightBoxStyle">
          <div className="mb-5">
            <p className="upper text-center text-2xl font-bold text-gray-400">
              Thêm sản phẩm
            </p>
          </div>

          <form
            className="w-[90%]  md:w-[50%] mx-auto shadow-lg bg-white p-10 rounded-md"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <div className="w-full mb-2">
              <div className="flex gap-2 justify-evenly flex-col h-full ">
                <InputField
                  type="text"
                  name="productName"
                  label="Vui lòng nhập tên sản phẩm"
                  Icon={Spellcheck}
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                <InputField
                  type="number"
                  name="price"
                  label="Vui lòng nhập nhập giá sản phẩm"
                  Icon={AttachMoney}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <InputField
                  type="number"
                  name="discount"
                  label="Vui lòng nhập giảm giá nếu có"
                  Icon={DiscFullOutlined}
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />

                <div className="bg-slate-400 rounded-lg overflow-hidden w-full flex justify-start items-center">
                  <Description className="text-xl text-primaryBlue mx-2" />
                  <ReactQuill
                    style={{ background: "white", width: "100%" }}
                    className="flex gap-2 justify-evenly flex-col h-full"
                    placeholder="Vui lòng nhập mô tả sản phẩm *"
                    value={description}
                    onChange={setDescription}
                  />
                </div>
                <div className="bg-slate-400 rounded-lg overflow-hidden w-full flex justify-start items-center">
                  <AccountTree className="text-xl text-primaryBlue mx-2" />
                  <select
                    className="px-3 py-2 outline-none border-2 w-full cursor-pointer"
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    <option disabled value="">
                      Vui lòng chọn thương hiệu *
                    </option>
                    {brands?.map((brand, index) => {
                      return (
                        <option key={index} value={brand}>
                          {brand}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <InputField
                  type="number"
                  name="stock"
                  label="Vui lòng nhập số lượng sản phẩm"
                  Icon={Storage}
                  value={Stock}
                  onChange={(e) => setStock(e.target.value)}
                />
                <div className="w-full flex items-center gap-5">
                  <input
                    className="avatarChoose w-full border-2 rounded-lg "
                    type="file"
                    name="avatar"
                    accept="image"
                    multiple
                    onChange={createProductImagesChange}
                  />
                </div>
                <div className="w-full flex justify-center items-center my-5 gap-5 overflow-auto ">
                  {imagesPreview.map((image, index) => (
                    <img
                      key={index}
                      className="w-[10vmax] h-[10vmax] tall:w-[5vmax] tall:h-[5vmax]"
                      src={image}
                      alt="Product Preview"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-fit mx-auto">
              <Button
                type="submit"
                disabled={loading ? true : false}
                label="Thêm"
              />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateNewProduct;
