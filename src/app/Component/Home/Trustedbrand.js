// components/Home/Trustedbrand.jsx
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import only required Swiper styles
import "swiper/css";

import Image from "next/image";

const Trustedbrand = () => {
  const brands = [
    {
      src: "/image/motherhood.png",
      alt: "Motherhood Hospitals - Trusted WhatsApp API Client",
    },
    { src: "/image/Groavy.png", alt: "Groavy - Trusted WhatsApp API Client" },
    {
      src: "/image/isk.png",
      alt: "ISK Constructions - Trusted WhatsApp API Client",
    },
    {
      src: "/image/ping4sms-client1.webp",
      alt: "Ping4SMS Client - Retail Industry",
    },
    {
      src: "/image/ping4sms-client8.webp",
      alt: "Ping4SMS Client - Logistics & Delivery",
    },
    {
      src: "/image/saishishirtours.png",
      alt: "Saishishir Tours - Trusted WhatsApp API Client",
    },
    {
      src: "/image/ping4sms-client3.webp",
      alt: "Ping4SMS Client - Education Sector",
    },
    {
      src: "/image/ping4sms-client4.webp",
      alt: "Ping4SMS Client - Healthcare Services",
    },
    {
      src: "/image/ping4sms-client9.webp",
      alt: "Ping4SMS Client - E-commerce Platform",
    },
    {
      src: "/image/ping4sms-client2.webp",
      alt: "Ping4SMS Client - Financial Services",
    },
    {
      src: "/image/naidum.jpeg",
      alt: "Naidum Client -  Services",
    },
    {
      src: "/image/nite.png",
      alt: "Nite Client -  Services",
    },
    {
      src: "/image/vpa.jpg",
      alt: "Nite Client -  Services",
    },
  ];

  return (
    <section className="py-5 ">
      <div className="container aos">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-out">
          <span className="badge bg-primary bg-opacity-10 text-primary fs-6 mb-3">
            Trusted Partners
          </span>
          <h2 className="display-5 fw-bold text-dark mb-3">
            Trusted by <span className="text-primary">500+</span> Companies
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Leading businesses choose our WhatsApp API for reliable customer
            communication
          </p>
        </div>

        {/* Brand Carousel */}
        <div className="mb-5">
          <Swiper
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              320: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
            }}
            className="brand-swiper py-3"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div
                  className="card h-100 border-0 shadow-sm"
                  data-aos="fade-in"
                >
                  <div
                    className="card-body d-flex align-items-center justify-content-center"
                    style={{ height: "100px" }}
                  >
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={140}
                      height={70}
                      className="img-fluid opacity-75"
                      style={{
                        maxHeight: "80px",
                        objectFit: "contain",
                        transition: "opacity 0.4s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.opacity = "1")}
                      onMouseLeave={(e) => (e.target.style.opacity = "0.75")}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats */}
        {/* <div className="row g-4 text-center">
          <div className="col-6 col-md-3">
            <div className="h2 fw-bold text-primary mb-1">500+</div>
            <div className="text-muted">Happy Clients</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="h2 fw-bold text-primary mb-1">99.9%</div>
            <div className="text-muted">Uptime</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="h2 fw-bold text-primary mb-1">24/7</div>
            <div className="text-muted">Support</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="h2 fw-bold text-primary mb-1">50+</div>
            <div className="text-muted">Countries</div>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Trustedbrand;
