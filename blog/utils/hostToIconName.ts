
//A function that takes in a URL object and matches its `hostname` against the
//icon library to display an icon link in a component
export const hostToIconName = (link: URL) => {
    console.log(link.hostname);
    switch(link.hostname) {
        
        case `www.npmjs.com`: return `npm`
        
        case `crates.io`: return `cargo`;
        case `conan.io`: return `conan`;
        
        case `snapcraft.io`: return `snapcraft`;
        case `apps.apple.com`: return `app-store`;
        case `github.com`: return `github`;
        case `gist.github.com`: return `github`;
        case `play.google.com`: return `google-play`;
        case `assetstore.unity.com`: return `unity`;
        case `www.nuget.org`: return `nuget`;
        case `pkg.go.dev`: return `golang`;
        case `hub.docker.com`: return `docker`;
        case `docker.com`: return `docker`;
        case `aws.amazon.com`: return `aws`;
        case `console.aws.amazon.com`: return `aws`;
        case `console.cloud.google.com`: return `gcp`;
        case `cloud.google.com`: return `gcp`;

        //TODO!
        case `cocoapods.org`: return `cocoa-pods`;
        case `rubygems.org`: return `ruby`;
        case `crystalshards.org`: return `crystal-shards`
        case `pypi.org`: return `pip`;
        case `www.gnome.org`: return `gnome`;
        case `www.gnome-look.org`: return `gnome`;
        case `dropbox.com`: return `dropbox`;
        case `google.com`: return `google`;
        case `bing.com`: return `bing`;
        case `www.paypal.com`: return `paypal`;
        case `dashboard.stripe.com`: return `stripe`;
        case `www.hackerone.com`: return `hackerone`;
        case `www.torproject.org`: return `tor`;
        case `stripe.com`: return `stripe`;
        default: return `link`;
    }    
}