import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

export const withAddons = (Component:any) => (props:any) => {
    //Analytics, icons, etc.
    library.add(far, fas, fab);
    return <Component {...props } />;
};