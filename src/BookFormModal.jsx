import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Form from 'react-bootstrap/Form';
const url=import.meta.env.VITE_server_url


class BookFormModal extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const formTitle = event.target.elements.formTitle.value;
    const formDescription = event.target.elements.formDescription.value;
    const formStatus = event.target.elements.formStatus.value;

    if (this.props.editingBook) {
      // If editing, send our updated data to the server and handle the response
      const updatedData = { title: formTitle, description: formDescription, status: formStatus };
      try {
        const response = await fetch(`${url}/books/${this.props.editingBook._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        });

        if (response.ok) {
          // Handle success, update the book list or refresh data as needed
          this.props.onModalClose();
        } else {
          // handle whatever error pops up
        }
      } catch (error) {
        // handle whatever error pops up
      }
    } else {
      this.props.onModalSave(formTitle, formDescription, formStatus);
      this.props.onModalClose();
    }
  }

  render() {
    const { showNewBookForm, editingBook } = this.props;
    console.log(this.props)
    return (
      <Modal show={showNewBookForm}>
        <Modal.Header closeButton>
          <Modal.Title>{editingBook ? 'Edit Book' : 'Add Book'}</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control required type="text" defaultValue={editingBook ? editingBook.title : ''} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control required as="textarea" defaultValue={editingBook ? editingBook.description : ''} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Select required defaultValue={editingBook ? editingBook.status : 'Available'}>
                <option value="Available">Available</option>
                <option value="Checked Out">Checked Out</option>
                <option value="On Hold">On Hold</option>
              </Form.Select>
            </Form.Group>

            <Button type='submit' variant="dark">
              {editingBook ? 'Save Changes' : 'Save Book'}
            </Button>
          </form>
        </Modal.Body>
    
        <Modal.Footer>
          <Button onClick={this.props.onModalClose} variant="secondary">
            Close Without {editingBook ? 'Saving Changes' : 'Saving'}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}



export default BookFormModal;