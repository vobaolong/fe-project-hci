import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumb title="Privacy Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row align-items-center justify-content-center">
          <div className="col-9">
            <div className="policy rounded-3 justify">
              <h3 className="mb-5 d-flex text-capitalize align-items-center justify-content-center">
                privacy policy
              </h3>
              <p className="border-1"></p>
              <p>
                <span>Effective as of May 1, 2023 (the “Effective Date”).</span>
              </p>
              <br />
              <p>
                <strong>1. Introduction</strong>
                <br />
                We, NALOVA, reserve the right to modify this privacy policy (the
                “Policy”) at any time, and we will notify you of any material
                changes to the Policy by posting the modified Policy here and
                changing the Effective Date at the top. We encourage you to
                check this page periodically for any changes. This Policy is
                incorporated into, and subject to, NALOVA's Terms & Conditions
                here. By using or navigating NALOVA's web site located at
                www.shoesstore.com or any mobile applications, widgets,
                plug-ins, or any other products or services offered by NALOVA
                (collectively, the “Services”), you acknowledge that you have
                read, understand, and agree to be bound by this Policy or any
                modified Policy as posted. If you do not agree to these terms,
                please do not use or access the Services.
              </p>
              <br />
              <p>
                <strong>2. Information Collected</strong>
                <br />
                All credit/debit cards details and personally identifiable
                information will NOT be stored, sold, shared, rented or leased
                to any third parties. We do not collect personally identifiable
                information except where you specifically provide us with such
                information. With your consent, we may collect your full name,
                e-mail address, street address, telephone number, and other
                contact information. Our payment gateways, which are operated by
                third parties, may also collect personal data from you (please
                refer to the payment gateway's privacy policy for more
                information). We generally collect this personal information on
                our registration and order forms when you sign up to receive
                products or services through us.
                <br />
                <br />
                Aggregate technical information (such as IP addresses, screen
                resolution, browser language, etc.) and anonymous demographic
                information (such as your postal or zip code, the web site that
                you came from, etc.) is collected during your usage of the
                Services.
              </p>

              <br />
              <p>
                <strong>3. Use of Information</strong>
                <br />
                We use personal information and other demographic or profile
                information you provide to us to fulfil your orders or requests,
                to attempt to prevent fraudulent transactions, to improve the
                content of our web page in order to enhance your experience, and
                to contact you when necessary.
                <br />
                <br />
                Whenever possible, we use non-identifiable information (such as
                IP addresses and anonymous demographic information) rather than
                personal information. Non-identifiable information is used to
                tailor your experiences with our Services by showing content in
                which we think you will be interested and displaying content
                according to your preferences. We may use aggregate data for a
                variety of purposes, including analysing user behaviour and
                characteristics in order to measure interest in (and use of) the
                various portions and areas of our Services. We also use the
                information collected to evaluate and improve our Services and
                analyse traffic to our Services.
                <br /> <br />
                NALOVA is hosted on Shopify Inc. They provide Sneaker State with
                the online e- commerce platform that allows us to sell our
                services to you. Your data is stored through Shopify's data
                storage, databases and the general Shopify application. They
                collect and store your personal information on a secure server
                behind a firewall. However, in some instances, your personal
                information may be transferred, stored, and/or processed in
                other jurisdictions. It is important for you to note that the
                laws on holding data in any country in which we transfer, store
                or process your data may be less stringent than the laws of your
                country, but NALOVA intends to adhere to the principles set
                forth in this Policy, unless otherwise required by applicable
                laws. By using our Services, you consent to the transfer of your
                personal information to any country in the world in accordance
                with the terms of this Policy.
              </p>
              <br />
              <p>
                <strong>4. Security</strong>
                <br />
                The portions of our website (and our other Services) that handle
                sensitive confidential information are secured with Shopify
                Inc.'s SSL security technology and are compliant with the
                Payment Card Industry Data Security Standard (PCI DSS). We are
                committed to maintaining the security of your information and
                have measures in place to protect against the loss, misuse, and
                alteration of the information under our control. All Sneaker
                State employees who have access to, or are associated with, the
                processing of personal information are contractually obligated
                to respect the confidentiality of your information and abide by
                the privacy standards we have established. Please be aware that
                no security measures are perfect or impenetrable. Therefore,
                although we use industry standard practices to protect your
                privacy, we cannot (and do not) guarantee the absolute security
                of personal information.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
