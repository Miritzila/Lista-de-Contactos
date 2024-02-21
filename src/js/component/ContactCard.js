import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const ContactCard = () => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                
                const response = await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/miritzila');
                if (!response.ok) throw new Error('No se pudo obtener la información de los contactos');
                const data = await response.json();
                setContacts(data);
            } catch (error) {
                console.error("Error al realizar la solicitud al servidor", error);
            }
        };

        fetchContacts();
    }, []);

    return (
        <>
            {contacts.map((contact, index) => (
                <div className="card" key={index}>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <img
                                    src="https://media.licdn.com/dms/image/C5603AQGxUFpkS8019A/profile-displayphoto-shrink_800_800/0/1565858447595?e=1714003200&v=beta&t=EkutwHG9f_43Ubm9y8dNI19hBE7winGRXcB1rtZgBHY"
                                    className="img-contacto"
                                    alt="img-contacto"
                                />
                            </div>
                            <div className="col-6 info-contacto text-start">
                                <h5>{contact.full_name}</h5>
                                <p><FontAwesomeIcon icon={faLocationDot} /> {contact.address}</p>
                                <p><FontAwesomeIcon icon={faPhone} /> {contact.phone}</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> {contact.email}</p>
                            </div>
                            <div className="col">
                                <Link to={`/UpdateContactPage/${contact.id}`}>
                                    <FontAwesomeIcon className="iconos" icon={faPen} />
                                </Link>
                                <FontAwesomeIcon className="iconos" icon={faTrash} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};