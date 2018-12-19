import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import axios from 'axios'

// AdminDashboard will receive all events as props. We need to filter which events are available to the user based on access privilages to populate the card deck

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchAllEvents();
    }

    deleteEvent = (id) => {
        console.log("delete event id",id)
        axios.delete(`/api/event/${id}`)
        this.componentDidMount()
    }

    render() {
        return (
            <React.Fragment className="text-left">
                <div className="card-deck m-2 p-3">
                    {this.props.events.map((event, i)=>
                    <Col lg="4" key={i}>
                        <Card className="m-1">
                            <CardImage className="img-fluid img-cover" width="100%" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg" />
                            <CardBody>
                                <CardTitle className="text-center">{event.title}</CardTitle>
                                <CardText className="text-center">{event.description}.</CardText>
                                <Row>
                                    <Col md="4">
                                        <Link to="/admin/product"><button className="btn p-1 m-1 btn-sm btn-block btn-primary">Products</button> </Link>
                                    </Col>
                                    <Col md="4">
                                        <Link to="/admin/participant"><button className="btn p-1 m-1 btn-sm btn-block btn-default">Participants</button> </Link>
                                    </Col>
                                    <Col md="4">
                                        <Link to="/admin/sponsor"><button className="btn p-1 m-1 btn-sm btn-block btn-secondary">Sponsors</button> </Link>
                                    </Col>
                                    <Col md="4">
                                        <Link to="/admin/orders"><button className="btn p-1 m-1 btn-sm btn-block btn-primary">Orders</button> </Link>
                                    </Col>
                                    <Col md="4">
                                        <Link to={`/admin/event/edit/${event.id}`}><button className="btn p-1 m-1 btn-sm btn-block btn-default">Update</button> </Link>
                                    </Col>
                                    <Col md="4">
                                        {/* Add functionality to handle the button click */}
                                        <button className="btn p-1 m-1 btn-sm btn-block btn-secondary" onClick={()=>this.deleteEvent(event.id)}>Delete</button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    )}
                </div>
                <hr />
                <Link to="/admin/createEvent"><button className="btn btn-primary text-left">Create Event</button></Link>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        events: state.event.events
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllEvents: () => dispatch(actions.fetchAllEvents()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

