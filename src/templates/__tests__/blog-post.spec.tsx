import React from "react"
import renderer from "react-test-renderer";
import BlogPostTemplate from "../blog-post";

describe(`Blog`, () => {
    it(`renders GraphQL data correctly`, () => {
        const pageContext = {
            next: null,
            previous: {
                fields: { slug: "/blog/test-article" },
                frontmatter: { title: "Title" },
                slug: "/blog/test-article/"
            }
        }
        const data = {
            site: {
                siteMetadata: {
                title: "Default Starter"
                }
            },
            mdx: {
                id: "uuid",
                frontmatter: {
                    tags: [
                        "kubernetes",
                        "docker"
                    ],
                    title: "Test Article",
                    date: "1970-01-01",
                    description: "Test Article",
                    thumb: {
                        publicURL: "https://example.com"
                    },
                },
                body: "function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  \"date\": \"1970-01-01\",\n  \"tags\": [\"rust\"],\n  \"title\": \"Markdown Test\",\n  \"description\": \"Build a blockchain in rust\"\n};\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = \"wrapper\";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }), mdx(\"p\", null, \"Hello world\"));\n}\n;\nMDXContent.isMDXComponent = true;" 
            }
        }
        const tree = renderer.create(<BlogPostTemplate data={data} pageContext={pageContext} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})