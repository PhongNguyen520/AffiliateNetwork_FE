import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Heart } from "lucide-react";
import { requestsPrivate } from "../../../../utils/requests";
import config from "../../../../config";

const CAMPAIGN_DETAIL_URL = "campaign";
const JOIN_CAMPAIGN_URL = "campaignmember";

const CampaignDetailsPage = () => {
  const { campaignId } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [hasJoined, setHasJoined] = useState(true);
  const navigate = useNavigate(); 

  const reviews = [
    { name: "Nguyen thi phi Lel", rating: 5, date: "21-02-2025", comment: "" },
    {
      name: "Nguyen Thị Huong Giang",
      rating: 5,
      date: "09-01-2025",
      comment: "",
    },
    { name: "Nguyen thị Ngan", rating: 5, date: "18-12-2024", comment: "" },
    {
      name: "dang tien dung",
      rating: 5,
      date: "18-12-2024",
      comment: "dat hay",
    },
    {
      name: "Do Viet Dat",
      rating: 1,
      date: "22-01-2025",
      comment: "Update trạng thái quá lâu Mai không duyệt tiền.",
    },
  ];

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await requestsPrivate.get(
          `${CAMPAIGN_DETAIL_URL}/${campaignId}`
        );
        if (!response.data) {
          throw new Error("Failed to fetch campaign data");
        }
        setCampaign(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaign();
  }, [campaignId]);

  const handleJoinCampaign = async () => {
    try {
      const response = await requestsPrivate.post(
        `${JOIN_CAMPAIGN_URL}/${campaignId}/join`
      );
      if (response.data && response.data.code === 200) {
        alert("You have successfully joined the campaign!");
        // const updatedCampaignResponse = await requestsPrivate.get(`${CAMPAIGN_DETAIL_URL}/${campaignId}`);
        // setCampaign(updatedCampaignResponse.data.data);
        setHasJoined(true);
      } else {
        throw new Error(response.data.message || "Failed to join the campaign");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const filteredReviews =
    filter === "all" ? reviews : reviews.filter((r) => r.rating === filter);

  if (loading) return <div className="text-center p-5">Loading...</div>;
  if (error)
    return <div className="text-center p-5 text-danger">Error: {error}</div>;
  if (!campaign)
    return <div className="text-center p-5">No campaign data available</div>;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-warning">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-muted">
            ★
          </span>
        );
      }
    }

    return stars;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col md={5}>
          <div style={{ position: "relative" }}>
            <img
              src={campaign.image}
              alt={campaign.campaignName}
              className="img-fluid w-100"
              style={{ objectFit: "cover" }}
            />
            <div className="position-absolute top-0 end-0 p-2">
              <Heart size={24} />
            </div>
          </div>
        </Col>
        <Col md={7}>
          <h2>{campaign.campaignName}</h2>
          <div>
            {renderStars(4.0)}
            <span className="ms-2">4.0 (200 vote)</span>
          </div>
          <p className="mt-3">{campaign.description}</p>
          <p>{campaign.introduction}</p>

          <div className="d-flex justify-content-between mt-4">
            <div>
              <p className="mb-1 text-muted">Commission Rate:</p>
              <p className="fw-bold">10% on bill</p>
            </div>
            <div>
              <p className="mb-1 text-muted">Payout Method:</p>
              <p className="fw-bold">{campaign.payoutModelName.join(", ")}</p>
            </div>
          </div>

          <div className="d-flex align-items-center mt-2">
            <i className="bi bi-calendar me-2"></i>
            <span>
              {formatDate(campaign.startDate)} -{" "}
              {campaign.endDate ? formatDate(campaign.endDate) : "Now"}
            </span>
          </div>

          <div className="d-flex align-items-center mt-2">
            <i className="bi bi-people me-2"></i>
            <span>{campaign.enrollCount} Participants</span>
          </div>

          <Button
            variant="warning"
            className="mt-3 fw-bold"
            style={{ backgroundColor: "#FF6B1E", border: "none" }}
            onClick={handleJoinCampaign}
            disabled={hasJoined} 
          >
            {hasJoined ? "Joined" : "JOIN CAMPAIGN"}
          </Button>

          {hasJoined && (
            <Button
              variant="success"
              className="mt-3 fw-bold ms-2"
              style={{ backgroundColor: "#28a745", border: "none" }}
              onClick={() => navigate(config.routes.createLinkStep1, {
                state: { campaign }, 
              })} 
            >
              Create Link
            </Button>
          )}
        </Col>
      </Row>

      <div className="border-bottom mb-4">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Overview
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Policy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Commission
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Conditions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Feedbacks
            </a>
          </li>
        </ul>
      </div>

      {/* Campaign details section */}
      <div className="mb-4">
        <h4 className="fw-bold">{campaign.campaignName} - Unlimited Sale</h4>
        <p className="mt-3">
          From the passion of bringing quality products with the best value to
          consumers. {campaign.campaignName} was born with the desire to create
          a top shopping event, harmoniously connecting brands and customers,
          between needs and opportunities.
        </p>

        <div className="mt-4">
          <h5 className="fw-bold">Important information of the campaign:</h5>
          <p className="mt-3">
            Note: The orders that publishers have just clicked on will be orders
            generated on the system. AT will return the order status twice a
            week on every Monday and Thursday. (The average approval rate of the
            campaign is from 65-70% of the number of orders generated).
          </p>
          <p>
            In case customers have problems with the discount code or cannot
            complete the order = Please fill out the Incident Report form: Here,
            the AT team will respond within 24 hours to support you!
          </p>
          <h5 className="fw-bold mt-4">Target Customer:</h5>
          <p className="mt-2">{campaign.targetCustomer}</p>{" "}
          {/* Đối tượng khách hàng từ API */}
          <p>
            Primary focus on tech-savvy shoppers aged 25-45 with disposable
            income, interested in electronics, home goods, and fashion.
            Secondary focus on bargain hunters across all demographics.
          </p>
          <h5 className="fw-bold mt-4">
            ***SPECIAL: {campaign.campaignName} SUPER OFFER
          </h5>
          <ul className="mt-2">
            <li>
              Pre-Black Friday (20/11-27/11): Commission increased by 1.5x for
              all successful orders
            </li>
            <li>
              Black Friday Official (28/11-29/11): Commission increased by 2x
              for all successful orders
            </li>
            <li>
              Cyber Monday (02/12): Commission increased by 1.8x for all
              successful orders
            </li>
            <li>
              Additional bonus of 5,000,000 VND for Top 5 Publishers with the
              highest sales in the entire campaign
            </li>
          </ul>
          <h5 className="fw-bold mt-4">
            ***GUIDE TO OPTIMIZE CAMPAIGN PERFORMANCE
          </h5>
          <ul className="mt-2">
            <li>
              Focus on promoting during golden hours: 12:00-14:00 and
              20:00-22:00 daily
            </li>
            <li>Prioritize using Deep Link to increase conversion rate</li>
            <li>
              Combine with price comparison content to increase credibility
            </li>
            <li>
              Use Social Media channels during the 19:00-21:00 time frame to
              reach the largest number of users
            </li>
          </ul>
          <h5 className="fw-bold mt-4">IMPLEMENTATION TIME</h5>
          <ul className="mt-2">
            <li>Pre-Black Friday: November 20 - November 27, 2025</li>
            <li>Black Friday: November 28 - November 29, 2025</li>
            <li>Week-end Sale: November 30 - December 1, 2025</li>
            <li>Cyber Monday: December 2, 2025</li>
            <li>Extended Sale: December 3 - December 5, 2025</li>
          </ul>
        </div>
      </div>

      {/* Reviews & Ratings Section */}
      <div className="container mt-4">
        <h4 className="mb-3">Reviews & Ratings</h4>

        <div className="btn-group mb-3">
          {["All", 5, 4, 3, 2, 1].map((star, index) => (
            <Button
              key={index}
              variant={
                filter === star || (filter === "all" && star === "All")
                  ? "warning"
                  : "outline-warning"
              }
              onClick={() => setFilter(star === "All" ? "all" : star)}
            >
              {star}
              {typeof star === "number" ? "*" : ""}
            </Button>
          ))}
        </div>

        <div className="row">
          {filteredReviews.map((review, index) => (
            <div key={index} className="col-md-6 mb-3">
              <Card border="warning">
                <Card.Body>
                  <Card.Title>{review.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {review.date}
                  </Card.Subtitle>
                  <div className="text-warning">
                    {Array(review.rating).fill("★").join("")}
                  </div>
                  {review.comment && (
                    <Card.Text className="mt-2">{review.comment}</Card.Text>
                  )}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        <Button variant="link" className="text-warning mt-3">
          See more
        </Button>
      </div>
    </Container>
  );
};

export default CampaignDetailsPage;
