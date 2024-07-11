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
              <div className=" custom-accordion-border accordion-border-box accordion-success landing accordion">
                {signers?.map((res, i) => (
                  <div className="accordion-item" key={i}>
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                      >
                        {res?.title}
                      </button>
                    </h2>
                  </div>
                ))}
              </div>
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
              <Card className="shadow-none">
                <CardBody>
                  <div className=" custom-accordion-border accordion-border-box accordion-success landing accordion">
                    <div className="table-responsive table-card">
                      <div className="accordion-item">
                        <table className="table table-nowrap table-centered align-middle mb-0">
                          <thead className=" text-muted">
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
