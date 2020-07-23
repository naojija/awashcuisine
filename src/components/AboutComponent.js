import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
    function RenderService({service}){
        if(service){
            return(
                <React.Fragment>
                    <Media object src={service.image} alt={service.name} width="150"/>
                    <Media body className="ml-5 mb-4">
                        <Media heading>
                            {service.name}
                        </Media>
                        {service.description}
                    </Media>
                </React.Fragment>
            );
        }
        return (
            <div />
        );
    }
    function About(props) {
        const services = props.services.map(service => {
            return (
                <Media tag="li" key = {service.id}>
                    <RenderService service = {service} />
                </Media>
            );
        });
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Our Mission</h3>
                    <p>We provide ethiopian dishes and drinks including the most famous traditional doro wat, tej(Ethiopian honey wine) and coffee with Ethiopian coffe cermony. We have experts to maintain the quality and consitency of our dishes and drinks.
                    .We also present a feature in our site to collect customer feedbacks to keep imporving our services.</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">February 8,2020</dd>
                                <dt className="col-6">No. of Awash Cusine Branches</dt>
                                <dd className="col-6">3</dd>
                                <dt className="col-6">No. of Reviews in 2020</dt>
                                <dd className="col-6">4</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">11</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">The best of mankind is a farmer; the best food is fruit. --</p>
                                <footer className="blockquote-footer">Ethiopian Proverb,{' '}
                                    <cite title="Source Title">"Ethiopia Sayings, Old Sayings and Proverbs" </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Awash Cuisine Dishes</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {services}
                    </Media>
                </div>
            </div>
        </div>
    );
}
export default About;