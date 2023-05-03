import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { brands, famous, services } from "../utils/Data.js";
import banner from "../images/catbanner-01.png";
import mainBanner from "../images/main-banner-1.png";
import logo1 from "../images/vans.png";
import logo2 from "../images/run1.png";
import logo3 from "../images/run3.png";
import air from "../images/air.png";

import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../features/blogs/blogSlice";

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.singleBlog);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    getblog();
  }, []);

  const getblog = () => {
    dispatch(getBlog(getBlogId));
  };

  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src={mainBanner}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>CLASSIC SINCE FOREVER</h4>
                <h5>Converse Chuck Taylor All Star Hi Sneakers</h5>
                <p>
                  <strike className="text-secondary">$86.21</strike> &nbsp;
                  <span className="text-danger">$43.10</span>
                </p>
                <Link to="/product" className="button">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={banner}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>Air Jordan</h5>
                  <p>
                    <strike className="text-secondary">$86</strike> &nbsp;
                    <span className="text-danger">$72</span>
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={banner}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>Air Jordan</h5>
                  <p>
                    <strike className="text-secondary">$86</strike> &nbsp;
                    <span className="text-danger">$72</span>
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={banner}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>Air Jordan</h5>
                  <p>
                    <strike className="text-secondary">$86</strike> &nbsp;
                    <span className="text-danger">$72</span>
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={banner}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>Air Jordan</h5>
                  <p>
                    <strike className="text-secondary">$86</strike> &nbsp;
                    <span className="text-danger">$72</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 pt-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((index) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={index}>
                    <img src={index.image} alt="services" />
                    <div>
                      <h6>{index.title}</h6>
                      <p className="mb-0">{index.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Vans Shoes</h6>
                  <p>22 Items</p>
                </div>
                <img src={logo1} alt="camera" className="img-fluid" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Run Shoes</h6>
                  <p>20 Items</p>
                </div>
                <img src={logo2} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Shoes Run</h6>
                  <p>20 Items</p>
                </div>
                <img src={logo3} alt="shoes" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Air Max</h6>
                  <p>10 Items</p>
                </div>
                <img src={air} alt="shoes" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Vans Shoes</h6>
                  <p>22 Items</p>
                </div>
                <img src={logo1} alt="camera" className="img-fluid" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Run Shoes</h6>
                  <p>20 Items</p>
                </div>
                <img src={logo2} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Shoes Run</h6>
                  <p>20 Items</p>
                </div>
                <img src={logo3} alt="shoes" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Air Max</h6>
                  <p>10 Items</p>
                </div>
                <img src={air} alt="shoes" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5 famous-wrapper">
        <div className="row">
          {famous?.map((index) => {
            return (
              <div className="col-3" key={index}>
                <div className="famous-card position-relative">
                  <img src={index.img} className="img-fluid" alt="famous" />
                  <div className="famous-content position-absolute">
                    <h5 className="text-warning">{index.brand}</h5>
                    <h6 className="text-secondary">{index.collection}</h6>
                    <Link to="/product" className="mt-5 p-2 button">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5 special-wrapper">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row pt-5">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="home-wrapper-2 popular-wrapper">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5 marque-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                {brands?.map((index) => {
                  return (
                    <div className="mx-4 w-25">
                      <img src={index.image} alt="brand" />
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5 blog-wrapper">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row py-5">
          {blogState &&
            blogState?.map((item, index) => {
              if (index < 3) {
                return (
                  <div className="col-3 mb-3" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format(
                        "MMMM Do YYYY, h:mm a"
                      )}
                    />
                  </div>
                );
              }
            })}
        </div>
      </Container>
    </>
  );
};

export default Home;
