/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

type SiteMeta = {
	title: string,
	description: string,
	author: {
		name: string,
		summary: string,
	},
	social: {
		github: string,
	},
}

interface SEOProps {
	title: string,
	description: string
	lang: string,
	siteMeta: SiteMeta,
	contentType?: string,
	meta?: any,
}



const SEO = ({ siteMeta, description, lang, title, contentType }: SEOProps) => {

	const metaDescription = description || siteMeta.description;
	const metaTitle = title || siteMeta.title;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={metaTitle ? `%s | ${metaTitle}` : null}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: metaTitle,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: contentType || `website`,
				},
				{
					name: `twitter:site`,
					content: `@`
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: siteMeta.social?.github || ``,
				},
				{
					name: `twitter:title`,
					content: metaTitle,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat([])}
		/>
	)
}

export default SEO;
