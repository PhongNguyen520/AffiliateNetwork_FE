import { Form, Button, Row, Col, Card, Table } from "react-bootstrap";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { Laptop, Smartphone, Tablet } from "lucide-react";
const TrafficReport = () => {

    const chartData = [
        { time: "00:00", clicks: 0 },
        { time: "03:00", clicks: 5 },
        { time: "06:00", clicks: 7 },
        { time: "09:00", clicks: 12 },
        { time: "12:00", clicks: 8 },
        { time: "15:00", clicks: 5 },
        { time: "18:00", clicks: 15 },
        { time: "21:00", clicks: 9 },
        { time: "00:00", clicks: 0 },
    ];

    return (
        <>
            <Row className="filter-chain">
                <Col md={2}>
                    <Form.Control
                        type="text"
                        placeholder="DD/MM/YYYY - DD/MM/YYYY"
                        defaultValue="26/02/2025 - 26/02/2025"
                        className="form-control-sm"
                    />
                </Col>
                <Col md={2}>
                    <Form.Select className="form-select-sm">
                        <option>Campaigns</option>
                        <option>Campaign 1</option>
                        <option>Campaign 2</option>
                    </Form.Select>
                </Col>
                <Col md={8}>
                    <Button variant="primary" size="sm">
                        Search
                    </Button>
                </Col>
            </Row>

            <div
                className="mt-2 border-bottom pb-2 text-primary"
                style={{ fontSize: "14px" }}
            >
                Compare with: 25/02/2025 to 25/02/2025
            </div>

            <Row className="mt-4 border">
                <Col md={3} className="border-end p-4">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold mb-0">30</h2>
                        <p className="text-muted small">Total number of clicks</p>
                    </div>

                    <Row>
                        <Col xs={6} className="text-center">
                            <h3 className="fw-bold mb-0">10</h3>
                            <p className="text-muted small">Total quality clicks</p>
                        </Col>
                        <Col xs={6} className="text-center">
                            <h3 className="fw-bold mb-0">5</h3>
                            <p className="text-muted small">Active users</p>
                        </Col>
                    </Row>
                </Col>

                <Col md={9} className="p-3">
                    <div style={{ height: "220px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={chartData}
                                margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                            >
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    horizontal={true}
                                    vertical={false}
                                />
                                <XAxis dataKey="time" />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="clicks"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                    dot={{ r: 0 }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col md={6}>
                    <Card>
                        <Card.Header className="fst-normal h3">Popular Browser</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover responsive className="text-center">
                                <thead>
                                    <tr>
                                        <th>Browser</th>
                                        <th>Click Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Chrome</td>
                                        <td>60%</td>
                                    </tr>
                                    <tr>
                                        <td>Firefox</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <td>Safari</td>
                                        <td>15%</td>
                                    </tr>
                                    <tr>
                                        <td>Edge</td>
                                        <td>5%</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="border-1">
                        <Card.Header className="bg-white border-0">
                            <h5 className="text-secondary mb-0">Device platform</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="text-center text-secondary mb-4">
                                Top Platform
                            </div>

                            <Row className="justify-content-center mt-5">
                                <Col xs={4} className="text-center">
                                    <Laptop size={48} />
                                    <div className="mt-2">Computer</div>
                                    <div className="text-secondary">0.0%</div>
                                </Col>
                                <Col xs={4} className="text-center">
                                    <Smartphone size={48} />
                                    <div className="mt-2">Phone</div>
                                    <div className="text-secondary">0.0%</div>
                                </Col>
                                <Col xs={4} className="text-center">
                                    <Tablet size={48} />
                                    <div className="mt-2">Ipad</div>
                                    <div className="text-secondary">0.0%</div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default TrafficReport;
