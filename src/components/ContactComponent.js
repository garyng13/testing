import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Row, Label,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from "react-redux-form";

const required = (val) => val && val.length;
//const maxLength = (len) => (val) => {if(val!=null) return(val.length <= len)};
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && val.length >=len;
const isEmail = (val) => new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(val);
const isTel = (val) => new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g).test(val);
//const isNumber = (val) => !isNaN(Number(val));
//const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component{

    constructor(props){
        super(props);
    }

    handleSubmit(value){
        console.log(value);
    }

    render(){

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className = "col-12">
                        <h3>Please send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="Firstname" md={2}>
                                    First Name
                                </Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" placeholder="firstname"
                                    name="firstname" className = "form-control"
                                    validators ={{required,max:maxLength(15), min:minLength(3)}}
                                    />
                                    <Errors model = ".firstname" className ="text-danger"
                                    show={{touched: true}}
                                    
                                    messages={{required:'field is required ', 
                                    max:'max length is 15 ', min:"min length is 3 "
                                    }}>
                                    </Errors>
                                </Col>                               
                            </Row>                          
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>
                                    Last Name
                                </Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" placeholder="lastname"
                                    name="lastname" className="form-control"
                                    validators ={{required,max:maxLength(15), min:minLength(3)}}
                                    />
                                    <Errors model = ".lastname" className ="text-danger"
                                    show={{touched: true}}
                                    
                                    messages={{required:'field is required ', 
                                    max:'max length is 15 ', min:"min length is 3 "
                                    }}>
                                    </Errors>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>
                                    Telephone number
                                </Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum" placeholder="Tel number"
                                    className="form-control"
                                    validators ={{required,isTel:isTel()}}
                                    />
                                    <Errors model = ".telnum" className ="text-danger"
                                    show={{touched: true}}
                                    
                                    messages={{required:'field is required ', 
                                    isTel : "please enter numbers"
                                    }}>
                                    </Errors>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" placeholder="email"
                                    className="form-control"
                                    validators ={{required,isEmail}}
                                    />
                                    <Errors model = ".email" className ="text-danger"
                                    show={{touched: true}}
                                    messages={{required:'field is required ', 
                                    isEmail : "it is not an email address"
                                    }}>
                                    </Errors>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset:2}}>
                                    <Row>
                                        <Label check htmlFor="checkbox">
                                            <Control.checkbox model=".agree" className="form-check-input"/>
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </Row>                               
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Control.select model=".contacttype" className="form-control">
                                        <option>email</option>
                                        <option>tel</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor= "message" md={2}>Your feedback</Label>
                                <Col md ={10}>
                                    <Control.textarea model=".message" id="message" name="message" rows="4" cols="12" placeholder="enter message here"
                                    className="form-control"></Control.textarea>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{size:10,offset:2}}>
                                    <Control.button model=".submit" color="primary">Submit Feedback</Control.button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }


}

export default Contact;