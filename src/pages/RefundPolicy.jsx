import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const RefundPolicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row align-items-center justify-content-center">
          <div className="col-9">
            <div className="policy rounded-3">
              <h3 className="mb-5 d-flex text-capitalize align-items-center justify-content-center">
                refund policy
              </h3>
              <p>
                NALOVA do not accept returns, all sales are final. No refunds
                will be given for change of mind or incorrect sizing, so please
                ensure you are ordering the correct product.
              </p>
              <div className="border-bottom my-5"></div>
              <h3 className="mb-5 d-flex text-capitalize align-items-center justify-content-center">
                exchange policy
              </h3>
              <p>
                Size does not fit as expected? No problem.
                <br /> <br />
                You have 14 days from the delivery date to exchange your item.
                The merchandise has to be in its original condition, unused,
                with all tags and original packaging included.
                <br /> <br />
                STRICTLY NO REFUND OR EXCHANGE ON CLEARANCE OR SALE ITEMS.
                <br /> <br />
                Simply send us an email at baolong01.dev@gmail.com with your
                order number and the pair you would like to exchange for and we
                will provide you with a return address to send the shoes back.
                <br /> <br />
                Alternatively, you are more than welcome to pop into our show
                room and exchange in person.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RefundPolicy;
