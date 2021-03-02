<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Portfolio Website
</h1>

Portfolio website and blog with developer-focused content 🛸

[![Github Actions Build Status](https://github.com/codycline/codycline/workflows/aws_ci/badge.svg)](https://github.com/codycline/codycline/actions/workflows/aws-build.yml)

[![Github Actions Test Status](https://github.com/codycline/codycline/workflows/tests/badge.svg)](https://github.com/codycline/codycline/actions/workflows/tests.yml)


## 🔧 Under the hood.

A quick look at the top-level files and directories you'll see in this Gatsby project.

    ├── node_modules
    ├── __mocks__
    ├── content
    ├── static
      ├── blog
      └── projects
    ├── src
      ├── assets
      ├── components
      ├── pages
      ├── styles
      ├── templates
      ├── types
      └── utils
    ├── functions
    ├── .github
      └── workflows
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── jest.config.js
    ├── jest-pre-process.js
    ├── setup-test-env.js
    ├── loadershim.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md


1.  **`/src`**: Contains all of the code related to the front-end presentation of the site (the browser).
    1.  **`/assets`**: Static files such as logos, fonts, pictures.
    2. **`/components`**: Core part of the project which contain elements that make up the website.
    3. **`/pages`**: Individual static pages such as home page, 404, etc.
    4. **`/styles`**: CSS and Sass modules which define color schemes, variables for the whole project.
    5. **`/templates`**: Defines dynamic pages such as blog posts.
    6. **`/types`**: Typescript definitions for all components.
    7. **`/utils`**: Miscellaneous or higher-order-functions (HOC).

2.  **`/content`**: Markdown files for blog posts projects, snippets

3. **`tests`**: The following files are used for testing.
  1. **`jest.config.js`**: Main configuration file for testing.
  2. **`jest-pre-process.js`**: Config file
  3. **`setup-test-env.js`**: Config file
  4. **`loadershim.js`**: Config file
  5. **`__mocks__`**: Used for mocking modules and APIs
  6. **``**: Where test files and snapshots live.

4.  **`/functions`**: Serverless functions which handles HTTP security headers, etc.

5.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

6.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

7.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

8.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

9.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site such as title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

10.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

11.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

12. **`create-XXX-pages.js`**: These files configure dynamic pages for separate types of content such as blog posts or tag pages. More information on the [Gatsby create pages API](https://www.gatsbyjs.com/docs/creating-and-modifying-pages/)

13.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

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

