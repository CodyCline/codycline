import PayPal from '../assets/images/paypal.jpg';
import Question from '../assets/images/question.jpg';
const projectOneBody = (`
## Problem
PayPal has released a new version of JavaScript library called the [Smart Button Library](https://developer.paypal.com/docs/checkout/) which allows you to accept payments on your website. 
However, a problem I ran into with several clients was integrating this into their website. 

Usually, the same exact integration code was written to make everything work. Additionally,it's very hard to dynamically change properties such as currency.
There are other implementations out there, however, not all of them are consistently using latest version of PayPal' library.

## Solution
I wrote a very simple Reactjs component which takes the hassle and time of integrating 
PayPal into your app. The library can be found on [github](https://github.com/CodyCline/paypal-react) and [npm for install](https://www.npmjs.com/package/paypal-button-react) in your project.
Go build something!
`);

const projectTwoBody = (`
Random maps is a project which generates unique and random geo coordinates on Google Maps.


`);


export const projectData = [
    {
        id: "12611c16-e822-4991-a43f-f161e21a8deb",
        slug: "react-paypal-module",
        type: "open-source",
        title: "PayPal React",
        banner: PayPal,
        description: "React.js wrapper for PayPal buttons",
        githubUrl: "https://github.com/codycline/paypal-react",
        liveUrl: "https://npmjs.com/package/paypal-button-react",
        tags: ["javascript", "react", "typescript"],
        body: projectOneBody,
        cover: PayPal
    },
    {
        id: "70535c07-10bb-4be5-891a-da1c68e4180b",
        slug: "random-maps",
        type: "web",
        title: "Random Maps",
        description: "Generate random locations on google maps",
        banner: Question,
        githubUrl: "https://github.com/codycline/random_maps",
        tags: ["javascript", "react", "python"],
        cover: Question,
        body: projectTwoBody
    }
]