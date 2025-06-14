import React from 'react';
import { Container, Row, Col, Nav, Card, Form, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import './ProfilePage.css';
import SideBarProfile from '../../components/SideBarProfile';

const ProfilePage = () => {
    return (
        <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#FFFBE6' }}>
            <Header />
            <Container className="flex-grow-1 py-4 mt-100">
                <Row>
                    <Col md={3} >
                        {SideBarProfile.map(item => (
                            <Card className="sidebarprofile" style={{ marginBottom: '10px', borderRadius: '20' }} key={item.id}>
                                <Nav className="flex-column">
                                    <Nav.Link
                                        key={item.id}
                                        href={item.link}
                                        className={`sidebarprofile-item ${item.active ? 'active' : ''}`}
                                    >
                                        <img src={item.icon} alt="" className="sidebarprofile-icon" />
                                        <span>{item.title}</span>
                                    </Nav.Link>
                                </Nav>
                            </Card>
                        ))}

                    </Col>

                    <Col md={9}>
                        <Card className="content-card">
                            <Card.Body>
                                <h3 className="mb-4">Thông tin tài khoản</h3>
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Họ và tên</Form.Label>
                                                <Form.Control type="text" defaultValue="Lương Văn Tuấn Kiệt" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Số điện thoại</Form.Label>
                                                <Form.Control type="tel" defaultValue="0866601711" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Giới tính</Form.Label>
                                                <Form.Select defaultValue="male">
                                                    <option value="male">Nam</option>
                                                    <option value="female">Nữ</option>
                                                    <option value="other">Khác</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Ngày sinh</Form.Label>
                                                <Form.Control type="date" defaultValue="2004-03-21" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Button variant="success" className="mt-3 end-btn">
                                        Cập nhật thông tin
                                    </Button>
                                </Form>


                                <hr className="my-4" />

                                <h3 className="mb-4">Địa chỉ giao hàng</h3>
                                <Form>
                                    <Row>
                                        <Col md={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Địa chỉ</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Số nhà, tên đường"
                                                    defaultValue="123 Nguyễn Văn A"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Tỉnh/Thành phố</Form.Label>
                                                <Form.Select defaultValue="HCM">
                                                    <option value="">Chọn tỉnh/thành</option>
                                                    <option value="HCM">TP. Hồ Chí Minh</option>
                                                    <option value="HN">Hà Nội</option>
                                                    {/* Add more cities */}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Quận/Huyện</Form.Label>
                                                <Form.Select defaultValue="Q1">
                                                    <option value="">Chọn quận/huyện</option>
                                                    <option value="Q1">Quận 1</option>
                                                    <option value="Q2">Quận 2</option>
                                                    {/* Add more districts */}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Phường/Xã</Form.Label>
                                                <Form.Select defaultValue="P1">
                                                    <option value="">Chọn phường/xã</option>
                                                    <option value="P1">Phường 1</option>
                                                    <option value="P2">Phường 2</option>
                                                    {/* Add more wards */}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button variant="success" className="mt-3">
                                        Cập nhật địa chỉ
                                    </Button>
                                </Form>

                                <hr className="my-4" />

                                <h3 className="mb-4">Thông tin đăng nhập</h3>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" defaultValue="lvtuankiet2103@gmail.com" readOnly />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Mật khẩu</Form.Label>
                                        <Form.Control type="password" defaultValue="password" readOnly />
                                    </Form.Group>

                                    <Button variant="outline-success">
                                        Đổi mật khẩu
                                    </Button>
                                </Form>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProfilePage;