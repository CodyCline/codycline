import Image, { ImageProps } from "next/image";

/** MdxImg can receive any attribute from a native <img> element.  */
interface MdxImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    blurDataURL?: string;
}




export const MdxImg: React.FC<MdxImgProps> = ({
    src,
    width,
    height,
    alt,
    blurDataURL,
    // Explicitly discard the following props:
    srcSet, // next/image will generate a better srcSet
    loading, // always use "lazy"
    style, // next/image doesn't accept inline styles
    placeholder, // driven by blurDataURL
    ...otherProps
}) => {
    const props: ImageProps = {
        // If we care about the generated srcSet, we might still want
        // "responsive".
        //
        // "intrinsic" is closest to the default GatsbyImage & <img> elements:
        // It grows until its size & stops growing.
        // "responsive" keeps growing to fit the width of the container.
        //
        // "intrinsic" only has a srcSet for "1x" and "2x" sizes, rather than
        //  adapting for many widths.
        layout: "intrinsic", // Matches behavior of native `<img>` element.
        loading: "lazy",
        src: src!,
        height: height!,
        width: width!,
        blurDataURL,
        placeholder: blurDataURL ? "blur" : "empty",
        ...otherProps,
    } as const;

    return <Image alt={alt} {...props} />;
};


