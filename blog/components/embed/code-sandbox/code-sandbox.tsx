import * as React from 'react';
import { useStickyState } from '../../../utils/use-sticky-state';


export const CodeSandbox = ({id, hideNavigation = true}: any) => {
    const [theme]: any = useStickyState("dark", "theme__preference");

    return (
        <iframe 
            src={`https://codesandbox.io/embed/${id}?fontsize=16&hidenavigation=${hideNavigation? 1: 0}&theme=${theme || `dark`}`}
            title={id}
            style={{width:  "100%", height: "500px", border: 0, borderRadius: "4px", overflow: "hidden"}}
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
    )
}