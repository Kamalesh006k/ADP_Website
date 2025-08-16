import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import ContactForm from "../components/ContactForm"; 

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Home = () => {
  return (
    <div className="bg-container">
      
      <div className="bg-overlay"></div>

      <div className="content">
    
        <section style={{ padding: "2rem", textAlign: "center" }}>
          <h1>Building Your Dream Home in Chennai With Unmatched Excellence</h1>
          <p>ADP Construction: Leading builders in Chennai offering expert architecture, interior design, and  renovation services</p>
        </section>

        <button>Contact us for a Free Consultation</button>

     
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2.75}
          speed={800}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          pagination={{ clickable: false }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="swiper-container"
        >
          <SwiperSlide className="swiper-slide--one">
            <div>
              <h2>A Class</h2>
              <a href="#">Explore</a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide--two">
            <div>
              <h2>B Class</h2>
              <a href="#">Explore</a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide--three">
            <div>
              <h2>C Class</h2>
              <a href="#">Explore</a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide--four">
            <div>
              <h2>D Class</h2>
              <a href="#">Explore</a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide--five">
            <div>
              <h2>E Class</h2>
              <a href="#">Explore</a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide--six">
            <div>
              <h2>G Class</h2>
              <a href="#">Explore</a>
            </div>
          </SwiperSlide>
        </Swiper>

        <section style={{ padding: "2rem", textAlign: "center" }}>
          <h2
            style={{ marginBottom: "1rem", color: "#fff", fontSize: "1.8rem" }}
          >
            For Enquiry
          </h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Home;
