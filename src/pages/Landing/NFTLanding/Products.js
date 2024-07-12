import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { pricing1, topPerformers } from "../../../common/data";
import { pricing11 } from "../../../common/data/pagesData";
import { AnimatePresence, motion } from "framer-motion";
import FindJob from "../../Job_Landing/Job/FindJob";

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
                <Link to="#" className="fs-13 fw-medium text-primary">
                  Barchasi{" "}
                  <i className="ri-arrow-right-s-line align-bottom"></i>
                </Link>
              </div>
            </Col>
          </Row> */}
          {/* <Row>
            <Col lg={6}>
              <div className="d-flex align-items-center mb-2">
                <div className="flex-grow-1">
                  <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                    Mahsulotlar haqida
                  </h2>
                </div>
                <Link to="#" className="fs-13 fw-medium text-primary">
                  Barchasi{" "}
                  <i className="ri-arrow-right-s-line align-bottom"></i>
                </Link>
              </div>
              <Card>
                <CardBody>
                  <div className=" custom-accordion-border accordion-border-box accordion-primary landing accordion">
                    <div className="accordion-item">
                      <ul className="list-group list-group-flush   mb-0  ">
                        {(topPerformers || []).map((item, key) => (
                          <li
                            className="list-group-item d-flex align-items-center selected border-dishes "
                            key={key}
                          >
                            <div className="flex-grow-1 ms-3">
                              <h6 className="fs-14 mb-1">{item.coinName}</h6>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <div className="d-flex align-items-center mb-2">
                <div className="flex-grow-1">
                  <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                    Nashrlar
                  </h2>
                </div>
                <Link to="#" className="fs-13 fw-medium text-primary">
                  Barchasi{" "}
                  <i className="ri-arrow-right-s-line align-bottom"></i>
                </Link>
              </div>
              <Card>
                <CardBody>
                  <div className=" custom-accordion-border accordion-border-box accordion-primary landing accordion">
                    <div className="accordion-item">
                      <ul className="list-group list-group-flush  mb-0">
                        {(signers || []).map((item, key) => (
                          <li
                            className="list-group-item  d-flex align-items-center selected"
                            key={key}
                          >
                            <div className="flex-grow-1 ms-3">
                              <h6 className="fs-14 mb-1">{item.title}</h6>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="d-flex align-items-center mb-4">
                <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                  Mahsulotlar haqida
                </h2>
                <Link to="#" className="fs-13 fw-medium text-primary">
                  Barchasi{" "}
                  <i className="ri-arrow-right-s-line align-bottom"></i>
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            {(pricing11 || []).map((price1, key) => (
              <Col xxl={3} lg={6} key={key}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="pricing-box ribbon-box right">
                    <CardBody className="bg-light m-2 p-4">
                      <div
                        className="d-flex align-items-center mb-3"
                        style={{ height: 50 }}
                      >
                        <div className="flex-grow-1">
                          <h5 className="mb-0 fw-semibold">{price1.type}</h5>
                        </div>
                        <div className="ms-auto"></div>
                      </div>

                      <ul
                        className="list-unstyled vstack gap-3"
                        style={{ height: 350 }}
                      >
                        {price1.items.map((res, i) => (
                          <li key={i}>
                            <div className="d-flex">
                              <div className="flex-shrink-0 text-primary me-1">
                                <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                              </div>
                              <div className="flex-grow-1">{res}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 d-flex justify-content-end align-items-end flex-column">
                        <Link to="#" className="fs-13 fw-medium text-primary">
                          Batafsil{" "}
                          <i className="ri-arrow-right-s-line align-bottom"></i>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
          {/* <Row>
            <Col lg={6}>
              <div className="d-flex align-items-center mb-2">
                <div className="flex-grow-1">
                  <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                    Nashrlar
                  </h2>
                </div>
                <Link to="#" className="fs-13 fw-medium text-primary">
                  Barchasi{" "}
                  <i className="ri-arrow-right-s-line align-bottom"></i>
                </Link>
              </div>
              <Card>
                <CardBody>
                  <div className=" custom-accordion-border accordion-border-box accordion-primary landing accordion">
                    <div className="accordion-item">
                      <ul className="list-group list-group-flush  mb-0">
                        {(signers || []).map((item, key) => (
                          <li
                            className="list-group-item  d-flex align-items-center selected"
                            key={key}
                          >
                            <div className="flex-grow-1 ms-3">
                              <h6 className="fs-14 mb-1">{item.title}</h6>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
          <FindJob />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Products;
