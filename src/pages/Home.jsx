import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../hooks/store";
import ContactCard from "../components/ContactCard";

const Home = () => {
  const { store } = useStore(); 
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista de Contactos</h1>
      <div className="d-flex justify-content-end mb-3">
        <Link to="/add-contact" className="btn btn-primary">
          Añadir Contacto
        </Link>
      </div>
      <div className="row">
        {store.contacts && store.contacts.length > 0 ? (
          store.contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        ) : (
          <p>No hay contactos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
