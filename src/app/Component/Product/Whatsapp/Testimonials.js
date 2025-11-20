"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonialsData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "E-Commerce Solutions Pvt Ltd",
    role: "CEO",
    rating: 5,
    testimonial:
      "A2ZSMS WhatsApp API has revolutionized our customer communication. We've seen a 300% increase in customer engagement and our order confirmations are now instant. The automation features saved us countless hours!",
    image: "/image/testimonial/user1.png",
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "HealthCare Plus",
    role: "Marketing Director",
    rating: 5,
    testimonial:
      "The WhatsApp Business API from A2ZSMS helped us automate appointment reminders and reduced no-shows by 45%. Their support team is exceptional and the integration was seamless with our existing systems.",
    image: "/image/testimonial/user2.png",
  },
  {
    id: 3,
    name: "Amit Patel",
    company: "Real Estate Ventures",
    role: "Sales Head",
    rating: 5,
    testimonial:
      "We're now able to reach thousands of potential buyers instantly with personalized property updates. The ROI has been incredible - 5x increase in lead conversions within 3 months of implementation!",
    image: "/image/testimonial/user3.png",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    company: "EduTech Academy",
    role: "Founder",
    rating: 5,
    testimonial:
      "A2ZSMS made it so easy to send course updates, exam schedules, and certificates to our 10,000+ students. The bulk messaging feature is reliable and cost-effective. Highly recommended!",
    image: "/image/testimonial/user4.png",
  },
  {
    id: 5,
    name: "Vikram Singh",
    company: "Travel & Tours India",
    role: "Operations Manager",
    rating: 5,
    testimonial:
      "Booking confirmations, itinerary updates, and customer support - all automated through WhatsApp. Our customer satisfaction scores went from 3.5 to 4.8 stars. Thank you A2ZSMS!",
    image: "/image/testimonial/user5.png",
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold head1" style={{ color: "#203239" }}>
            Client Success Stories
          </h2>
          <p className="text-muted para-blog mt-3">
            Real results from businesses like yours
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper pb-5"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className="card border-0 shadow-sm h-100"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4">
                  {/* Rating Stars */}
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i
                        key={i}
                        className="bi bi-star-fill text-warning me-1"
                      ></i>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p
                    className="para-color mb-4"
                    style={{ fontSize: "14px", lineHeight: "1.6" }}
                  >
                    "{testimonial.testimonial}"
                  </p>

                  {/* Client Info */}
                  <div className="d-flex align-items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                      style={{ objectFit: "cover" }}
                      onError={(e) => {
                        e.target.src = "/image/testimonial/default-user.png";
                      }}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold" style={{ color: "#203239" }}>
                        {testimonial.name}
                      </h6>
                      <small className="text-muted">
                        {testimonial.role}, {testimonial.company}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
