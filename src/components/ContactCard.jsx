import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../hooks/store";

const ContactCard = ({ contact }) => {
  const navigate = useNavigate();
  const { dispatch } = useStore();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `https://playground.4geeks.com/todo/users/javigarzon${contact.id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        dispatch({ type: "DELETE_CONTACT", payload: contact.id });
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    } finally {
      setShowModal(false);
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{contact.full_name}</h5>
          <p className="card-text">📧 {contact.email}</p>
          <p className="card-text">📞 {contact.phone}</p>
          <p className="card-text">🏠 {contact.address}</p>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-warning"
              onClick={() => navigate(`/edit-contact/${contact.id}`)}
            >
              Editar
            </button>
            <button className="btn btn-danger" onClick={() => setShowModal(true)}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalConfirmDelete
          onCancel={() => setShowModal(false)}
          onConfirm={handleDelete}
          name={contact.full_name}
        />
      )}
    </div>
  );
};

export default ContactCard;
