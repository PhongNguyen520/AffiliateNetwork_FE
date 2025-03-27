
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
      question: "How does affiliate networking work?",
      answer:
        "Affiliate networking connects publishers, advertisers, and brands in a collaborative ecosystem. Publishers earn commissions by promoting products, while advertisers expand their reach through performance-based marketing strategies.",
    },
    {
      question: "What are the benefits of joining an affiliate network?",
      answer:
        "Affiliate networks offer multiple revenue streams, access to diverse product offerings, real-time tracking, competitive commissions, and professional support to help you maximize your earning potential.",
    },
    {
      question: "How quickly can I start earning as an affiliate?",
      answer:
        "With our platform, you can start earning immediately after approval. Some publishers see initial earnings within the first week, with potential for growth as you optimize your marketing strategies.",
    },
    {
      question: "What types of products can I promote?",
      answer:
        "Our network offers a wide range of products across multiple industries, including technology, fashion, digital services, lifestyle products, and more. You'll find diverse opportunities to match your audience.",
    },
  ];

  const testimonialSlides = [
    {
      id: 1,
      name: "Sarah Thompson",
      text: "This affiliate network transformed my online income. The platform's intuitive tools, diverse product range, and transparent reporting have helped me grow my earnings consistently month after month.",
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "I've tried multiple affiliate platforms, but this one stands out. The support team is exceptional, and the commission rates are truly competitive. It's more than just a network—it's a partnership.",
    }
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
      title: "Top Strategies for Maximizing Affiliate Marketing Revenue in 2024",
      readTime: "5 min read",
    },
    {
      color: "orange",
      title: "Niche Selection: Finding Your Perfect Affiliate Marketing Segment",
      readTime: "5 min read",
    },
    {
      color: "purple",
      title: "Advanced Tracking and Analytics for Affiliate Success",
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
              Maximize Your Online
              <span className={cx("block")}>Earnings with Smart</span>
              <span className={cx("block")}>Affiliate Networking</span>
              </h1>
              <p className={cx("hero-description")}>
                Connect, promote, and earn with our comprehensive affiliate platform. 
                Unlock new revenue streams, access top-tier brands, and transform 
                your digital marketing potential.
              </p>
              <div className={cx("cta-buttons")}>
                <Link to="/explore" className={cx("btn", "btn-primary")}>
                Join Now <span className={cx("arrow")}>→</span>
                </Link>
                <Link to="/case-study" className={cx("case-study-link")}>
                How It Works
                </Link>
              </div>
              <div className={cx("trusted-by")}>
                <p className={cx("trusted-text")}>
                Trusted by top <br />
                Content Creators
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
                  10K<span className={cx("plus")}>+</span>
                </h2>
                <p className={cx("stats-description")}>
                Active Affiliates Generating Revenue Daily
                </p>
              </div>
              <div className={cx("chart-card")}>
                <p className={cx("chart-label")}>
                Boost Your Affiliate Income
                </p>
                <h3 className={cx("chart-title")}>
                Maximize Earnings
                  <br />
                  With Smart Strategies
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
              Innovative Affiliate
                <br />
                Marketing Solutions
              </h2>
              <p className={cx("services-description")}>
                We provide cutting-edge affiliate networking tools that empower 
                content creators, bloggers, and digital marketers to monetize 
                their online presence. Our platform offers advanced tracking, 
                real-time insights, and diverse partnership opportunities.
              </p>
            </div>
            <div className={cx("services-cards")}>
              <div className={cx("projects-card")}>
                <h2 className={cx("projects-number")}>
                  500<span className={cx("plus")}>+</span>
                </h2>
                <p className={cx("projects-text")}>
                Brands and Advertisers Connected
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
                <h3 className={cx("work-title")}>PARTNER PROGRAM</h3>
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




