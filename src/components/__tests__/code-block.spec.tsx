import * as React from "react"
import { render, fireEvent, act } from "@testing-library/react";
import { CodeBlock } from "../code-block/code-block";


Object.assign(navigator, {
    clipboard: {
        writeText: jest.fn(),
        readText: jest.fn(),
    },
});


describe(`Code Block`, () => {
    test(`Renders props correctly`, () => {
        const testCode = `fn main () { println!("Hello, World"); }`
        const { getByRole, container } = render(
            <CodeBlock className="language-rust">
                {testCode}
            </CodeBlock>
        )
        expect(getByRole("code")).toHaveClass("language-rust");
    });

    //Todo test clipboard functions
    //Todo handle errors
});
