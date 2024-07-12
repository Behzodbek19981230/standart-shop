import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import {
  Pagination,
  Navigation,
  Scrollbar,
  EffectFade,
  EffectCreative,
  Mousewheel,
  EffectFlip,
  EffectCoverflow,
  Autoplay,
} from "swiper";
import img1 from "../../../assets/images/small/img-1.svg";
import img2 from "../../../assets/images/small/img-2.svg";
import img3 from "../../../assets/images/small/img-3.svg";
import img4 from "../../../assets/images/small/img-4.svg";
import img5 from "../../../assets/images/small/img-2.svg";
import img6 from "../../../assets/images/small/img-4.jpg";
import img7 from "../../../assets/images/small/img-7.jpg";
import img8 from "../../../assets/images/small/img-8.jpg";
import img9 from "../../../assets/images/small/img-9.jpg";
import img10 from "../../../assets/images/small/img-3.svg";
import img11 from "../../../assets/images/small/img-11.jpg";
import img12 from "../../../assets/images/small/img-12.jpg";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";
export default function UsefulLinks() {
  const topCreatorData = [
    {
      id: 1,
      img: img1,
      title: "Texnik tartibga solish milliy axborot tizimi",
    },
    {
      id: 2,
      img: img2,
      title: "Standart loyihalari muhokamasi portali",
    },
    {
      id: 3,
      img: img3,
      title: "Nomuvofiq va sifatsiz mahsulotlar reestori",
    },
    {
      id: 4,
      img: img5,
      title: "E-sertifikat axborot tizimi",
    },
    {
      id: 5,
      img: img10,
      title: "Standartlar institutlar",
    },
    {
      id: 6,
      img: img3,
      title: "Oʼzbekiston texnik jihatdan tartibga solish agentligi",
    },
  ];
  return (
    <React.Fragment>
      <section className="section bg-light" id="creators">
        <Container>
          <div className="d-flex align-items-center mb-2">
            <div className="flex-grow-1">
              <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                Foydali havolalar
              </h2>
            </div>
          </div>

          <Row>
            <Col lg={12}>
              <div className="text-center mt-5">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  pagination={{
                    clickable: false,
                  }}
                  breakpoints={{
                    576: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  modules={[Autoplay]}
                  className="mySwiper swiper trusted-client-slider mt-sm-5 mt-4 mb-sm-5 mb-4"
                >
                  {" "}
                  {topCreatorData.map((item, key) => (
                    <SwiperSlide key={key}>
                      <Card className=" bg-soft-primary">
                        <CardBody>
                          <img
                            src={item.img}
                            alt="client-img"
                            width={200}
                            height={120}
                          />
                          <p
                            className=" mt-3 mb-0 text-card-elleps-id"
                            style={{ height: 50 }}
                          >
                            {item.title}
                          </p>
                        </CardBody>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
