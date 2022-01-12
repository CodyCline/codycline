
import styled, { css } from "styled-components";


//Pixel-size of breakpoints for devices
// enum DeviceSizes {
//     GIANT = 1170,
//     DESKTOP = 992,
//     TABLET = 768,
//     PHONE = 376
// };

const sizes:any = {
    giant: 1170,
    desktop: 992,
    tablet: 768,
    phone: 376,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator:any, label:any) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const currentSize:any = sizes[label];
    const emSize = currentSize / 16;
    accumulator[label] = (...args:any) => css`
      @media (max-width: ${emSize}em) {
        ${css(args)};
      }
    `
    return accumulator
}, {})


export const Tester = styled.div`

    height: 100px;
    background: gray;
    ${media.giant`background: blue;`}
    ${media.desktop`background: orange;`}
    ${media.tablet`background: red;`}
    ${media.phone`background: green;`}

`