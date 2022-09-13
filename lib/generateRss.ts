import { Feed, Item } from "feed";
import { loadAllArticles } from "./loadArticles";
import { loadAllProjects } from "./loadProjects";
import { loadAllSnippets } from "./loadSnippets";
import { loadAllCategories } from "./loadCategories";

import { siteMetadata } from "../site-metadata";
import { Article, Project, Snippet } from "../types/post";
import { writeFileSync, mkdirSync } from "fs";

export const generateRssFeed = async () => {
    const [articles, projects, snippets, categories] = await Promise.all([
        loadAllArticles(),
        loadAllProjects(),
        loadAllSnippets(),
        loadAllCategories()
    ]);



    const author = {
        name: siteMetadata.author.name,
        email: siteMetadata.social.email,
        link: siteMetadata.siteUrl
    }

    // Construct a new Feed object
    const feed = new Feed({
        title: siteMetadata.title,
        description: siteMetadata.description,
        id: siteMetadata.siteUrl,
        link: siteMetadata.siteUrl,
        language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
        favicon: "http://example.com/favicon.ico",
        copyright: `All rights reserved ${new Date()}`,
        updated: new Date(), // optional, default = today
        generator: "awesome", // optional, default = 'Feed for Node.js',
        author: author,
        feedLinks: {
            json: `${siteMetadata.siteUrl}/json`,
            atom: `${siteMetadata.siteUrl}/atom`,
            rss: `${siteMetadata.siteUrl}/rss`,
        },
    });

    const parseCategories = categories.forEach((category: any) => {
        feed.addCategory(category.name)
    })
    // Add each article to the feed
    const parseArticles = articles.forEach((article: Article) => {
        const {
            title,
            description,
            published,
            updated,
            slug
        } = article;

        const url = `${siteMetadata.siteUrl}/article/${slug}`;
        return feed.addItem({
            title,
            id: url,
            link: url,
            description: description,
            author: [author],
            published: new Date(published!),
            date: new Date(updated!),
        });
    });


    const parseProjects = projects.forEach((project: Project) => {
        const {
            title,
            description,
            published,
            updated,
            slug
        } = project;

        const url = `${siteMetadata.siteUrl}/project/${slug}`;
        return feed.addItem({
            title,
            id: url,
            link: url,
            description: description,
            author: [author],
            published: new Date(published!),
            date: new Date(updated!),
        });
    });

    const parseSnippets = snippets.forEach((snippet: Snippet) => {
        const {
            title,
            description,
            published,
            updated,
            slug
        } = snippet;

        const url = `${siteMetadata.siteUrl}/snippet/${slug}`;
        return feed.addItem({
            title,
            id: url,
            link: url,
            description: description,
            author: [author],
            published: new Date(published!),
            date: new Date(updated!),
        });
    });

    await Promise.all([parseArticles, parseSnippets, parseProjects, parseCategories])

    await Promise.all([
        mkdirSync("public/rss", { recursive: true }),
        writeFileSync("public/rss/rss.xml", feed.rss2()),
        writeFileSync("public/rss/atom.xml", feed.atom1()),
        writeFileSync("public/rss/feed.json", feed.json1()),
    ]);
}

