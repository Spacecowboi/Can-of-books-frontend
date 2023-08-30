import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Form from 'react-bootstrap/Form';

class BookFormModal extends React.Component{
    
render(){
    return (
        <Modal
        show={this.props.showNewBookForm}
        >
            <Modal.Header closeButton>
              <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="title" placeholder="Enter title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formStatus">
                    <Form.Label>Status</Form.Label>
                    <Form.Select type="select" placeholder="Enter status">
                    <option value="1">Available</option>
                    <option value="2">Checked Out</option>
                    <option value="3">On Hold</option>
                </Form.Select>
                </Form.Group>

              </Form>
            </Modal.Body>
    
            <Modal.Footer>
              <Button onClick={this.props.onModalClose} variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
      );


    }



}





export default BookFormModal;