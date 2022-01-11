import imageSize from "image-size";
import path from "path";
import { Processor } from "unified";
import { Node } from "unist";
import { visit } from "unist-util-visit";
import { promisify } from "util";
import { VFile } from "vfile";
import sharp from "sharp";

export const sizeOf = promisify(imageSize);

/**
 * An `<img>` HAST node
 */
interface ImageNode extends Node {
    type: "element";
    tagName: "img";
    properties: {
        src: string;
        height?: number;
        width?: number;
    };
}

/**
 * Determines whether the given HAST node is an `<img>` element.
 */
function isImageNode(node: Node): node is ImageNode {
    const img = node as ImageNode;
    return (
        img.type === "element" &&
        img.tagName === "img" &&
        img.properties &&
        typeof img.properties.src === "string"
    );
}

/**
 * Filters out non absolute paths from the public folder.
 */
function filterImageNode(node: ImageNode): boolean {
    return node.properties.src.startsWith("/");
}

/**
 * Adds the image's `height` and `width` to it's properties.
 */
async function addMetadata(node: ImageNode): Promise<void> {
    const res = await sizeOf(
        path.join(process.cwd(), "public", node.properties.src)
    );
    if (!res) throw Error(`Invalid image with src "${node.properties.src}"`);
    node.properties.width = res.width;
    node.properties.height = res.height;
}

/**
 * This is a Rehype plugin that finds image `<img>` elements and adds the height and width to the properties.
 * Read more about Next.js image: https://nextjs.org/docs/api-reference/next/image#layout
 */
export default function imageMetadata(this: Processor) {
    return async function transformer(tree: Node, file: VFile): Promise<Node> {
        const imgNodes: ImageNode[] = [];

        visit(tree, "element", (node: ImageNode) => {
            if (isImageNode(node) && filterImageNode(node)) {
                imgNodes.push(node);
            }
        });

        for (const node of imgNodes) {
            await addMetadata(node);
        }

        return tree;
    };
}



//Taken from https://github.com/vercel/next.js/blob/canary/packages/next/server/image-optimizer.ts
// let sharp:
//     | ((
//         input?: string | Buffer,
//         options?: import('sharp').SharpOptions
//     ) => import('sharp').Sharp)
//     | undefined


// export async function resizeImage(
//     content: Buffer,
//     dimension: 'width' | 'height',
//     size: number,
//     // Should match VALID_BLUR_EXT
//     extension: 'avif' | 'webp' | 'png' | 'jpeg',
//     quality: number
// ): Promise<Buffer> {
//     const transformer = sharp(content)
//     if (extension === 'avif') {
//         if (transformer.avif) {
//             transformer.avif({ quality })
//         } else {
//             console.warn(
//                 `Warning: Your installed version of the 'sharp' package does not support AVIF images. Run 'yarn add sharp@latest' to upgrade to the latest version.\n` +
//                 'Read more: https://nextjs.org/docs/messages/sharp-version-avif'
//             )
//             transformer.webp({ quality })
//         }
//     } else if (extension === 'webp') {
//         transformer.webp({ quality })
//     } else if (extension === 'png') {
//         transformer.png({ quality })
//     } else if (extension === 'jpeg') {
//         transformer.jpeg({ quality })
//     }
//     if (dimension === 'width') {
//         transformer.resize(size)
//     } else {
//         transformer.resize(null, size)
//     }
//     const buf = await transformer.toBuffer()
//     return buf
//     // } else {
//     //     const resizeOperationOpts: Operation =
//     //         dimension === 'width'
//     //             ? { type: 'resize', width: size }
//     //             : { type: 'resize', height: size }
//     //     const buf = await processBuffer(
//     //         content,
//     //         [resizeOperationOpts],
//     //         extension,
//     //         quality
//     //     )
//     //     return buf
//     // }
// }