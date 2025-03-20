// import classNames from "classnames/bind";
// import styles from "./HomePage.module.scss";
// import images from "../../assets/images";
// import Marquee from "react-fast-marquee";
// import Header from "../../components/HeaderPublisher/Header";
// const cx = classNames.bind(styles);

// function HomePage() {
//   const partners = [
//     {
//       id: 1,
//       logo: "https://rubicmarketing.com/wp-content/uploads/2022/07/y-nghia-logo-fpt-lan-3.jpg",
//     },
//     {
//       id: 2,
//       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcZylC5AC3ObQKMJSEAnKFkrXAJP-aH-ScQ&s",
//     },
//     {
//       id: 3,
//       logo: "https://1900.com.vn/storage/uploads/companies/logo/8/lg-1690877143.jpg",
//     },
//     {
//       id: 4,
//       logo: "https://cdn.tuoitre.vn/thumb_w/1200/471584752817336320/2023/2/23/62ce8018d5cacb6b28727421mb-bank-logo-1677142193380605336933.jpg",
//     },
//     {
//       id: 5,
//       logo: "https://media.licdn.com/dms/image/v2/D560BAQHAXIerkfY1BQ/company-logo_200_200/company-logo_200_200/0/1728274107129?e=2147483647&v=beta&t=VTUyCGsznNWpLSwRrfYnjdg9Rvj6qQbi-c46XzyfY9E",
//     },
//     {
//       id: 6,
//       logo: "https://bankingsummit.vn/2023/wp-content/uploads/2022/07/Cake.jpg",
//     },
//   ];

//   return (
//     <>
//     <Header/>
//       <div className={cx("container-body")}>
//         <div className={cx("introduction")}>
//           <div className={cx("title")}>
//             <h2>
//               Optimizing <span>Marketing</span> Operations and{" "}
//               <span>Digital Transformation</span> for Businesses
//             </h2>
//           </div>
//           <div className={cx("description")}>
//             <img src={images.introduction} alt="introduction" />
//             <div className={cx("content")}>
//               <p>
//                 In today’s fast-paced digital landscape, businesses must
//                 constantly evolve to stay ahead of the competition. At
//                 <span> AffiLinker</span>, we empower businesses to optimize
//                 their marketing operations and embrace digital transformation
//                 with cutting-edge solutions tailored to their unique needs.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className={cx("body")}>
//           <div className={cx("quantity")}>
//             <span className={cx("number")}>100%</span>
//             <span className={cx("char")}>optimize</span>
//           </div>
//           <div className={cx("title")}>
//             <span>Optimize Operations</span>
//           </div>

//           <div className={cx("description")}>
//             <div className={cx("subdescrip-one")}>
//               <div className={cx("box")}>
//                 <h3>LeadGen Solution</h3>

//                 <p>
//                   With <span>LeadGen</span>, you can effortlessly attract and
//                   manage high-quality leads. This solution helps you optimize
//                   the process of collecting customer information, thereby
//                   increasing conversion rates and revenue.
//                 </p>
//               </div>
//             </div>

//             <div className={cx("subdescrip-two")}>
//               <div className={cx("box")}>
//                 <h3>DataInsight Solution</h3>
//                 <p>
//                   <span>DataInsight</span> provides powerful data analytics
//                   tools to help you better understand customer behavior and
//                   optimize your marketing campaigns. With{" "}
//                   <span>DataInsight</span>, you can make data-driven decisions
//                   accurately and timely.
//                 </p>
//               </div>
//             </div>

//             <div className={cx("subdescrip-three")}>
//               <div className={cx("box")}>
//                 <h3>AdBoost Solution</h3>
//                 <p>
//                   <span>AdBoost</span> is a powerful advertising tool that helps
//                   you optimize your ad budget and achieve the best results. With{" "}
//                   <span>AdBoost</span>, you can easily manage and monitor
//                   advertising campaigns across multiple platforms.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={cx("container-partner")}>
//           <div className={cx("title")}>
//             <span>AffiLinker Partners</span>
//           </div>

//           <Marquee speed={50} gradient={false} pauseOnHover>
//             {partners.map((partner) => (
//               <img
//                 key={partner.id}
//                 src={partner.logo}
//                 alt={`Partner ${partner.id}`}
//                 className={cx(styles["partner-logo"])}
//               />
//             ))}
//           </Marquee>
//         </div>

//         <div className={cx("container-reason")}>
//           <div className={cx("title")}>
//             <span>
//               Why should you choose{" "}
//               <span className={cx("webname")}>AffiLinker</span>?
//             </span>
//           </div>

//           <div className={cx("group-reason")}>
//             <div className={cx("reason")}>
//               <div className={cx("header")}>
//                 <i class="bi bi-cpu-fill"></i>
//                 <span>Outstanding technology</span>
//               </div>
//               <p>
//                 We pride ourselves on leveraging outstanding technology to
//                 deliver unmatched performance and results for our partners. Our
//                 cutting-edge solutions are designed to help you maximize your
//                 earnings, streamline your campaigns, and stay ahead in the
//                 competitive world of affiliate marketing.
//               </p>
//             </div>
//             <div className={cx("reason")}>
//               <div className={cx("header")}>
//                 <i class="bi bi-person-fill"></i>
//                 <span>Personalize the solution</span>
//               </div>
//               <p>
//                 Every affiliate marketer is unique. That's why we offer
//                 personalized technology solutions designed to meet your specific
//                 goals and challenges. Whether you're just starting out or
//                 looking to scale your operations, our cutting-edge tools are
//                 here to empower your success.
//               </p>
//             </div>
//             <div className={cx("reason")}>
//               <div className={cx("header")}>
//                 <i class="bi bi-star-fill"></i>
//                 <span>Focus on quality</span>
//               </div>
//               <p>
//                 Quality is the foundation of success. That’s why we are
//                 committed to delivering top-tier solutions that empower you to
//                 achieve your affiliate marketing goals with confidence. From
//                 cutting-edge technology to unparalleled support, we ensure every
//                 aspect of our service meets the highest standards.
//               </p>
//             </div>

//             <div className={cx("reason")}>
//               <div className={cx("header")}>
//                 <i class="bi bi-award-fill"></i>
//                 <span>Experienced expert</span>
//               </div>
//               <p>
//                 We pride ourselves on having a team of seasoned experts who are
//                 passionate about helping you succeed. With years of experience
//                 in affiliate marketing, digital advertising, and data analytics,
//                 our experts are here to guide you every step of the way. Whether
//                 you're just starting out or looking to scale your campaigns, you
//                 can count on our expertise to deliver results.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;

import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why is digital marketing important for my business?",
      answer:
        "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    },
    {
      question:
        "How can digital marketing help improve my website's visibility?",
      answer:
        "Digital marketing improves website visibility through SEO, content marketing, social media presence, and paid advertising campaigns.",
    },
    {
      question:
        "How long does it take to see results from digital marketing efforts?",
      answer:
        "Results timeframe varies by strategy - PPC may show immediate results while SEO typically takes 3-6 months to see significant improvements.",
    },
    {
      question:
        "How do you measure the success of digital marketing campaigns?",
      answer:
        "We measure success through KPIs like website traffic, conversion rates, engagement metrics, and ROI calculations.",
    },
  ];

  const testimonialSlides = [
    {
      id: 1,
      name: "Michael Kaizer",
      text: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    },
    // More testimonials could be added here
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialCount = testimonialSlides.length;

  const previousTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonialCount - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonialCount - 1 ? 0 : prev + 1
    );
  };

  const blogPosts = [
    {
      color: "blue",
      title:
        "We are the top digital marketing agency for branding corp. We offer a full range engine...",
      readTime: "5 min read",
    },
    {
      color: "orange",
      title:
        "Working with this digital marketing agency has been a true partnership. They have tak...",
      readTime: "5 min read",
    },
    {
      color: "purple",
      title:
        "What sets this digital marketing agency apart is their commitment to transparency...",
      readTime: "5 min read",
    },
  ];

  return (
    <div className={cx("home-page")}>
      {/* Hero Section */}
      <section className={cx("hero-section")}>
        <div className={cx("container")}>
          <div className={cx("hero-content")}>
            <div className={cx("hero-text")}>
              <h1 className={cx("hero-title")}>
                Optimizing Marketing Operations
                <span className={cx("block")}>And Digital Transformation</span>
                <span className={cx("block")}>for Businesses</span>
              </h1>
              <p className={cx("hero-description")}>
                Empowering businesses to enhance efficiency, drive growth, and
                navigate the digital landscape with cutting-edge strategies and
                tools.
              </p>
              <div className={cx("cta-buttons")}>
                <Link to="/explore" className={cx("btn", "btn-primary")}>
                  Explore Now <span className={cx("arrow")}>→</span>
                </Link>
                <Link to="/case-study" className={cx("case-study-link")}>
                  View Case Study
                </Link>
              </div>
              <div className={cx("trusted-by")}>
                <p className={cx("trusted-text")}>
                  Trusted by the world's <br />
                  biggest brands
                </p>
                <div className={cx("brand-logos")}>
                  <img
                    src="/afterpay.svg"
                    alt="Afterpay"
                    className={cx("brand-logo")}
                  />
                  <img
                    src="/basecamp.svg"
                    alt="Basecamp"
                    className={cx("brand-logo")}
                  />
                  <img
                    src="/maze.svg"
                    alt="Maze"
                    className={cx("brand-logo")}
                  />
                </div>
              </div>
            </div>
            <div className={cx("hero-graphics")}>
              <div className={cx("stats-card")}>
                <h2 className={cx("stats-number")}>
                  230<span className={cx("plus")}>+</span>
                </h2>
                <p className={cx("stats-description")}>
                  some big companies that we work with, and trust us very much
                </p>
              </div>
              <div className={cx("chart-card")}>
                <p className={cx("chart-label")}>
                  Drive More Traffic and Sales
                </p>
                <h3 className={cx("chart-title")}>
                  Drive more traffic
                  <br />
                  and product sales
                </h3>
                <div className={cx("chart-graphic")}>
                  {/* Chart bars would be here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={cx("services-section")}>
        <div className={cx("container")}>
          <div className={cx("services-content")}>
            <div className={cx("services-text")}>
              <h2 className={cx("services-title")}>
                Provide the best service with
                <br />
                out of the box ideas
              </h2>
              <p className={cx("services-description")}>
                we are a passionate team of digital marketing enthusiasts
                dedicated to helping businesses succeed in the digital world.
                With years of experience and a deep understanding of the
                ever-evolving online landscape, we stay at the forefront of
                industry trends and technologies.
              </p>
            </div>
            <div className={cx("services-cards")}>
              <div className={cx("projects-card")}>
                <h2 className={cx("projects-number")}>
                  920<span className={cx("plus")}>+</span>
                </h2>
                <p className={cx("projects-text")}>
                  Project finish with superbly
                </p>
                <div className={cx("team-avatars")}>
                  <div className={cx("avatar")}></div>
                  <div className={cx("avatar")}></div>
                  <div className={cx("avatar")}></div>
                  <div className={cx("avatar")}></div>
                  <div className={cx("avatar-more")}>+</div>
                </div>
              </div>
              <div className={cx("work-card")}>
                <h3 className={cx("work-title")}>HOW WE WORK</h3>
                <div className={cx("play-button")}>
                  <span className={cx("play-icon")}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cx("testimonial-section")}>
        <div className={cx("testimonial-container")}>
          <div className={cx("testimonial-quote")}>
            <p>"{testimonialSlides[currentTestimonial].text}"</p>
          </div>
          <div className={cx("testimonial-footer")}>
            <div className={cx("testimonial-author")}>
              <div className={cx("author-avatar")}></div>
              <div className={cx("author-name")}>
                {testimonialSlides[currentTestimonial].name}
              </div>
            </div>
            <div className={cx("testimonial-navigation")}>
              <button
                className={cx("nav-button", "prev")}
                onClick={previousTestimonial}
              >
                ←
              </button>
              <div className={cx("pagination")}>
                0{currentTestimonial + 1}/0{testimonialCount}
              </div>
              <button
                className={cx("nav-button", "next")}
                onClick={nextTestimonial}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={cx("faq-section")}>
        <div className={cx("faq-container")}>
          <div className={cx("faq-header")}>
            <h2>Digital Marketing FAQs</h2>
            <p>
              As a leading digital marketing agency, we are dedicated to
              providing comprehensive solutions to drive results. We've compiled
              some frequently asked questions to help our partners succeed.
            </p>
            <div className={cx("action-buttons")}>
              <button className={cx("more-questions")}>More Questions</button>
              <button className={cx("contact-us")}>Contact Us</button>
            </div>
          </div>

          <div className={cx("faq-content")}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cx(
                  "faq-item",
                  openFaqIndex === index ? "active" : ""
                )}
              >
                <div
                  className={cx("faq-question")}
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  <span className={cx("toggle-icon")}>
                    {openFaqIndex === index ? "−" : "+"}
                  </span>
                </div>
                <div
                  className={cx(
                    "faq-answer",
                    openFaqIndex === index ? "open" : ""
                  )}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Marketing Section */}
      <section className={cx("affiliate-section")}>
        <div className={cx("affiliate-container")}>
          <div className={cx("affiliate-header")}>
            <h2>Affiliate Marketing That Grow Traffic & Increase Revenue</h2>
            <div className={cx("affiliate-description")}>
              <p>
                We are the top digital marketing agency for branding corp. We
                offer a full range of services to help clients improve their
                search engine rankings and drive more traffic to their websites.
              </p>
              <button className={cx("see-more")}>See more</button>
            </div>
          </div>

          <div className={cx("blog-posts")}>
            {blogPosts.map((post, index) => (
              <div key={index} className={cx("blog-card")}>
                <div className={cx("card-indicator", post.color)}></div>
                <div className={cx("card-content")}>
                  <div className={cx("read-time")}>{post.readTime}</div>
                  <p className={cx("card-title")}>{post.title}</p>
                  <button className={cx("read-more")}>→</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
