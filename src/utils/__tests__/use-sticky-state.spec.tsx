import { renderHook, act } from "@testing-library/react-hooks";
import { useStickyState } from "../use-sticky-state";



describe(`useStickyState custom hook`, () => {
	test(`stateful updates against plain text`, () => {
        const { result }: any = renderHook(
            () => useStickyState("foo", "test__value"),
        );
        
        // Assertion
        expect(result.current[0]).toBe("foo");
        expect(typeof result.current[0] === "string");
        expect(typeof result.current[1] === "function");
        act(() => {
            result.current[1]("bar", "test__value");
        });
        expect(result.current[0]).toBe("bar")
        act(() => {
            result.current[1](9001, "text__value");
        });
        //Its over 9000!!!
        expect(typeof result.current[0] === "number");
        expect(result.current[0]).toBe(9001)
	});


    test(`stateful updates against localStorage values`, () => {
        //Todo make sure correct types are converted back 
        const { result }: any = renderHook(
            () => useStickyState("foo", "test__value"),
        );
        expect(result.current[0]).toEqual(window.localStorage.getItem("test__value"));
        act(() => {
            result.current[1](9001, "test__value");
        })
        const localValue: any = window.localStorage.getItem("test__value");
        expect(typeof localValue === "number");
        expect(result.current[0]).toEqual(JSON.parse(localValue));
    })
});
