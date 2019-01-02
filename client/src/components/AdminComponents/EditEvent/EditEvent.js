import React, { Component } from 'react';
import { Row, Col, Button } from 'mdbreact';
import Form from '../../Form/Form';
import axios from 'axios'

class EditEvent extends Component {
    state = {
        showFormSuccess: false,
        title: '',
        date: '',
        time: '',
        location: '',
        description: ''
     }

     componentDidMount(){
         // On Mount component pulls the data with the params and sets the state.
        const { match: { params } } = this.props;
        axios.get(`/api/event/${params.eventId}`).then(res=>{
            this.setState({ title: res.data.title})
            this.setState({date: res.data.date})
            this.setState({time: res.data.time})
            this.setState({location: res.data.location})
            this.setState({description: res.data.description})
            console.log('editEvent', this.state)
        })
     }
     // Submit Handler 
     submit = () => {
        const { match: { params } } = this.props;
        const event = {
            title: this.state.title,
            date: this.state.date,
            time: this.state.time,
            location: this.state.location,
            description: this.state.description,
          };
          axios.put(`/api/event/${params.eventId}`,event).then(res=>{
              console.log(res)
          })
        this.setState({ showFormSuccess: true });
        this.props.history.push('/admin')
        // setTimeout(() => { this.setState({ showFormSuccess: false }); }, 5000)
    }

     handletitleChange = event => { this.setState({ title: event.target.value }) }
     handledateChange = event => { this.setState({ date: event.target.value }) }
     handletimeChange = event => { this.setState({ time: event.target.value }) }
     handlelocationChange = event => { this.setState({ location: event.target.value }) }
     handledescriptionChange = event => { this.setState({ description: event.target.value }) }

    render() { 
        return (  
                 <React.Fragment>
                <h1>Edit Event</h1>
                <Row>
                    <Col md="1" />
                    <Col md="10 text-left">
                        <Form submit={this.submit}>
                            {/* Figure out what validations we need for event names */}
                            {/* Event Name Validations: required, unique (call to check for uniqueness on change), length*/}
                            <div className="form-group">
                                <label htmlFor="eventName">Event Name</label>
                                <input
                                    id="eventName"
                                    className="form-control"
                                    required={true}
                                    type="text"
                                    name="title"
                                    placeholder="Enter Event Name"
                                    minLength={6}
                                    defaultValue={this.state.title}
                                    onChange={this.handletitleChange}
                                />
                                <small>Event names need to be unique. For annual events, please include the event year.</small>
                                <div className="invalid-feedback" />
                            </div>
                            {/* Event Date Validations: required, custom validation for date in future */}
                            <div className="form-group">
                                <label htmlFor="eventDate">Event Date</label>
                                <input
                                    id="eventDate"
                                    name="eventDate"
                                    className="form-control"
                                    required={true}
                                    type="date"
                                    // onChange={(event) => this.handleDateChange(event)}
                                    defaultValue={this.state.date}
                                    onChange={this.handledateChange}
                                />
                                <div className="invalid-feedback" />
                            </div>
                            {/* Event Time Validations: required */}
                            <div className="form-group">
                                <label htmlFor="eventTime">Event Start Time</label>
                                <input
                                    id="eventStartTime"
                                    name="eventStartTime"
                                    className="form-control"
                                    required={true}
                                    type="time"
                                    defaultValue={this.state.time}
                                    onChange={this.handletimeChange}
                                />
                                <div className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="eventAddress">Event Address</label>
                                <input
                                    id="eventAddress"
                                    name="location"
                                    className="form-control"
                                    required={true}
                                    type="text"
                                    placeholder="Enter Event Address"
                                    minLength={10}
                                    defaultValue={this.state.location}
                                    onChange = {this.handlelocationChange}
                                />
                                <div className="invalid-feedback" />
                            </div>
                            {/* // Text area is not updating with defaultValue from state */}
                            <div className="form-group">
                                <label htmlFor="eventDescription">Event Description</label>
                                <textarea
                                    id="eventDescription"
                                    name="description"
                                    className="form-control"
                                    required={true}
                                    rows="5"
                                    placeholder="Enter Event Description"
                                    value={this.state.description}
                                    onChange = {this.handledescriptionChange}
                                    // minLength={50}
                                    // maxLength={1000}
                                    >
                                    </textarea>
                                <div className="invalid-feedback" />
                            </div>
                            {/* Fix form inputs: label blocks file name*/}
                            <div className="custom-file mb-3">
                                <label className="custom-file-label" htmlFor="eventImage">Upload Event Image</label>
                                <input
                                    id="eventImage"
                                    name="eventImage"
                                    required={true}
                                    className="custom-file-input"
                                    type="file"
                                    accept="image/png, image/jpeg" />
                                <div className="invalid-feedback" />
                            </div>
                            <div className="custom-file mb-3">
                                <label className="custom-file-label" htmlFor="eventMap">Upload Event Map</label>
                                <input
                                    id="eventMap"
                                    name="eventMap"
                                    required={true}
                                    className="custom-file-input"
                                    type="file"
                                    accept="image/png, image/jpeg" />
                                <small>Accepted filetypes: png, jpeg</small>
                                <div className="invalid-feedback" />
                            </div>

                            <div className={"row justify-content-md-center"}>
                                <Col>
                                    <Button type="submit" onClick={this.submit} className="btn-block">Edit Event</Button>
                                </Col>
                            </div>

                        </Form>
                        {this.state.showFormSuccess ? this._renderSuccessMessage() : null}
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
 
export default EditEvent;