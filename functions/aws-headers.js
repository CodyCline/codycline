'use strict';
//AWS HTTP security headers for cloudfront
exports.handler = (event, context, callback) => {
    const response = event.Records[0].cf.response;
    const headers = response.headers;

    headers["strict-transport-security"] = [{
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubdomains; preload"
    }];
    headers["content-security-policy"] = [{
        key: "Content-Security-Policy",
        value: "default-src 'self'; connect-src 'self'; font-src 'self' data:; frame-src 'self'; img-src 'self' data: https:; media-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com/ https://www.google-analytics.com/analytics.js https://www.googletagmanager.com/ data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/; object-src 'none'"
    }];
    headers["x-content-type-options"] = [{
        key: "X-Content-Type-Options",
        value: "nosniff",
    }];

    headers["x-frame-options"] = [{
        key: "X-Frame-Options",
        value: "DENY",
    }];

    headers["x-xss-protection"] = [{
        key: "X-XSS-Protection",
        value: "1; mode=block",
    }];
    headers["referrer-policy"] = [{
        key: "Referrer-Policy",
        value: "same-origin",
    }];
    callback(null, response);
};