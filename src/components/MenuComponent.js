import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({entery}) {
    return (
        <Card>
            <Link to={`/menu/${entery.id}`}>
                <CardImg width="100%" src={baseUrl + entery.image} alt={entery.name} />
                <CardImgOverlay>
                    <CardTitle>{entery.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

//the main function uses the props as arg as it is called by another compoment to pass data down to it
function Menu(props) {

    const menu = props.enteries.enteries.map(entery => {
        return (
            <div key={entery.id} className="col-md-5 m-1">
                <RenderMenuItem entery={entery} />
            </div>
        );
    });
    if (props.enteries.isLoading) {
        return (
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.enteries.errMess) {
        return (
            <div className="container">
                <div className="row"> 
                    <div className="col">
                        <h4>{props.enteries.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    } 
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Menu</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;