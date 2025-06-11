import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PaymentPage = () => {
    const navigate = useNavigate();
    const [paymentInfo, setPaymentInfo] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        province: '',
        district: '',
        ward: '',
        note: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/confirmation');
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <Container className="py-4 flex-grow-1 mt-5 pt-5">
                <div className="d-flex justify-content-between align-items-start">
                    {/* Left Side - Form */}
                    <div className="w-75 pe-4">
                        <h2 className="mb-4">Thông tin giao hàng</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fullName"
                                    value={paymentInfo.fullName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={paymentInfo.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Số điện thoại</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="phone"
                                            value={paymentInfo.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Địa chỉ</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={paymentInfo.address}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Tỉnh / thành</Form.Label>
                                        <Form.Select
                                            name="province"
                                            value={paymentInfo.province}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Chọn tỉnh/thành</option>
                                            <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                                            {/* Add more provinces */}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Quận / huyện</Form.Label>
                                        <Form.Select
                                            name="district"
                                            value={paymentInfo.district}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Chọn quận/huyện</option>
                                            <option value="Huyện Côn Đảo">Huyện Côn Đảo</option>
                                            {/* Add more districts */}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Phường / xã</Form.Label>
                                        <Form.Select
                                            name="ward"
                                            value={paymentInfo.ward}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Chọn phường/xã</option>
                                            <option value="Thị trấn Côn Đảo">Thị trấn Côn Đảo</option>
                                            {/* Add more wards */}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Button 
                                variant="primary" 
                                className="w-100 mt-3"
                                onClick={() => navigate('/payment-method')}
                            >
                                Tiếp tục đến phương thức thanh toán
                            </Button>
                        </Form>
                    </div>

                    {/* Right Side - Order Summary */}
                    <div className="w-25 bg-light p-3">
                        <h3 className="mb-3">Đơn hàng của bạn</h3>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Tạm tính:</span>
                            <span>2,440,000₫</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Phí vận chuyển:</span>
                            <span>-</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between mb-3">
                            <strong>Tổng cộng:</strong>
                            <strong>2,440,000₫</strong>
                        </div>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Mã giảm giá"
                                className="mb-2"
                            />
                            <Button variant="secondary" className="w-100">
                                Sử dụng
                            </Button>
                        </Form.Group>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default PaymentPage;