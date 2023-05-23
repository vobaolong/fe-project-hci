import React, { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import WebFont from "webfontloader";
import Footer from "./components/layout/Footer/Footer";
import footerData from "./data/footerData.json";
import "./App.css";
import store from "./store";
import { loadUser } from "./actions/userAction";
import ElementWithRoutes from "./routes/ElementWithRoutes";
import axios from "axios";
import AdDialog from "./components/home/Banner/AdDialog";
import { useNavigate } from "react-router-dom";

function App() {
  const menuOptions = [
    {
      menuName: "Trang chủ",
      path: "/",
    },
    {
      menuName: "Sản phẩm",
      path: "/products",
    },
    {
      menuName: "Về chúng tôi",
      path: "/aboutus",
    },
    {
      menuName: "Liên hệ",
      path: "/contactus",
    },
  ];

  const [stripeApikey, setStripeApiKey] = useState("");

  const getStripeApiKey = async () => {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Raleway"],
      },
    });

    // loading user data
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  const [showAd, setShowAd] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const isAdClosed = localStorage.getItem("adClosed");
    if (!isAdClosed) {
      setShowAd(true); // Hiển thị dialog nếu chưa tắt trước đó
    }
  }, []);

  const handleAdClose = () => {
    localStorage.setItem("adClosed", "true");
    setShowAd(false);
  };

  const handleProductClick = () => {
    navigate("/products");
  };
  return (
    <>
      {showAd && (
        <AdDialog onClose={handleAdClose} onProductClick={handleProductClick} />
      )}
      {/* Navbar components */}
      <Navbar menuOptions={menuOptions} />

      {/* All routes */}
      <ElementWithRoutes stripeApiKey={stripeApikey} />

      {/* Footer component */}
      <Footer jsonData={footerData} />
    </>
  );
}

export default App;
