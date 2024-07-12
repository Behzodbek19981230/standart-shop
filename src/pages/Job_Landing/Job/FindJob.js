import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import { findJob } from "../../../common/data/jobLanding";
import img1 from "../../../assets/images/companies/img-1.png";
import img5 from "../../../assets/images/companies/img-5.png";
import img2 from "../../../assets/images/companies/img-2.png";
import img7 from "../../../assets/images/companies/img-7.png";
import img8 from "../../../assets/images/companies/img-8.png";
import moment from "moment";
import { motion } from "framer-motion";
const FindJob = () => {
  return (
    <React.Fragment>
      <section className="section" id="findJob">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="d-flex align-items-center mb-4">
                <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                  Xizmatlar
                </h2>
                <Link to="#" className="fs-13 fw-medium text-success">
                  Barchasi{" "}
                  <i className="ri-arrow-right-s-line align-bottom"></i>
                </Link>
              </div>
            </Col>
          </Row>

          <Row>
            {findJob.map((item, key) => (
              <Col className="col-lg-6" key={key}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  // whileTap={{ scale: 0.9 }}
                  // transition={{ duration: 0.1 }}
                >
                  <Card className="shadow-lg pricing-box ribbon-box right">
                    {key % 3 == 0 ? (
                      <div className="ribbon-two ribbon-two-success">
                        <span>New</span>
                      </div>
                    ) : (
                      ""
                    )}

                    <CardBody>
                      <div className="d-flex">
                        <div className="avatar-sm">
                          <div className="avatar-title bg-soft-success rounded text-success">
                            {/* <img
                            src={item.company}
                            alt=""
                            className="avatar-xxs"
                          /> */}
                            {key + 1}
                          </div>
                        </div>
                        <div className="ms-3 flex-grow-1">
                          <Link to="#!">
                            <h5>{item.lable}</h5>
                          </Link>
                          <ul className="list-inline text-muted mb-3">
                            <li className="list-inline-item">
                              <i className="ri-calendar-2-line align-bottom me-1"></i>{" "}
                              {moment().format("DD MMM YYYY")}
                            </li>
                            <li className="list-inline-item">
                              <i className="  ri-folder-2-line align-bottom me-1"></i>{" "}
                              {354}
                            </li>
                          </ul>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-ghost-primary btn-icon custom-toggle"
                            data-bs-toggle="button"
                          >
                            <span className="icon-on">
                              <i className="ri-bookmark-line"></i>
                            </span>
                            <span className="icon-off">
                              <i className="ri-bookmark-fill"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default FindJob;
