import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { about, faqs } from "../utils/Data";

const Faqs = () => {
  return (
    <>
      <Meta title={"FAQs"} />
      <BreadCrumb title="FAQs" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row align-items-center justify-content-center">
          <div className="col-9">
            <div className="policy rounded-3">
              <h3 className="mb-5 d-flex text-capitalize align-items-center justify-content-center">
                FAQs
              </h3>
              <div class="accordion" id="accordionExample">
                {faqs?.map((faq, index) => {
                  return (
                    <div class="accordion-item" key={index}>
                      <h2 class="accordion-header" id={`heading-${index}`}>
                        <button
                          class="accordion-button fs-6 fw-bolder"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${index}`}
                          aria-expanded="true"
                          aria-controls={`collapse-${index}`}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse-${index}`}
                        class="accordion-collapse collapse"
                        aria-labelledby={`heading-${index}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div
                          style={{ textAlign: "justify" }}
                          class="accordion-body ms-2"
                        >
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Faqs;
