import React, { useState } from "react";
import { Card, Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import Header from "../../../../components/HeaderPublisher/Header";
import LPBank from "../../../../assets/images/LPBank.jpg";

const CampaignDetailsPage = () => {
  const reviews = [
    { name: "Nguyen thi phi Lel", rating: 5, date: "21-02-2025", comment: "" },
    { name: "Nguyen Thị Huong Giang", rating: 5, date: "09-01-2025", comment: "" },
    { name: "Nguyen thị Ngan", rating: 5, date: "18-12-2024", comment: "" },
    { name: "dang tien dung", rating: 5, date: "18-12-2024", comment: "dat hay" },
    { name: "Do Viet Dat", rating: 1, date: "22-01-2025", comment: "Update trạng thái quá lâu Mai không duyệt tiền." },
  ];
  const [filter, setFilter] = useState("all");

  const filteredReviews = filter === "all" ? reviews : reviews.filter(r => r.rating === filter);
  return (
    <Container>
      <Header />
      <Row className="body-1 mt-4 justify-content-center">
        <Col md={5}>
          <Card className="shadow-sm border-0">
            <Card.Img variant="top" src={LPBank} />
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              <Button
                className="border-0"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                Tham gia ngay
              </Button>
            </div>
          </Card>
        </Col>

        <Col md={7}>
          <Card className="border-0 mb-3 shadow-sm p-3">
            <Card.Header className="bg-white border-0">
              <h5 className="fw-bold">LP BANK LANDING PAGE</h5>
              <p className="text-warning fw-bold">Thu nhập 77.000đ / Đơn</p>
              <p className="text-muted">
                Mobile App Tur LPBANK LANDING PAGE @ Thời hạn: 17/10/2024 - Nay
              </p>
              <Button className="border-0" style={{background: "orange", width: "50%", marginLeft: "10px"}}>Tham Gia Ngay</Button>
            </Card.Header>
          </Card>

          <Card className="border-0 mb-3 shadow-sm p-3">
            <Card.Body>
              <h6 className="mb-0">4.320 Người tham gia</h6>
            </Card.Body>
          </Card>

          <Card className="border-0 shadow-sm p-3 mb-3">
            <Card.Body>
              <h6 className="fw-bold">Chi tiết chiến dịch</h6>
              <p>- Mở tài khoản LPBank và nhận ngay 77K.</p>
              <p>- Yêu cầu: Hoàn thành đầy đủ thông tin theo hướng dẫn.</p>
              <p className="text-danger">
                Lưu ý: Chỉ áp dụng cho khách hàng mới.
              </p>
            </Card.Body>
          </Card>

          <Card className="border-0 shadow-sm p-3 mb-3">
            <Card.Header className="bg-white border-0 fw-bold">
              3,67 * (6 Đánh giá)
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <p className="mb-0">Nguyen Thi Phi Lel</p>
                <p className="text-muted small">
                  <span style={{ color: "orange" }}>*****</span> 21-02-2025
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="mb-0">Nguyen Van Hien</p>
                <p className="text-muted small">
                  <span style={{ color: "orange" }}>****</span> 20-02-2025
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Card style={{ width: "80%" }}>
        <Card.Header className="bg-white">
          <Card>
            <div>. Chu ky doi soat: 30 ngay</div>
            <div>Thoi gian thanh toan: Ngay 18 va 25 hang thang</div>
          </Card>
        </Card.Header>
        <Card.Body>
          <Card.Header className="border-0 bg-white p-3 mb-3">
            Du lieu 3 thang gan nhat
          </Card.Header>
          <Card.Body
            className=" p-3 mb-3"
            style={{ border: "solid", borderColor: "#F5F5F5" }}
          >
            <Row className="text-center">
              <Col md={4}>CVR O</Col>
              <Col md={4}>EPC O</Col>
              <Col md={4}>Ti le duyet O</Col>
            </Row>
          </Card.Body>
        </Card.Body>
      </Card>

      <Card style={{ width: "80%" }} className="mt-4">
        <Card.Body>
          <h5 className="fw-bold">Giới thiệu chung</h5>
          <div
            className="content"
            style={{ marginLeft: "30px", marginTop: "30px" }}
          >
            <p>
              Ứng dụng LPBank - sản phẩm số của Ngân hàng TMCP Lộc Phát Việt Nam
              là phương tiện thanh toán không dùng tiền mặt online; Cổng thanh
              toán và Dịch vụ Ngân hàng số 24/7. Với tiêu chí an toàn, tiện
              dụng, khách hàng có thể sử dụng ứng dụng LPBank mọi lúc, mọi nơi
              chỉ với 1 chiếc điện thoại di động hay thiết bị có kết nối
              Internet.
            </p>
            <p className="text-danger">
              Các publisher đăng ký chiến dịch trước 10g00 ngày 04/11, vui lòng
              lấy lại link mới để đẩy số, nếu không sẽ không được ghi nhận đơn.
            </p>
            <p>Chiến dịch update trạng thái 3 lần/tuần vào Thứ 3, 5, 7.</p>
            <p className="fw-bold text-danger">HOT HƠN HOT:</p>
            <p>
              Chiến dịch trả hoa hồng tự bước đăng ký tài khoản thành công, phát
              sinh giao dịch có thêm hoa hồng từ ngày 28/11/2024.
            </p>
            <p>Hoa hồng lên đến 77k/đơn</p>
          </div>
          <h5 className="fw-bold mt-4">Chính sách hoa hồng</h5>
          <h5 className="fw-bold mt-4">Điều kiện ghi nhận</h5>
          <h5 className="fw-bold mt-4">Chính sách Cookies</h5>
          <h5 className="fw-bold mt-4">Lý do hủy</h5>
          <h5 className="fw-bold mt-4">Quy định về traffic</h5>
          <h5 className="fw-bold mt-4">Lưu ý khác</h5>
        </Card.Body>
      </Card>

      <div className="container mt-4">
      <h4 className="mb-3">Nhận xét & đánh giá</h4>

      {/* Bộ lọc sao */}
      <div className="btn-group mb-3">
        {["Tất cả", 5, 4, 3, 2, 1].map((star, index) => (
          <Button
            key={index}
            variant={filter === star || (filter === "all" && star === "Tất cả") ? "warning" : "outline-warning"}
            onClick={() => setFilter(star === "Tất cả" ? "all" : star)}
          >
            {star}*
          </Button>
        ))}
      </div>

      {/* Danh sách đánh giá */}
      <div className="row">
        {filteredReviews.map((review, index) => (
          <div key={index} className="col-md-6 mb-3">
            <Card border="warning">
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{review.date}</Card.Subtitle>
                <div className="text-warning">{Array(review.rating).fill("★").join("")}</div>
                {review.comment && <Card.Text className="mt-2">{review.comment}</Card.Text>}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Nút xem thêm */}
      <Button variant="link" className="text-warning mt-3">Xem thêm</Button>
    </div>

      <Row className="mt-4">
        <h5 className="fw-bold">Chiến dịch tương tự</h5>
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Img variant="top" src={LPBank} />
            <Card.Body>
              <h6>Ứng dụng ABC</h6>
              <p className="text-warning">51K / Đơn</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Img variant="top" src={LPBank} />
            <Card.Body>
              <h6>Ứng dụng XYZ</h6>
              <p className="text-warning">51K / Đơn</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CampaignDetailsPage;
