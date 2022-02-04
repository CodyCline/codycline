import Head from "next/head"
import { useRouter } from "next/router"
import { siteMetadata } from "../site-metadata";

const CommonSeo = ({ title, description, ogType, ogImage, twImage }: any) => {
    const router = useRouter();
    return (
        <Head>
            <title>{title}</title>
            <meta name="robots" content="follow, index" />
            <meta name="description" content={description} />
            <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content={siteMetadata.title} />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            {ogImage.constructor.name === "Array" ? (
                ogImage.map(({ url }: any) => <meta property="og:image" content={url} key={url} />)
            ) : (
                <meta property="og:image" content={ogImage} key={ogImage} />
            )}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={siteMetadata.social.github} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={twImage} />
        </Head>
    )
}

export const PageSeo = ({ title, description }: any) => {
    const ogImageUrl = siteMetadata.siteUrl + siteMetadata.social.banner
    const twImageUrl = siteMetadata.siteUrl + siteMetadata.social.banner
    return (
        <CommonSeo
            title={title}
            description={description}
            ogType="website"
            ogImage={ogImageUrl}
            twImage={twImageUrl}
        />
    )
}

export const TagSeo = ({ title, description }: any) => {
    const ogImageUrl = siteMetadata.siteUrl + siteMetadata.social.banner
    const twImageUrl = siteMetadata.siteUrl + siteMetadata.social.banner
    const router = useRouter()
    return (
        <>
            <CommonSeo
                title={title}
                description={description}
                ogType="website"
                ogImage={ogImageUrl}
                twImage={twImageUrl}
            />
            <Head>
                <link
                    rel="alternate"
                    type="application/rss+xml"
                    title={`${description} - RSS feed`}
                    href={`${siteMetadata.siteUrl}${router.asPath}/feed.xml`}
                />
            </Head>
        </>
    )
}

export const ContentSeo = ({ title, published, description, updated, url, images = [] }: any) => {
    const router = useRouter()
    const publishedAt = new Date(published).toISOString()
    const modifiedAt = new Date(updated || published).toISOString()
    let imagesArr =
        images.length === 0
            ? [siteMetadata.social.banner]
            : typeof images === "string"
                ? [images]
                : images

    const featuredImages = imagesArr.map((img: any) => {
        return {
            "@type": "ImageObject",
            url: `${siteMetadata.siteUrl}${img}`,
        }
    })
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
        headline: title,
        image: featuredImages,
        datePublished: publishedAt,
        dateModified: modifiedAt,
        author: siteMetadata.author.name,
        publisher: {
            "@type": "Organization",
            name: siteMetadata.author.name,
            logo: {
                "@type": "ImageObject",
                url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
            },
        },
        description: description,
    }

    const twImageUrl = featuredImages[0].url

    return (
        <>
            <CommonSeo
                title={title}
                description={description}
                ogType="article"
                ogImage={featuredImages}
                twImage={twImageUrl}
            />
            <Head>
                {published && <meta property="article:published_time" content={publishedAt} />}
                {updated && <meta property="article:modified_time" content={modifiedAt} />}
                <link rel="canonical" href={`${siteMetadata.siteUrl}${router.asPath}`} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData, null, 2),
                    }}
                />
            </Head>
        </>
    )
}
