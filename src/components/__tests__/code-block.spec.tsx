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
        expect(getByRole("div")).toHaveClass("language-rust");
    });

    // test(`Copies code to clipboard`, () => {
    //     const testCode = `fn main () { println!("Hello, World"); }`
    //     const { getByRole } = render(
    //         <CodeBlock className="language-rust">
    //             {testCode}
    //         </CodeBlock>
    //     )
    //     act(() => {
    //         navigator.clipboard.writeText(testCode);
    //     })
    //     fireEvent.click(getByRole(`button`));
    //     expect(navigator.clipboard.readText()).toEqual(testCode);

    // });
});
