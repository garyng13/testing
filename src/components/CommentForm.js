import React, {Component, useState} from 'react';
import {Modal,ModalHeader, ModalBody,ModalFooter, ModalTitle, Button, Row, Label} from "reactstrap";
import { LocalForm, Control, Errors } from 'react-redux-form';

const CommentForm = function CommentForm(){

    const [show, setShow] = useState(false);
    const [modalIsOpen, setmodalIsOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleModal = () =>{setmodalIsOpen(!modalIsOpen);console.log(modalIsOpen);}; 

  const require = (val)=> val && val.length;
  const max = (length)=>(val)=> !val || val.length<=length;
  const min= (length)=>(val)=> val && val.length > length;
 

  return (
    <frameElement>
      <Button variant="primary" onClick={toggleModal}>
        Submit comments
      </Button>
      <Modal isOpen={modalIsOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
        </ModalHeader>
        <ModalBody>
            <LocalForm>
                <Row className="form-group">
                <Label>Your name</Label>
                <Control.text model=".author"className="form-control"
                validators = {{
                  require, max:max(15), min:min(3)
                }}>

                </Control.text>
                <Errors model=".author" 
                className ="text-danger"
                messages = {{
                  max : "no more than 15 characters",
                  min : "at least 3 characters",
                  require: 'field required to fill'
                }}
                show={{touched: true}}>

                </Errors>
                </Row>
                <Row className="form-group">
                <Label>Rating</Label>
                <Control.select model=".rating" className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Control.select>
                </Row>
                <Row className="form-group">
                <Label>Comments</Label>
                <Control.textarea  model=".comment" className="form-control" rows="6">

                </Control.textarea>
                </Row>
                <button type="submit">Submit</button>
            </LocalForm>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </frameElement>
  );
}

export default CommentForm;