---
type: dependency
title: React PayPal
description: Package to remove the pain of integrating Paypal in your react app
hero: /assets/paypal.jpg
published: 2021-12-26T21:30:35.394Z
links:
- https://www.npmjs.com/package/paypal-button-react
- https://github.com/codycline/paypal-react.git
ci_link: null
tags: 
- react
- paypal
- javascript
---
## Problem
PayPal has released a new version of JavaScript library called the [Smart Button Library](https://developer.paypal.com/docs/checkout/) which allows you to accept payments on your website. 
However, a problem I ran into with several clients was integrating this into their website. 

Usually, the same exact integration code was written to make everything work. Additionally,it's very hard to dynamically change properties such as currency.
There are other implementations out there, however, not all of them are consistently using latest version of PayPal' library.

## Solution
I wrote a very simple Reactjs component which takes the hassle and time of integrating 
PayPal into your app. The library can be found on [github](https://github.com/CodyCline/paypal-react) and [npm for install](https://www.npmjs.com/package/paypal-button-react) in your project.

Go build something!