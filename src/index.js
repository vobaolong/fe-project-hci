import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ScrollToTops = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer
      position="bottom-left"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <BrowserRouter>
      <ScrollToTops />
      <App />
      <ScrollToTop
        title="Go to top"
        smooth
        style={{
          justifyContent: "center",
          display: "grid",
          alignContent: "center",
          zIndex: 1000,
        }}
      />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
