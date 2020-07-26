import React, { Component } from 'react';
import Menu from './MenuComponent';
import EnteryInfo from './EnteryInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { postReview, postFeedback,postReserve, fetchEnteries,fetchReviews,fetchSpecials, fetchServices} from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        enteries: state.enteries,
        reviews: state.reviews,
        services: state.services,
        specials: state.specials
    };
};

const mapDispatchToProps = {
    postReview: (enteryId, rating, author, text) => (postReview(enteryId, rating, author, text)),
    postFeedback: (feedback) => (postFeedback(feedback)),
    postReserve: (reserveinfo) => (postReserve(reserveinfo)),
    fetchEnteries: () => (fetchEnteries()),
    resetFeedbackForm: () => (actions.reset('feedbackForm')),
    resetReserveForm: () => (actions.reset('reserveForm')),
    resetLoginForm: () => (actions.reset('loginForm')),
    fetchReviews: () => (fetchReviews()),
    fetchServices: () => (fetchServices()),
    fetchSpecials: () => (fetchSpecials())
};
class Main extends Component {
    componentDidMount() {
        this.props.fetchEnteries();
        this.props.fetchReviews();
        this.props.fetchSpecials();
        this.props.fetchServices();
    }
    render() {
        const HomePage = () => {
            return (
                <Home
                    entery={this.props.enteries.enteries.filter(entery => entery.featured)[0]}
                    enteriesLoading={this.props.enteries.isLoading}
                    enteriesErrMess={this.props.enteries.errMess}
                    special={this.props.specials.specials.filter(special => special.featured)[0]}
                    specialLoading={this.props.specials.isLoading}
                    specialErrMess={this.props.specials.errMess}
                    service={this.props.services.services.filter(service => service.featured)[0]}
                    serviceLoading={this.props.services.isLoading}
                    serviceErrMess={this.props.services.errMess}
                />
            );
        }

        const EnteryWithId = ({match}) => {
            return (
                <EnteryInfo 
                    entery={this.props.enteries.enteries.filter(entery => entery.id === +match.params.enteryId)[0]}
                    isLoading={this.props.enteries.isLoading}
                    errMess={this.props.enteries.errMess}
                    reviews={this.props.reviews.reviews.filter(review => review.enteryId === +match.params.enteryId)}
                    reviewsErrMess={this.props.reviews.errMess}
                    postReview={this.props.postReview}
                />
            );
        };
        //
        return (
            <div>
                <Header resetReserveForm={this.props.resetReserveForm} resetLoginForm={this.props.resetLoginForm} postReserve={this.props.postReserve}/>
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/menu' render={() => <Menu enteries={this.props.enteries} />} />
                            <Route path='/menu/:enteryId' component={EnteryWithId} />
                            <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} /> } />
                            <Route exact path='/aboutus' render={() => <About services={this.props.services} /> } />
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
