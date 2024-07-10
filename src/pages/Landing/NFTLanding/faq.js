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
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import moment from "moment";

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
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h3 className="mb-3 fw-semibold">Nashrlar va Obunalar</h3>
              </div>
            </Col>
          </Row>

          <Row className="g-lg-5 g-4">
            <Col lg={6}>
              <div className="d-flex align-items-center mb-2">
                <div className="flex-shrink-0 me-1">
                  <i className="ri-question-line fs-24 align-middle text-success me-1"></i>
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-0 fw-semibold">Nashrlar</h5>
                </div>
                <Link to="#" className="fs-13 fw-medium text-success">
                  Batafsil{" "}
                  <i className="ri-arrow-right-s-line align-bottom"></i>
                </Link>
              </div>
              <Accordion
                open={open}
                toggle={toggle}
                className="custom-accordionwithicon custom-accordion-border accordion-border-box accordion-success"
              >
                {signers?.map((res, i) => (
                  <AccordionItem key={res.id}>
                    <AccordionHeader targetId={`${i + 1}`}>
                      {res?.title}{" "}
                    </AccordionHeader>
                    <AccordionBody accordionId={`${i + 1}`}>
                      <ListGroup flush>
                        <ListGroupItem>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              2023 yil iyun uchun standartlar ro'yxati 1-qismi{" "}
                            </div>
                            <span>{moment().format("DD.MM.YYYY")}</span>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="d-flex justify-content-between align-items-center w-100">
                            <div>
                              2023 yil iyun uchun standartlar ro'yxati 2-qismi{" "}
                            </div>
                            <span>{moment().format("DD.MM.YYYY")}</span>
                          </div>
                        </ListGroupItem>
                      </ListGroup>
                    </AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </Col>
            <Col lg={6}>
              <div className="d-flex align-items-center mb-2">
                <div className="flex-shrink-0 me-1">
                  <i className="ri-question-line fs-24 align-middle text-success me-1"></i>
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-0 fw-semibold">Obunalar</h5>
                </div>
                <Link to="#" className="fs-13 fw-medium text-success">
                  Batafsil{" "}
                  <i className="ri-arrow-right-s-line align-bottom"></i>
                </Link>
              </div>
              <Accordion
                open={open2}
                toggle={toggle2}
                className="custom-accordionwithicon custom-accordion-border accordion-border-box accordion-success"
              >
                {obuna?.map((res, i) => (
                  <AccordionItem key={res.id}>
                    <AccordionHeader targetId={`${i + 1}`}>
                      {res?.title}{" "}
                    </AccordionHeader>
                    <AccordionBody accordionId={`${i + 1}`}>
                      <ListGroup flush>
                        <ListGroupItem>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>{res?.note} </div>
                            <div>{res?.info1} </div>
                            <span>{res?.value1}</span>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>{res?.note} </div>
                            <div>{res?.info2} </div>
                            <span>{res?.value2}</span>
                          </div>
                        </ListGroupItem>
                      </ListGroup>
                    </AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Faqs;
