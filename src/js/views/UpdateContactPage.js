import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export const UpdateContactPage = () => {
    let { contactId } = useParams();
    const navigate = useNavigate();
    
    const [contact, setContact] = useState({
        fullName: "",
        email: "",
        agenda_slug: "miritzila",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    full_name: contact.fullName,
                    email: contact.email,
                    phone: contact.phone,
                    address: contact.address,
                    agenda_slug: contact.agenda_slug
                }),
            });
    
            if (!response.ok) throw new Error('No se pudo actualizar el contacto');
            alert('Contacto actualizado con éxito');
            navigate("/");
        } catch (error) {
            console.error("Error al actualizar el contacto:", error);
        }
    };
    
    return (
        <div className='contactForm'>
            <h1 className='text-center'>Actualizar contacto</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Nombre completo</label>
                    <input type="text" className="form-control" name="fullName" id="fullName" placeholder="Introduce el nombre completo" value={contact.fullName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Introduce el email" value={contact.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input type="tel" className="form-control" name="phone" id="phone" placeholder="Introduce el teléfono" value={contact.phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="address" id="address" placeholder="Introduce la dirección" value={contact.address} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">Guardar</button>
                <Link to="/">
                    <p>Volver a la lista de contactos</p>
                </Link>
            </form>
        </div>
    );
};