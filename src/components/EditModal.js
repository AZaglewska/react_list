import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../components/styles.css';

const EditModal = ({ hideEditModal, isEditOpen, updateData }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    updateData(e.target.id.value, e.target.name.value, e.target.email.value);
    e.target.name.value = '';
    e.target.email.value = '';
    hideEditModal();
  };

  return (
    <Modal show={isEditOpen} onHide={hideEditModal}>
      <Modal.Header>
        <Modal.Title>Edit your data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="id">
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" placeholder="Enter Id" name="id" />
          </Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Group className="mb-3" controlId="name">
            <Form.Control type="text" placeholder="Enter name" name="name" />
          </Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>
          <Button
            variant="primary"
            onChange={() => handleOnSubmit()}
            type="submit"
          >
            <i className="icon-button-edit"></i>
            Edit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={hideEditModal} type="submit">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
