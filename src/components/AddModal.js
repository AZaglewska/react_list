import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../components/styles.css';

const AddModal = ({ onHide, addUser, isOpen }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(e.target.name.value, e.target.email.value);
    e.target.name.value = '';
    e.target.email.value = '';
    onHide();
  };

  return (
    <>
      <Modal show={isOpen} onHide={onHide}>
        <Modal.Header>
          <Modal.Title>Add your data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Label>Name</Form.Label>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control type="text" placeholder="Enter name" name="name" />
            </Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
            </Form.Group>
            <Button
              variant="primary"
              onChange={() => handleOnSubmit()}
              type="submit"
            >
              <i className="icon-button-add"></i>
              Add user
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onHide} type="submit">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddModal;
