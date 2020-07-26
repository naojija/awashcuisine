import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Label, Col, Row} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isLoginModalOpen: false,
            isReserveModalOpen: false,
            isToGoModalOpen: false,
            isCateringModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleReserveModal = this.toggleReserveModal.bind(this);
        this.toggleToGoModal = this.toggleToGoModal.bind(this);
        this.toggleCateringModal = this.toggleCateringModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleReserve = this.handleReserve.bind(this);
        this.handleToGo = this.handleToGo.bind(this);
        this.handleCatering = this.handleCatering.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleLoginModal() {
        this.setState({
            isLoginModalOpen: !this.state.isLoginModalOpen
        });
    }

    toggleReserveModal() {
        this.setState({
            isReserveModalOpen: !this.state.isReserveModalOpen
        });
    }

    toggleToGoModal() {
        this.setState({
            isToGoModalOpen: !this.state.isToGoModalOpen
        });
    }

    toggleCateringModal() {
        this.setState({
            isCateringModalOpen: !this.state.isCateringModalOpen
        });
    }

    handleLogin(values) {
        this.props.resetLoginForm();
        //alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.toggleLoginModal();
        //event.preventDefault();
    }
    handleReserve(values) {
        this.props.resetReserveForm();
        this.props.postReserve(values);
        //console.log('Current State is: ' + JSON.stringify(values));
        //alert('Current State is: ' + JSON.stringify(values));
        this.toggleReserveModal();
    }

    handleToGo(event) {
        this.toggleToGoModal();
        event.preventDefault();
    }

    handleCatering(event) {
        this.toggleCateringModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Awash Cuisine</h1>
                                <h4>Enjoy Ethiopian Dishes & Drinks</h4>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/awashLogo.png" height="30" width="30" alt="" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <i className="fa fa-list fa-lg" /> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleLoginModal}>
                                    <i className="fa fa-sign-in fa-lg" /><strong>Login</strong>
                                </Button>
                            </span>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleReserveModal}>
                                    <i className="fa fa-info-circle fa-lg" /><strong>Reserve</strong>
                                </Button>
                            </span>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleToGoModal}>
                                    <i className="fa fa-info-circle fa-lg" /><strong>ToGo</strong>
                                </Button>
                            </span>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleCateringModal}>
                                    <i className="fa fa-info-circle fa-lg" /><strong>Catering</strong>
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isLoginModalOpen} toggle={this.toggleLoginModal}>
                    <ModalHeader toggle={this.toggleLoginModal}><strong>Login</strong></ModalHeader>
                    <ModalBody>
                        <Form model="loginForm" onSubmit={values => this.handleLogin(values)}>
                            <Row className="form-group">
                                <Label htmlFor="username" md={2}>Username</Label>
                                <Col md={10}>
                                    <Control.text model=".username" id="username" name="username"
                                        placeholder="username"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".username"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="password" md={2}>Password</Label>
                                <Col md={10}>
                                    <Control.input model=".password" type="password" id="password" name="password"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 10 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 4, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox
                                                model=".remember"
                                                name="remember"
                                                className="form-check-input"
                                            /> {' '}
                                            <strong>Remember Me</strong>
                                        </Label>
                                    </div>
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isReserveModalOpen} toggle={this.toggleReserveModal}>
                    <ModalHeader toggle={this.toggleReserveModal}><strong>Reserve</strong></ModalHeader>
                    <ModalBody>
                        <div>
                            <p class="text-info"><strong>Call or Email us to reserve Awash Cuisine: Note: max capacity 30</strong></p>
                            <div className="col-sm-4 text-center">
                                <a role="button" class="btn btn-link" href="tel:+1206206206"> <i class="fa fa-phone fa-lg text-primary"></i> 1-206-206-206</a> <br />
                                <a role="button" class="btn btn-link" href="mailto:reservecuisine@awashcuisine.com"> <i class="fa fa-envelope-o fa-lg text-primary"></i> reservecuisine@awashcuisine.com</a>
                            </div>
                            <p class="text-info"><strong>Or reserve the cuisine by completing the below form</strong></p>
                        </div>
                        <Form model="reserveForm" onSubmit={values => this.handleReserve(values)}>
                            <Row className="form-group">
                                <Label htmlFor="customerName" md={2}>Customer FullName</Label>
                                <Col md={10}>
                                    <Control.text model=".customerName" id="customerName" name="customerName"
                                        placeholder="customerName"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".customerName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(15),
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".phoneNum"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 10 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="reserveType" md={2}>Reserve Type</Label>
                                <Col md={10}>
                                    <Control.select model=".reserveType" name="reserveType" id="reserveType"
                                        className="form-control">
                                        <option>Select...</option>
                                        <option>Partial</option>
                                        <option>Entire</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="numOfGuests" md={2}>Guests Count</Label>
                                <Col md={10}>
                                    <Control.text model=".numOfGuests" id="numOfGuests" name="numOfGuests"
                                        placeholder="Guests Count"
                                        className="form-control"
                                        validators={{
                                            required,
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".numOfGuests"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                </Col>
                                <Label htmlFor="additionalInfo" md={2}>Additional Info</Label>
                                <Col md={10}>
                                    <Control.textarea model=".additionalInfo" id="additionalInfo" name="additionalInfo"
                                        rows="3"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="date" md={2}>Date</Label>
                                <Col md={10}>
                                    <Control.input model=".date" type="date" name="date" id="date"
                                        className="form-control"
                                    />
                                </Col>
                                <Label htmlFor="time" md={2}>Time</Label>
                                <Col md={10}>
                                    <Control.input model=".time" type="time" name="time" id="time"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Reserve</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isToGoModalOpen} toggle={this.toggleToGoModal}>
                    <ModalHeader toggle={this.toggleToGoModal}><strong>ToGo</strong></ModalHeader>
                    <ModalBody>
                        <div>
                            <p class="text-info"><strong>Call or Email us to order ToGo from Awash Cuisine</strong></p>
                            <div className="col-sm-4 text-center">
                                <a role="button" class="btn btn-link" href="tel:+1206206206"> <i class="fa fa-phone fa-lg text-primary"></i> 1-206-206-206</a> <br />
                                <a role="button" class="btn btn-link" href="mailto:reservecuisine@awashcuisine.com"> <i class="fa fa-envelope-o fa-lg text-primary"></i> reservecuisine@awashcuisine.com</a>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isCateringModalOpen} toggle={this.toggleCateringModal}>
                    <ModalHeader toggle={this.toggleCateringModal}><strong>Catering</strong></ModalHeader>
                    <ModalBody>
                        <div>
                            <p class="text-info"><strong>Call or Email us to order catering service from Awash Cuisine</strong></p>
                            <div className="col-sm-4 text-center">
                                <a role="button" class="btn btn-link" href="tel:+1206206206"> <i class="fa fa-phone fa-lg text-primary"></i> 1-206-206-206</a> <br />
                                <a role="button" class="btn btn-link" href="mailto:reservecuisine@awashcuisine.com"> <i class="fa fa-envelope-o fa-lg text-primary"></i> reservecuisine@awashcuisine.com</a>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;