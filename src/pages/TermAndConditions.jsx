import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { terms } from "../utils/Data";

const TermAndConditions = () => {
  return (
    <>
      <Meta title={"Term And Conditions"} />
      <BreadCrumb title="Term And Conditions" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row align-items-center justify-content-center">
          <div className="col-9">
            <div className="policy rounded-3">
              <h3 className="mb-5 d-flex text-capitalize align-items-center justify-content-center">
                Term And Conditions
              </h3>
              <p>Last Updated: May 2023</p>
              {terms?.map((index) => {
                return (
                  <p key={index}>
                    <strong>{index.title}</strong>
                    <br />
                    {index.content}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndConditions;
