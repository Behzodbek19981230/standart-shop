import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { featuredCompany } from "../../../../../common/data/dashboardJobs";
import moment from "moment";
import pngImage from "../../../../../assets/images/pdf.png";
import wordImage from "../../../../../assets/images/word.png";
import excelImage from "../../../../../assets/images/excel.png";
export default function ListDocument() {
  return (
    <div>
      <div className="d-flex align-items-center mb-2">
        <div className="flex-grow-1">
          <h2 className="mb-0 fw-semibold lh-base flex-grow-1">Hujjatlar</h2>
        </div>
      </div>{" "}
      <Row className="gy-2 mb-2" id="candidate-list">
        {featuredCompany.map((item, key) => (
          <Col xxl={12} md={12} key={key}>
            <Card className="ribbon-box right overflow-hidden">
              <CardBody>
                {/* <div
                  className={`ribbon ribbon-${item.bgColor} ribbon-shape trending-ribbon`}
                >
                  <i className={` ${item.img} text-white align-bottom`}></i>
                  <span className="trending-ribbon-text">
                    {item.bgColor == "success"
                      ? "Amalda"
                      : item.bgColor == "danger"
                      ? "Amalda emas"
                      : "Kutilmoqda"}
                  </span>
                </div> */}
                <div className="d-flex  w-100  justify-content-between">
                  <div className="flex-shrink-0 ">
                    <div
                      className="me-2 flex-shrink-0"
                      style={{ width: 80, height: 80 }}
                    >
                      <div
                        className={
                          "avatar-title fs-2 bg-soft-" +
                          item.bgColor +
                          " rounded text-" +
                          item.bgColor
                        }
                      >
                        <i className={` ${item.img}`}></i>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <a href="/pages-profile">
                      <h5 className="fs-16 mb-1">{item.lable}</h5>
                    </a>
                    <p className="text-muted mb-2">{item.designation}</p>

                    <div className="d-flex flex-wrap gap-2 align-items-center">
                      <p className="btn btn-sm btn-soft-secondary">
                        {item.lang}
                      </p>
                      {key % 3 == 1 && (
                        <p className="ml-2 btn btn-sm btn-soft-secondary">
                          {"English"}
                        </p>
                      )}

                      {/* <div className="text-muted">{item.rating[1]}</div> */}
                    </div>

                    <CardHeader className="p-0 card-footer border-bottom-0 border-top-dashed">
                      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                        <div className="d-flex align-items-center gap-3">
                          <div className="fs-5 text-primary">
                            <i className="ri-user-3-line align-bottom me-1"></i>
                            {key * 10 + 2}
                          </div>
                          <div className="fs-5 text-primary">
                            <i className="ri-time-line align-bottom me-1"></i>
                            <span className="job-postdate ">
                              {moment().format("DD.MM.yyyy")}
                            </span>
                          </div>
                          <div className="fs-5 text-primary fw-bold">
                            <i className=" ri-currency-line align-bottom me-1"></i>
                            {key * 10 + 2} $
                          </div>
                        </div>
                        <div className="w-50 d-flex gap-3 justify-content-end">
                          <Link to="/" className="p-0  ">
                            {" "}
                            <div
                              style={{ fontSize: 24 }}
                              dangerouslySetInnerHTML={{ __html: item.format }}
                            />
                          </Link>
                          <Link to="/" className="p-0  ">
                            <i
                              className=" ri-eye-line align-bottom "
                              style={{ fontSize: 24 }}
                            ></i>
                          </Link>
                          <Link to="/" className="p-0  ">
                            <i
                              className="ri-shopping-cart-line align-bottom "
                              style={{ fontSize: 24 }}
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </CardHeader>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
