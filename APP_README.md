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

1.  **Start developing.**

    Navigate into directory and start it up.

    ```shell
    cd codycline/
    npx gatsby develop #or npm start
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-blog-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## Testing

Uses Jest for unit testing, snapshots, and graphql tests. React testing library is used for stateless components.

1.  **Run test suite.**

    Navigate into directory and start it up.

    ```shell
    cd codycline/
    npm install
    npm run build
    npm test
    #If snapshots fail run
    npm test -- -u
    ```

## TODO

## 💫 Deploy


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


