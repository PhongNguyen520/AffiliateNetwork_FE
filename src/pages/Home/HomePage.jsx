
import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import images from "../../assets/images";
import Marquee from "react-fast-marquee";
import Header from "../../components/Header";
const cx = classNames.bind(styles);

function HomePage() {
  const partners = [
    {
      id: 1,
      logo: "https://rubicmarketing.com/wp-content/uploads/2022/07/y-nghia-logo-fpt-lan-3.jpg",
    },
    {
      id: 2,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcZylC5AC3ObQKMJSEAnKFkrXAJP-aH-ScQ&s",
    },
    {
      id: 3,
      logo: "https://1900.com.vn/storage/uploads/companies/logo/8/lg-1690877143.jpg",
    },
    {
      id: 4,
      logo: "https://cdn.tuoitre.vn/thumb_w/1200/471584752817336320/2023/2/23/62ce8018d5cacb6b28727421mb-bank-logo-1677142193380605336933.jpg",
    },
    {
      id: 5,
      logo: "https://media.licdn.com/dms/image/v2/D560BAQHAXIerkfY1BQ/company-logo_200_200/company-logo_200_200/0/1728274107129?e=2147483647&v=beta&t=VTUyCGsznNWpLSwRrfYnjdg9Rvj6qQbi-c46XzyfY9E",
    },
    {
      id: 6,
      logo: "https://bankingsummit.vn/2023/wp-content/uploads/2022/07/Cake.jpg",
    },
  ];


  return (
    <>
    <Header/>
      <div className={cx("container-body")}>
        <div className={cx("introduction")}>
          <div className={cx("title")}>
            <h2>
              Optimizing <span>Marketing</span> Operations and{" "}
              <span>Digital Transformation</span> for Businesses
            </h2>
          </div>
          <div className={cx("description")}>
            <img src={images.introduction} alt="introduction" />
            <div className={cx("content")}>
              <p>
                In today’s fast-paced digital landscape, businesses must
                constantly evolve to stay ahead of the competition. At
                <span> AffiLinker</span>, we empower businesses to optimize
                their marketing operations and embrace digital transformation
                with cutting-edge solutions tailored to their unique needs.
              </p>
            </div>
          </div>
        </div>

        <div className={cx("body")}>
          <div className={cx("quantity")}>
            <span className={cx("number")}>100%</span>
            <span className={cx("char")}>optimize</span>
          </div>
          <div className={cx("title")}>
            <span>Optimize Operations</span>
          </div>

          <div className={cx("description")}>
            <div className={cx("subdescrip-one")}>
              <div className={cx("box")}>
                <h3>LeadGen Solution</h3>

                <p>
                  With <span>LeadGen</span>, you can effortlessly attract and
                  manage high-quality leads. This solution helps you optimize
                  the process of collecting customer information, thereby
                  increasing conversion rates and revenue.
                </p>
              </div>
            </div>

            <div className={cx("subdescrip-two")}>
              <div className={cx("box")}>
                <h3>DataInsight Solution</h3>
                <p>
                  <span>DataInsight</span> provides powerful data analytics
                  tools to help you better understand customer behavior and
                  optimize your marketing campaigns. With{" "}
                  <span>DataInsight</span>, you can make data-driven decisions
                  accurately and timely.
                </p>
              </div>
            </div>

            <div className={cx("subdescrip-three")}>
              <div className={cx("box")}>
                <h3>AdBoost Solution</h3>
                <p>
                  <span>AdBoost</span> is a powerful advertising tool that helps
                  you optimize your ad budget and achieve the best results. With{" "}
                  <span>AdBoost</span>, you can easily manage and monitor
                  advertising campaigns across multiple platforms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={cx("container-partner")}>
          <div className={cx("title")}>
            <span>AffiLinker Partners</span>
          </div>

          <Marquee speed={50} gradient={false} pauseOnHover>
            {partners.map((partner) => (
              <img
                key={partner.id}
                src={partner.logo}
                alt={`Partner ${partner.id}`}
                className={cx(styles["partner-logo"])}
              />
            ))}
          </Marquee>
        </div>

        <div className={cx("container-reason")}>
          <div className={cx("title")}>
            <span>
              Why should you choose{" "}
              <span className={cx("webname")}>AffiLinker</span>?
            </span>
          </div>

          <div className={cx("group-reason")}>
            <div className={cx("reason")}>
              <div className={cx("header")}>
                <i class="bi bi-cpu-fill"></i>
                <span>Outstanding technology</span>
              </div>
              <p>
                We pride ourselves on leveraging outstanding technology to
                deliver unmatched performance and results for our partners. Our
                cutting-edge solutions are designed to help you maximize your
                earnings, streamline your campaigns, and stay ahead in the
                competitive world of affiliate marketing.
              </p>
            </div>
            <div className={cx("reason")}>
              <div className={cx("header")}>
                <i class="bi bi-person-fill"></i>
                <span>Personalize the solution</span>
              </div>
              <p>
                Every affiliate marketer is unique. That's why we offer
                personalized technology solutions designed to meet your specific
                goals and challenges. Whether you're just starting out or
                looking to scale your operations, our cutting-edge tools are
                here to empower your success.
              </p>
            </div>
            <div className={cx("reason")}>
              <div className={cx("header")}>
                <i class="bi bi-star-fill"></i>
                <span>Focus on quality</span>
              </div>
              <p>
                Quality is the foundation of success. That’s why we are
                committed to delivering top-tier solutions that empower you to
                achieve your affiliate marketing goals with confidence. From
                cutting-edge technology to unparalleled support, we ensure every
                aspect of our service meets the highest standards.
              </p>
            </div>

            <div className={cx("reason")}>
              <div className={cx("header")}>
                <i class="bi bi-award-fill"></i>
                <span>Experienced expert</span>
              </div>
              <p>
                We pride ourselves on having a team of seasoned experts who are
                passionate about helping you succeed. With years of experience
                in affiliate marketing, digital advertising, and data analytics,
                our experts are here to guide you every step of the way. Whether
                you're just starting out or looking to scale your campaigns, you
                can count on our expertise to deliver results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
