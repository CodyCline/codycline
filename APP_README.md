<h1 align="center">
  Portfolio Website
</h1>

Portfolio website and blog with developer-focused content 🛸

[![Github Actions Build Status](https://github.com/codycline/codycline/workflows/aws_ci/badge.svg)](https://github.com/codycline/codycline/actions/workflows/aws-build.yml)

[![Github Actions Test Status](https://github.com/codycline/codycline/workflows/tests/badge.svg)](https://github.com/codycline/codycline/actions/workflows/tests.yml)


## 🔧 Under the hood.

A quick look at the top-level files and directories you'll see in this Gatsby project.

    ├── node_modules
    ├── components
    ├── content
    ├── public
      ├── assets
        ├── icons
        ├── img
        └── sfx
      ├── content
      └── rss
    ├── pages
    ├── types
    └── utils
    ├── functions
    ├── .github
      └── workflows
    ├── .gitignore
    ├── .eslintrc.json
    ├── next.config.js
    ├── LICENSE
    ├── APP_README.md
    ├── package-lock.json
    ├── package.json
    └── README.md


1. The following contains all of the code related to the front-end presentation of the site (the browser).
    1.  **`/public`**: Static files which contain icons, images, sfx, logos, rss
    2. **`/components`**: Core part of the project which contain elements that make up the website.
    3. **`/pages`**: Individual static pages such as home page, 404, etc
    4. **`/lib`**: Core functions of website which load content, generate rss feed, etc.
    5. **`/types`**: Typescript definitions for all components.
    6. **`/utils`**: Miscellaneous or higher-order-functions (HOC).

2.  **`/content`**: Markdown files for blog posts projects, snippets

3. **`/tests`**: TODO

4.  **`/functions`**: Serverless functions which handles HTTP security headers, backend functions

5.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

6.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

7.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

8.  **`next.config.js`**: For custom advanced configuration of Next.js apps. [Reference](https://nextjs.org/docs/api-reference/next.config.js/introduction)

13.  **`LICENSE`**: Licensed under the 0BSD license. 

14. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

15. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

16. **`tsconfig.json`**: Typescript configuration file.

17. **`APP_README.md`**: Current file.

## 🚀 Quick start


First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing
TODO

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


