// src/pages/EditContact.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../hooks/store";

const EditContact = () => {
  const { store, dispatch } = useStore();
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    agenda_slug: "javigarzon",
  });

  useEffect(() => {
    const contact = state.contacts.find((c) => c.id === parseInt(id));
    if (contact) {
      setForm(contact);
    }
  }, [id, state.contacts]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://playground.4geeks.com/todo/users/javigarzon`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      dispatch({ type: "UPDATE_CONTACT", payload: data });
      navigate("/");
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h1 className="text-center mb-4">Editar Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default EditContact;
