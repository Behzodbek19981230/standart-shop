import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Collapse,
  Accordion,
  AccordionItem,
  AccordionBody,
  ListGroup,
  ListGroupItem,
  AccordionHeader,
  CardBody,
  Card,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import moment from "moment";
import SimpleBar from "simplebar-react";

const Faqs = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const [open2, setOpen2] = useState("1");
  const toggle2 = (id) => {
    if (open2 === id) {
      setOpen2();
    } else {
      setOpen2(id);
    }
  };
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
  ];
  const obuna = [
    {
      id: 1,
      title: " Национальные стандарты (ИУС)",
      note: "Информационный указатель",
      info1: "Цена за номер (1 экз.), руб",
      value1: "3850,00",
      info2: "Цена в рублях, с НДС 10 %",
      value2: "3850,00",
    },
    {
      id: 2,
      title: " Технические условия (ИУТУ)",
      note: "Информационный указатель",
      info1: "Цена за номер (1 экз.), руб",
      value1: "3850,00",
      info2: "Цена в рублях, с НДС 10 %",
      value2: "3850,00",
    },
  ];
  return (
    <React.Fragment>
      <section className="section" id="publications">
        <Container>
          <Row className="g-lg-5 g-4">
            <Col lg={6}>
              <div className="d-flex align-items-center mb-2">
                <div className="flex-grow-1">
                  <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                    Xizmatlar
                  </h2>
                </div>
                <Link to="#" className="fs-13 fw-medium text-success">
                  Barchasi{" "}
                  <i className="ri-arrow-right-s-line align-bottom"></i>
                </Link>
              </div>
              <Card>
                <CardBody>
                  <div className=" custom-accordion-border accordion-border-box accordion-success border-none landing accordion">
                    <div className="accordion-item">
                      <ul className="list-group list-group-flush  mb-0">
                        {(signers || []).map((item, key) => (
                          <li
                            className="list-group-item d-flex align-items-center selected border-0"
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
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <div className="d-flex align-items-center mb-2">
                <div className="flex-grow-1">
                  <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                    Obunalar
                  </h2>
                </div>
                <Link to="#" className="fs-13 fw-medium text-success">
                  Barchasi{" "}
                  <i className="ri-arrow-right-s-line align-bottom"></i>
                </Link>
              </div>
              <Card>
                <CardBody>
                  <div className=" custom-accordion-border accordion-border-box accordion-success landing accordion">
                    <div className="table-responsive ">
                      <div className="accordion-item">
                        <table className="table table-nowrap table-centered align-middle mb-0 border-success table-borderless">
                          <thead className=" text-muted border-0 ">
                            <tr>
                              <th scope="col">Наименования издания</th>
                              <th scope="col">Цена за номер (1 экз.), руб</th>
                              <th scope="col">Цена в рублях, с НДС 10 %</th>
                            </tr>
                          </thead>

                          <tbody>
                            {(obuna || []).map((item, key) => (
                              <tr key={key}>
                                <td className="fw-medium">
                                  {item.title}
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 me-1 text-muted fs-13">
                                      {item.note}
                                    </div>
                                  </div>
                                </td>
                                <td className="text-muted">
                                  <span>{item.value1}</span>
                                </td>

                                <td className="text-muted">
                                  <span>{item.value2}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Faqs;
