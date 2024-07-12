import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { categories } from "../../../common/data/jobLanding";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Field() {
  return (
    <div className="py-4">
      <div className="d-flex align-items-center mb-2">
        <div className="flex-grow-1">
          <h2 className="mb-0 fw-semibold lh-base flex-grow-1">Sohalar</h2>
        </div>
      </div>
      <Row className="justify-content-center ">
        {categories.map((item, key) => (
          <Col lg={2} md={6} key={key}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-none text-center landing-hover-card ">
                <CardBody style={{ height: 150 }}>
                  <div className="avatar-sm position-relative mb-4 mx-auto">
                    <div className="job-icon-effect"></div>
                    <div className="avatar-title bg-transparent text-primary rounded-circle">
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <Link to="#!" className="to-link" style={{ height: 80 }}>
                    <h5 className="fs-17 pt-1 text-card-elleps-id">
                      {item.lable}
                    </h5>
                  </Link>
                </CardBody>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
      <div className="w-100 d-flex justify-content-center">
        {" "}
        <Link to="#" className="fs-13 fw-medium text-primary">
          Barchasi ko'rish
          <i className="ri-arrow-right-s-line align-bottom"></i>
        </Link>
      </div>
    </div>
  );
}
