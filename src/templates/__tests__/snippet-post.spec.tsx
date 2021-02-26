import React from "react"
import renderer from "react-test-renderer";
import SnippetPostTemplate from "../snippet-post";


describe(`Snippets`, () => {
    it(`renders GraphQL data correctly`, () => {
        const pageContext = {
            next: null,
            previous: {
                fields: { slug: "/snippet/test-snippet" },
                frontmatter: { title: "Title" },
                slug: "/snippet/test-snippet/"
            }
        }
        const data = {
            site: {
                siteMetadata: {
                    title: "Default Starter",
                    social: {
                        github: "test_user"
                    }
                }
            },
            mdx: {
                id: "uuid",
                frontmatter: {
                    tags: [
                        "kubernetes",
                    ],
                    title: "Test Article",
                    date: "1970-01-01",
                    description: "Test Article",
                },
                body: "function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  \"date\": \"1970-01-01\",\n  \"tags\": [\"rust\"],\n  \"title\": \"Markdown Test\",\n  \"description\": \"Build a blockchain in rust\"\n};\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = \"wrapper\";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }), mdx(\"p\", null, \"Hello world\"));\n}\n;\nMDXContent.isMDXComponent = true;" 
            }
        }
        const tree = renderer.create(<SnippetPostTemplate data={data} pageContext={pageContext} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})