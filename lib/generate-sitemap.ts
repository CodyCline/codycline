import { writeFileSync } from "fs";
import { globby } from "globby";
import { loadAllArticles } from "./load-articles";
import { loadAllProjects } from "./load-projects";
import { loadAllSnippets } from "./load-snippets";
import { loadAllCategories } from "./load-categories";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import prettier from "prettier";
import { Article, Project, Snippet } from "../types/post";


export async function generateSitemap() {
    const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
    const blocklist = ["/404"];

    const pages = await globby([
        "pages/**/*{.tsx,.mdx}",
        "!pages/**/[*",
        "!pages/_*{.tsx, .js}",
        "!pages/api"
    ]);



    // normal page routes
    const pageLinks = pages
        .map((page) => {
            const path = page
                .replace("pages", "")
                .replace(".tsx", "")
                .replace(".mdx", "")
                .replace("articles/index", "articles")
                .replace("projects/index", "projects")
                .replace("snippets/index", "snippets")

            return path === "/index"
                ? { url: "/", changefreq: "daily", priority: 0.7 }
                : { url: path, changefreq: "daily", priority: 0.7 };
        })
        .filter((page) => !blocklist.includes(page.url));

    const [articles, projects, snippets, categories] = await Promise.all([
        loadAllArticles(),
        loadAllProjects(),
        loadAllSnippets(),
        loadAllCategories()
    ]);

    const articleLinks = articles.map((article: Article) => ({
        url: `/article/${article.slug}`,
        changefreq: "weekly",
        lastmod: new Date(article.updated || article.created!).toISOString(),
        priority: 0.7
    }));

    const projectLinks = projects.map((project: Project) => ({
        url: `/project/${project.slug}`,
        changefreq: "weekly",
        lastmod: new Date(project.updated || project.created!).toISOString(),
        priority: 0.7
    }));

    const snippetLinks = snippets.map((snippet: Snippet) => ({
        url: `snippet/${snippet.slug}`,
        changefreq: "weekly",
        lastmod: new Date(snippet.updated || snippet.created!).toISOString(),
        priority: 0.7
    }));

    const categoryLinks = categories.map((category: any) => ({
        url: `category/${category.name}`,
        changefreq: "daily",
        priority: 0.7
    }));


    const links = [...pageLinks, ...articleLinks, ...projectLinks, ...snippetLinks, ...categoryLinks];
    const stream = new SitemapStream({ hostname: "https://codycline.com" });

    const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
        data.toString()
    );


    const sitemap = prettier.format(xml, {
        ...prettierConfig,
        parser: "html"
    });


    // eslint-disable-next-line no-sync
    writeFileSync("public/sitemap.xml", sitemap);
}
