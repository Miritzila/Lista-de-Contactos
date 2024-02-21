import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const AddContactPage = () => {
    const navigate = useNavigate();
    const [contact, setContact] = useState({
        full_name: "",
        email: "",
        agenda_slug: "miritzila",
        address: "",
        phone: ""
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://playground.4geeks.com/apis/fake/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                navigate("/");
            } else {
                console.error("Error al guardar el contacto");
            }
        } catch (error) {
            console.error("Error al conectar con la API", error);
        }

    };

    return (
        <form className='contactForm' onSubmit={handleSubmit}>
            <h1 className='text-center'>Añadir contacto</h1>
            <div className="mb-3">
                <label htmlFor="full_name" className="form-label">Nombre completo</label>
                <input type="text" className="form-control" id="full_name" placeholder="Introduzca su nombre completo" onChange={handleChange} value={contact.full_name} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Introduzca su email" onChange={handleChange} value={contact.email} />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input type="tel" className="form-control" id="phone" placeholder="Introduzca su teléfono" onChange={handleChange} value={contact.phone} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Dirección</label>
                <input type="text" className="form-control" id="address" placeholder="Introduzca su dirección" onChange={handleChange} value={contact.address} />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">Guardar</button>
            <Link to="/">
                <p>Volver a la lista de contactos</p>
            </Link>
        </form>
    );
};
