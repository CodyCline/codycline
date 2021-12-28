import * as React from "react"
import { render, fireEvent, act } from "@testing-library/react";
import { CodeBlock } from "../code/code";



describe(`Code Block`, () => {
    test(`Renders props correctly`, () => {
        const testCode = `fn main () { println!("Hello, World"); }`
        const { getByRole, getByTitle } = render(
            <CodeBlock className="language-rust">
                {testCode}
            </CodeBlock>
        )
        expect(getByRole(`code`)).toHaveClass(`language-rust`);
        expect(getByRole(`code`)).toHaveTextContent(testCode);
        expect(getByTitle(`rust`)).toHaveTextContent(`rust`);
    });

    //Todo test clipboard functions
    //Todo handle errors
});
