import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

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

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleLoginModal();
        event.preventDefault();
    }
    // ReserveType: ${this.reserveType.value} Date: ${this.date.value} ${this.time.value}
    handleReserve(event) {
        alert(`Customername: ${this.customername.value} ReserveType: ${this.reserveType.value} NumOfGuests: ${this.guest.value} Date: ${this.date.value} ${this.time.value}`);
        this.toggleReserveModal();
        event.preventDefault();
    }

    handleToGo(event) {
        //alert(`Customername: ${this.customername.value} ReserveType: ${this.reserveType.value} Date: ${this.date.value} ${this.time.value}`);
        this.toggleToGoModal();
        event.preventDefault();
    }

    handleCatering(event) {
        //alert(`Customername: ${this.customername.value} ReserveType: ${this.reserveType.value} Date: ${this.date.value} ${this.time.value}`);
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
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/LogoAwash.png" height="30" width="30" alt="AwashCuisine Logo" /></NavbarBrand>
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
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
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
                        <Form onSubmit={this.handleReserve}>
                            <FormGroup>
                                <Label htmlFor="customername"><strong>Customer Name</strong></Label>
                                <Input type="text" id="customername" name="customername" className="form-control" innerRef={input => this.customername = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="reserveType"><strong>Reserve Type</strong></Label> 
                                <Input type= "select" name="reserveType" id="reserveType" className="form-control" innerRef={input => this.reserveType = input}>
                                    <option selected>Select...</option>
                                    <option value="partial">Partial</option>
                                    <option value="entire">Entire</option>
                                </Input>                  
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="guest" ><strong>Specify # of guests</strong></Label>
                                <div>
                                    <Input type = "textarea" id="guest" name="guest"
                                        rows="3"
                                        className="form-control" innerRef={input => this.guest = input}
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="date"><strong>Date</strong>
                                    <Input type="date" name="date" id="date" placeholder="Date" innerRef={input => this.date = input} />
                                    <Input type="time" name="time" id="date" placeholder="Time" innerRef={input => this.time = input} />
                                </Label>
                            </FormGroup>
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