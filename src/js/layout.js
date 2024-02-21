import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";

import  { AddContactPage } from "./views/AddContactPage";
import { UpdateContactPage } from "./views/UpdateContactPage";
import { ContactCard } from "./component/ContactCard";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/AddContactPage" element={<AddContactPage />} /> 
						<Route path="/UpdateContactPage/:contactId" element={<UpdateContactPage />} />
						<Route path="/contact/:contactId" element={<ContactCard />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
