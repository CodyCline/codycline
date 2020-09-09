import PayPal from '../assets/images/paypal.jpg';

const projectOneBody = (`
## Problem
PayPal has released a new version of JavaScript library called the [Smart Button Library](https://developer.paypal.com/docs/checkout/) which allows you to accept payments on your website. 
However, a problem I ran into with several clients was integrating this into their website. 

I usually ended up writing the same exact integration code to make it work. Additionally, it's very hard to dynamically
change properties on the smart button. Such as, currency, intent (capture or save for later) because the new library calls these parameters within the URL.
There are other implementations out there, however, not all of them are using the latest version of PayPal' library.

## Solution
I wrote a very simple Reactjs component which takes the hassle and time of integrating 
PayPal into your app. The library can be found on [github](https://github.com/CodyCline/paypal-react) and [npm for download](https://www.npmjs.com/package/paypal-button-react)
`);


export const projectData = [
    {
        id: "12611c16-e822-4991-a43f-f161e21a8deb",
        slug: "react-paypal-module",
        type: "open-source",
        title: "PayPal React",
        banner: PayPal,
        description: "React.js wrapper for PayPal buttons",
        githubUrl: "https://github.com/CodyCline/paypal-react",
        liveUrl: "https://npmjs.com/package/paypal-button-react",
        tags: ["javascript", "react", "typescript"],
        body: projectOneBody,
        cover: PayPal
    },
]