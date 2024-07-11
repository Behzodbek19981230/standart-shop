import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { topPerformers } from "../../../common/data";

const Products = () => {
  const signers = [
    {
      id: 1,
      title: "2023 yil oktyabr-noyabr oylari uchun standartlar ro'yxati",
    },
    {
      id: 2,
      title: "2023 yil avgust-sentyabr oylari uchun standartlar ro'yxati.",
    },
    {
      id: 3,
      title: "2023 yil iyul oyi uchun standartlar ro'yxati.",
    },
    {
      id: 4,
      title: "2023 yil iyun uchun standartlar ro'yxati",
    },
    {
      id: 5,
      title: "2023 yil iyun uchun standartlar ro'yxati",
    },
    {
      id: 6,
      title: "2023 yil iyun uchun standartlar ro'yxati",
    },
  ];
  return (
    <React.Fragment>
      <section className="section" id="product">
        <Container>
          {/* <Row className="justify-content-center">
            <Col lg={12}>
              <div className="d-flex align-items-center mb-4">
                <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                  Mahsulotlar haqida
                </h2>
                <Link to="#" className="fs-13 fw-medium text-success">
                  Barchasi{" "}
                  <i className="ri-arrow-right-s-line align-bottom"></i>
                </Link>
              </div>
            </Col>
          </Row> */}
          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader className="align-items-center d-flex justify-content-between">
                  <h2 className=" mb-0 fw-semibold lh-base flex-grow-1">
                    Mahsulotlar haqida
                  </h2>
                  <Link to="#" className="fs-13 fw-medium text-success">
                    Barchasi{" "}
                    <i className="ri-arrow-right-s-line align-bottom"></i>
                  </Link>
                </CardHeader>
                <CardBody className="p-0">
                  <ul className="list-group list-group-flush border-dashed mb-0">
                    {(topPerformers || []).map((item, key) => (
                      <li
                        className="list-group-item d-flex align-items-center selected"
                        key={key}
                      >
                        {/* <div className="flex-shrink-0">
                          <img src={item.img} className="avatar-xs" alt="" />
                        </div> */}
                        <div className="flex-grow-1 ms-3">
                          <h6 className="fs-14 mb-1">{item.coinName}</h6>
                          {/* <p className="text-muted mb-0">
                            ${item.marketCap} Billions
                          </p> */}
                        </div>
                        {/* <div className="flex-shrink-0 text-end">
                          <h6 className="fs-14 mb-1">${item.price}</h6>
                          <p className={"fs-12 mb-0 text-" + item.textColor}>
                            {item.change} ({item.percentage})
                          </p>
                        </div> */}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardHeader className="align-items-center d-flex justify-content-between">
                  <h2 className=" mb-0 fw-semibold lh-base flex-grow-1">
                    Nashrlar{" "}
                  </h2>
                  <Link to="#" className="fs-13 fw-medium text-success">
                    Barchasi{" "}
                    <i className="ri-arrow-right-s-line align-bottom"></i>
                  </Link>
                </CardHeader>
                <CardBody className="p-0">
                  <ul className="list-group list-group-flush border-dashed mb-0">
                    {(signers || []).map((item, key) => (
                      <li
                        className="list-group-item d-flex align-items-center selected"
                        key={key}
                      >
                        {/* <div className="flex-shrink-0">
                          <img src={item.img} className="avatar-xs" alt="" />
                        </div> */}
                        <div className="flex-grow-1 ms-3">
                          <h6 className="fs-14 mb-1">{item.title}</h6>
                          {/* <p className="text-muted mb-0">
                            ${item.marketCap} Billions
                          </p> */}
                        </div>
                        {/* <div className="flex-shrink-0 text-end">
                          <h6 className="fs-14 mb-1">${item.price}</h6>
                          <p className={"fs-12 mb-0 text-" + item.textColor}>
                            {item.change} ({item.percentage})
                          </p>
                        </div> */}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Products;
