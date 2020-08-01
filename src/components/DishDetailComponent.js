import React, {Component, Fragment} from 'react';
import {Media } from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay,CardBody, Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';


    function RenderSelectedDish({dish}){
        console.log(dish);
        if(dish!=null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                        <CardBody>
                            {dish.description}
                        </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }    
    }

    function RenderComment({comments}) {
        if (comments != null)
            {
                const cmt = comments.map((comment) =>{
                    return (
                        <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author},&nbsp;{new Intl.DateTimeFormat('en-GB',{
                            year:'numeric',
                            month:'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}</p>
                        
                      </li> 
                    )
                })
                              
            
                return (
                    <div>
                        <h4> Comments </h4>
                        <ul className = 'list-unstyled'>{cmt}</ul>
                        <CommentForm></CommentForm>
                    </div>
                )
            }
        
        else
            return(
                <div></div>
            );
    }



    const Dishdetail = (props)=>{
        console.log(props);
        console.log(props.comment);
        const selectedDish = props.dish;
               if (selectedDish == null) {
                  return (<div></div>)
                }
        
        return(
            <div className = "container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>   
                </div>
                <div className = "row">
                    <div className="col-12 col-md-5 mt-5">
                        <RenderSelectedDish dish={selectedDish}/>
                    </div>
                    <div className="col-12 col-md-5 mt-5">
                        <RenderComment comments ={props.comments}/>
                        
                    </div>
                </div>
            </div>
        );
    }

export default Dishdetail;