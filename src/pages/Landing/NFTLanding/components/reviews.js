import React from "react";
import { Col, Container, Row } from "reactstrap";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

const Reviews = () => {
  return (
    <React.Fragment>
      <section className="section bg-primary" id="services">
        <div className="bg-overlay bg-overlay-pattern"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center">
                <div>
                  <i className="ri-double-quotes-l text-primary display-3"></i>
                </div>
                <h4 className="text-white mb-5">Xizmatlar </h4>

                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  navigation={true}
                  loop={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  className="mySwiper swiper client-review-swiper rounded"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="row justify-content-center">
                        <div className="col-10">
                          <div className="text-white-50">
                            <p className="fs-20 ff-secondary mb-4">
                              Xalqaro va xorijiy standartlarni ta'minlash
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="row justify-content-center">
                        <div className="col-10">
                          <div className="text-white-50">
                            <p className="fs-20 ff-secondary mb-4">
                              Mudofaa mahsulotlarini standartlashtirish (DSOP)
                              va milliy cheklangan tarqatish standartlari (NSRS)
                              bo'yicha hujjatlarni taqdim etish
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="row justify-content-center">
                        <div className="col-10">
                          <div className="text-white-50">
                            <p className="fs-20 ff-secondary mb-4">
                              Obuna xizmati
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="row justify-content-center">
                        <div className="col-10">
                          <div className="text-white-50">
                            <p className="fs-20 ff-secondary mb-4">
                              To'g'ridan-to'g'ri qo'llash standartlari
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="row justify-content-center">
                        <div className="col-10">
                          <div className="text-white-50">
                            <p className="fs-20 ff-secondary mb-4">
                              Internet orqali “Bojxona ittifoqi. Texnik
                              reglament"
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="row justify-content-center">
                        <div className="col-10">
                          <div className="text-white-50">
                            <p className="fs-20 ff-secondary mb-4">
                              Indekslarga obuna
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="row justify-content-center">
                        <div className="col-10">
                          <div className="text-white-50">
                            <p className="fs-20 ff-secondary mb-4">
                              Standartlarni tarjima qilish
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                  <div className="swiper-button-next bg-white rounded-circle"></div>
                  <div className="swiper-button-prev bg-white rounded-circle"></div>
                  <div className="swiper-pagination position-relative mt-2"></div>
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Reviews;
