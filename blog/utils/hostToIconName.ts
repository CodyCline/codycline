
//A function that takes in a URL object and matches its `hostname` against the
//icon library to display an icon link in a component
export const hostToIconName = (link: URL) => {
    switch(link.hostname) {
        
        //Cloud
        case `aws.amazon.com`: return `aws`;
        case `console.aws.amazon.com`: return `aws`;
        case `console.cloud.google.com`: return `gcp`;
        case `cloud.google.com`: return `gcp`;
        //Code and repository sharing
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
        case `microsoft.com`: return `microsoft`;
        case `docs.microsoft.org`: return `microsoft`;
        case `dotnet.microsoft.org`: return `microsoft`;
        
        case `www.hackerone.com`: return `hackerone`;
        case `pypi.org`: return `pip`;
        case `crystalshards.org`: return `crystal-shards`
        case `cocoapods.org`: return `cocoa-pods`;
        case `rubygems.org`: return `ruby`;
        case `reactjs.org`: return `react`;
        case `typescript.org`: return `typescript`;
        case `www.gnome.org`: return `gnome`;
        case `www.gnome-look.org`: return `gnome`;
        case `archlinux.org`: return `archlinux`;
        case `canonical.org`: return `canonical`;
        case `ubuntu.com`: return `ubuntu`;
        case `gentoo.org`: return `gentoo`;
        case `kubernetes.io`: return `kubernetes`;


        //TODO!
        //Search engines
        case `google.com`: return `google`;
        case `bing.com`: return `bing`;
        case `duckduckgo.com`: return `duckduckgo.com`;
        case `www.torproject.org`: return `tor`;

        //Messaging and social
        case `slack.com`: return `slack`;
        case `discord.gg`: return `discord`;
        case `dropbox.com`: return `dropbox`;
        case `drive.google.com`: return `google-drive`;
        case `odysee.com`: return `odysee`;
        case `youtube.com`: return `youtube`;

        //Payments 
        case `amazon.com`: return `amazon`;
        case `venmo.com`: return `venmo`;
        case `stripe.com`: return `stripe`;
        case `paypal.com`: return `paypal`;
        case `dashboard.stripe.com`: return `stripe`;

        //
        default: return `link`;
    }    
}