import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Form from 'react-bootstrap/Form';

class BookFormModal extends React.Component{
    handleSubmit = (event) => {
        event.preventDefault();
        const formTitle = event.target.elements.formTitle.value;
        const formDescription = event.target.elements.formDescription.value;
        const formStatus = event.target.elements.formStatus.value;

        this.props.onModalSave(formTitle, formDescription, formStatus);
        this.props.onModalClose();
    }

    
render(){
    return (
        <Modal
        show={this.props.showNewBookForm}
        >
            <Modal.Header closeButton>
              <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
            <form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control required type="title" placeholder="Enter title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control  required type="textarea" placeholder="Enter description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formStatus">
                    <Form.Label>Status</Form.Label>
                    <Form.Select  required type="select" placeholder="Enter status">
                    <option value="Available">Available</option>
                    <option value="Checked Out">Checked Out</option>
                    <option value="On Hold">On Hold</option>
                </Form.Select>
                </Form.Group>
                <Button type='submit' variant="dark">Save Book</Button>
              </form>
            </Modal.Body>
    
            <Modal.Footer>
              <Button onClick={this.props.onModalClose} variant="secondary">Close Without Saving</Button>

            </Modal.Footer>
        </Modal>
      );


    }



}





export default BookFormModal;