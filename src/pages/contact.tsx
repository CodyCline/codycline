import React from "react";
import { Layout } from "../components/layout/layout";
import SEO from "../utils/seo";
import { withAddons } from '../utils/with-addons';
import { Divider } from "../components/ui/divider/divider";
import '../styles/index.scss';

const Contact = () => {
	return (
		<Layout >
			<SEO title="Contact page" />
			<div className="project__container">
				<h2>Contact</h2>
				<Divider style={{ width: "30vh" }} />
				<div className="project__page">
                <iframe 
                    className="airtable-embed" 
                    src={process.env.GATSBY_CONTACT_LINK}
                    frameBorder="0" 
                    width="100%" 
                    height="533" 
                    style={{background: `black`, border: `1px solid #ccc`}}
                />
				</div>
			</div>
		</Layout>
	)
}
export default withAddons(Contact);