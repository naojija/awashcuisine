import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import Zoom from 'react-reveal/Zoom';
import { baseUrl } from '../shared/baseUrl';

function RenderCard({ item, isLoading, errMess }) {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    return (
        <Zoom>
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </Zoom>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard
                        item={props.entery}
                        isLoading={props.enteriesLoading}
                        errMess={props.enteriesErrMess}
                    />
                </div>
                <div className="col-md m-1">
                    <RenderCard
                        item={props.special}
                        isLoading={props.specialLoading}
                        errMess={props.specialErrMess}
                    />
                </div>
                <div className="col-md m-1">
                    <RenderCard
                        item={props.service}
                        isLoading={props.serviceLoading}
                        errMess={props.serviceErrMess}
                     />
                </div>
            </div>
        </div>
    );
}

export default Home; 