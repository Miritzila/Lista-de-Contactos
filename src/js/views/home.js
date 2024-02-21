import React from "react";
import { ContactCard } from "../component/ContactCard";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Lista de contactos</h1>
		<ContactCard/>
	</div>
);
