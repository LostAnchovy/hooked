import React, { Component } from 'react';
import { Row, Col, Button } from 'mdbreact';
import axios from 'axios'

class resetPassword extends Component {
    state = {
        showFormSuccess: false,
        validate: false,
        submitted: false,
        email: '',
    }
    handleemailChange = event => { this.setState({ email: event.target.value }) }

    submit = (event) => {
        event.preventDefault();
        this.setState({ showFormSuccess: true})
        this.setState({ submitted: true })
        const user = {
            email: this.state.email,
        };
        axios.post('/resetpassword', user);
        setTimeout(() => { this.setState({ showFormSuccess: false }); }, 10000)
    }

    _renderSuccessMessage() {
        return (
            <div className={"alert alert-success mt-4"} role="alert">
                <p>An Email was sent for validation. Please check to instructions to update your user information </p>
            </div>
        )
    }

    _renderErrorMessage() {
        return (
            <div className={"alert alert-danger mt-4 alert-dismissible"} role="alert">
                <a class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <p>{this.props.error}</p>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="text-center">Reset Password</h1>
                <Row>
                    <Col md="1" />
                    <Col md="10 text-left">
                        {/* Should we wrap this in a FORM class?? */}
                        {this.state.showFormSuccess ? this._renderSuccessMessage() : null}
                        {this.props.error ? this._renderErrorMessage() : null}
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    className="form-control"
                                    type="text"
                                    name="email"
                                    placeholder="Enter Valid Email"
                                    onChange={this.handleemailChange}
                                    required={true}
                                    minLength={2}
                                />
                                <div className="invalid-feedback" />
                            </div>
                            <div className={"row justify-content-md-center"}>
                                <div className={"col-sm-12"}>
                                    <Button className={"btn btn-primary btn-block"} onClick={this.submit} type="submit" >Reset Password</Button>
                                </div>
                            </div>
                        </form>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default resetPassword;
