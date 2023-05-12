import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shipping Policy"} />
      <BreadCrumb title="Shipping Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row align-items-center justify-content-center">
          <div className="col-9">
            <div className="policy rounded-3">
              <h3 className="mb-5 d-flex text-capitalize align-items-center justify-content-center">
                shipping policy
              </h3>
              <p className="text-decoration-underline fw-bolder">
                Free Shipping
              </p>
              <p className="justify">
                Shoe Store offers FREE Shipping on orders $100 or more,
                exclusions apply.
                <br />
                <br /> Exclusions include:
                <br />
                <br />
                <ul>
                  <li>
                    Only valid for continental VietNam. Does not include Korea,
                    Japan, and other ASIAN. territories
                  </li>
                  <li>New releases and limit one product excluded</li>
                  <li>
                    May not be combined with any other offers unless
                    communicated
                  </li>
                </ul>
                <br />
                Shipping will be calculated at checkout. We do not ship to
                international addresses, and post office boxes (P.O. box).
                <br />
                At this moment we do not offer Next Day or Second Day shipping.
                We also do not offer pick up in store or return in store.
                <br />
                Once order has been placed and shipped you will receive a
                shipping and tracking email.
              </p>
              <p className="text-decoration-underline fw-bolder">
                Shipping Costs and delivery days:
              </p>
              <table className="table rounded-corners">
                <thead>
                  <tr className="table-active">
                    <th className="col-3" scope="col">
                      SHIPPING
                    </th>
                    <th scope="col">
                      COSTS, EXCLUSIONS, AND LIMITATIONS BASED ON ONE (1) ITEM
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      Flat Rate Shipping<sup>1</sup>
                    </th>
                    <td>
                      <li>Korea/Japan: $27.95</li>
                      <li>Limit One Per Customer: $18.95 or $26.95</li>
                      <li>Accessories: $6.95</li>
                      <li>Footwear - Releases: $10.95</li>
                      <li>Footwear - Non-Releases: $9.95</li>
                      <li>Footwear - Sale: $8.95</li>
                      <li> Footwear - Converse and Vans $6.95</li>
                      <li>Free Shipping $0.00</li>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Processing Time<sup>2</sup>
                    </th>
                    <td>
                      <li>Monday - Friday </li>
                      <li>0 - 2 business days</li>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Shipping Transit Time<sup>3</sup>
                    </th>
                    <td colspan="2">1 - 5 business days</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <p className="policy-sup justify">
                <li>
                  <sup>1</sup> Our Flat Rate Shipping is a flat rate independent
                  of the carrier, destination (continental USA vs.
                  Alaska/Hawaii), residential or business address, item weight,
                  packaging dimensions, or other considerations and includes
                  such things as shipping, packaging, handling costs, insurance,
                  fraud, etc.
                </li>
                <li>
                  <sup>2</sup> Typical processing time. Please allow extra time
                  during major launches or holidays.
                </li>
                <li>
                  <sup>3</sup> West coast orders are received faster.
                </li>
              </p>
              <p className="text-decoration-underline fw-bolder">
                Important Shipping Information:
              </p>
              <br />
              <p className="justify">
                <strong>COVID-19</strong>
                <br />
                <br />
                <p>
                  NALOVA has greatly reallocated staff to handle the increased
                  orders from COVID-19. Most orders are processed in 1 to 2
                  business days, but please allow 3 to 5 business days before
                  inquiring about your order. We ship Monday through Friday
                  only, excluding holidays. *PLEASE NOTE: due to COVID-19
                  resources may be limited at certain times causing shipping
                  days to be pushed back. We appreciate your time and patience
                  during these times.
                </p>
                <br />
                <strong>Fraudulent Orders</strong>
                <br />
                <br />
                <p>
                  Fraudulent orders are subject to verification. E-commerce
                  fraud is an industry-wide problem, please be patient and
                  respond to any order confirmation inquiries so that we can get
                  your order out ASAP.
                </p>
                <br />
                <strong>Lost or Damaged Shipments</strong>
                <br />
                <br />
                <p>
                  NALOVA is not responsible for lost or damaged items in
                  transit. A shipping confirmation email is sent once your order
                  is shipped. This email includes the order details with the
                  tracking information to track your order. If the shipment
                  tracking status shows 'Delivered' and the shipment is still
                  'lost' for reasons such as if the buyer is not available to
                  receive the package OR if the shipment is left at doorstep,
                  NALOVA is not responsible for the shipment becoming lost or
                  stolen in these conditions. It is the buyer's responsibility
                  to make proper arrangements for receiving the expected
                  package.
                  <br />
                  <br />
                  In the event of lost shipments, our customer service team will
                  help you file a claim with the shipping carrier. If your
                  package is lost, please contact our Customer Service to help
                  you file a claim.
                  <br />
                  <br />
                  Please note, to effectively file a claim, you must contact our
                  customer service team within 14 days of receiving your
                  tracking information. Once the claim is filed and all
                  investigations have taken place regarding the lost package,
                  the shipping carrier will reimburse up to a maximum amount of
                  $100. Shipping reimbursement is dependent on the shipping
                  company's policies and procedures.
                  <br />
                  <br />
                  NALOVA is not responsible for reimbursing any additional
                  amount than what is covered by the shipping carrier.
                </p>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;
