import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export const UpdateContactPage = () => {
    let { contactId } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: ""
    });

    // Función para cargar los datos actuales del contacto
    const fetchContactData = async () => {
        try {
            const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`);
            if (!response.ok) throw new Error('No se pudo obtener la información del contacto');
            const data = await response.json();
            setContact({
                fullName: data.full_name,
                email: data.email,
                phone: data.phone,
                address: data.address
            });
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchContactData();
    }, [contactId]);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    // Función para manejar el envío del formulario
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
                    address: contact.address
                }),
            });

            if (!response.ok) throw new Error('No se pudo actualizar el contacto');
            alert('Contacto actualizado con éxito');
            navigate("/");
        } catch (error) {
            console.error("Error:", error);
        }
    };

	return (
		<div className='contactForm'>
			<h1 className='text-center'>Actualizar contacto</h1>
			<div className="mb-3">
				<label htmlFor="fullName" className="form-label">Nombre completo</label>
				<input type="text" className="form-control" id="fullName" placeholder="Introduzca su nombre completo" />
			</div>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">Email</label>
				<input type="email" className="form-control" id="email" placeholder="Introduzca su email" />
			</div>
			<div className="mb-3">
				<label htmlFor="phone" className="form-label">Teléfono</label>
				<input type="tel" className="form-control" id="phone" placeholder="Introduzca su teléfono" />
			</div>
			<div className="mb-3">
				<label htmlFor="address" className="form-label">Dirección</label>
				<input type="text" className="form-control" id="address" placeholder="Introduzca su dirección" />
			</div>
			<button className="btn btn-primary w-100 mb-3">Guardar</button>
			<Link to="/">
				<p>Volver a la lista de contactos</p>
			</Link>
		</div>
	);
};
