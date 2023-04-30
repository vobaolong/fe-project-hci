import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import blog from "../images/blogs/blog1.png";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../features/blogs/blogSlice";

const SingleBlog = () => {
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
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <i class="fa-solid fa-arrow-left fs-4">Go back to Blogs</i>
                {/* <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs */}
              </Link>
              <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
              <img
                src={blogState?.images[0].url ? blogState?.images[0].url : blog}
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: blogState?.description,
                }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
