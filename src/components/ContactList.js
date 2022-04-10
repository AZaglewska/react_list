import React from 'react';
import Button from 'react-bootstrap/Button';
import AddModal from './AddModal';
import EditModal from './EditModal';
import { useState } from 'react';
import './styles.css';

const ContactList = ({ listContent, deleteUser, addUser, updateData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const showEditModal = () => {
    setIsEditOpen(true);
  };

  const hideEditModal = () => {
    setIsEditOpen(false);
  };

  return (
    <>
      <ul className="list-wrapper">
        {listContent.map((listContentEl) => {
          const { name, id, email } = listContentEl;

          return (
            <div className="list" key={id}>
              <li className="list-group-item list-group-item-secondary">
                {name}
              </li>
              <li className="list-group-item list-group-item-light">{email}</li>
              <div className="button-wrapper">
                <button
                  className="icon-button"
                  onClick={() => showEditModal()}
                />
                <button
                  onClick={() => deleteUser(id)}
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          );
        })}
        <Button className="add-button" onClick={() => showModal()}>
          <i className="icon-button-add"></i>Add User data
        </Button>
      </ul>

      {isOpen ? (
        <AddModal isOpen={isOpen} onHide={hideModal} addUser={addUser} />
      ) : (
        false
      )}
      {isEditOpen ? (
        <EditModal
          isEditOpen={isEditOpen}
          hideEditModal={hideEditModal}
          updateData={updateData}
          listContent
        />
      ) : (
        false
      )}
    </>
  );
};

export default ContactList;
