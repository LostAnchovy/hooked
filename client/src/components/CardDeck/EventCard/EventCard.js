import React from 'react';
import { Col, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { Link } from 'react-router-dom';

// eventCard component needs to receive a single event as props to display dynamic content
const eventCard = (props) => {
    return (
        <Col lg="4">
            <Card className="m-1">
            <CardImage className="img-fluid img-cover" width="100%" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg" />
                <CardBody>
                    <CardTitle className="text-center">{props.event.title}</CardTitle>

                    <CardText className="text-center">{props.event.description}</CardText>
                    {/* Remember to make the link for the unique event id */}
                    <Link to={`/event/${props.event.id}`}><button className="btn btn-primary">View Event</button> </Link>
                </CardBody>
            </Card>
        </Col>
    )
}

export default eventCard;