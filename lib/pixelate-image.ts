import fs, { PathLike } from "fs";
import { createCanvas, loadImage, Image } from "canvas";
import sharp from "sharp";


//Creates a nodejs canvas and then loops the pixels of an image then blurs it 
export async function _pixelateImage(src: PathLike, pixelationFactor: number = 20) {
    
    const originalImage = await loadImage(src as string);
    const pixelatedImage = originalImage;
    const originalWidth = originalImage.width!;
    const originalHeight = originalImage.height!;
    
    const canvas = createCanvas(originalWidth, originalHeight);
    const context = canvas.getContext("2d");
    
    const canvasWidth = originalWidth;
    const canvasHeight = originalHeight;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    
    context.drawImage(originalImage, 0, 0, originalWidth, originalHeight);
    
    const originalImageData = context.getImageData(
        0,
        0,
        originalWidth,
        originalHeight
    ).data;
    for (let y = 0; y < originalHeight; y += pixelationFactor) {
        for (let x = 0; x < originalWidth; x += pixelationFactor) {
            // extracting the position of the sample pixel
            const pixelIndexPosition = (x + y * originalWidth) * 4;
            // drawing a square replacing the current pixels
            context.fillStyle = `rgba(
                ${originalImageData[pixelIndexPosition]},
                ${originalImageData[pixelIndexPosition + 1]},
                ${originalImageData[pixelIndexPosition + 2]},
                ${originalImageData[pixelIndexPosition + 3]},
            )`;
            context.fillRect(x, y, pixelationFactor, pixelationFactor);
        }
    }
    const newImg = new Image();
    pixelatedImage.src = canvas.toDataURL("image/png");
    // const buffer = canvas.toDataURL();
    // return buffer;
    return pixelatedImage.src;
}


//Adapted from https://github.com/miguelmota/node-pixelate/blob/master/index.js
export async function pixelateImage(src: PathLike, scale: number = 0.989) {
    const originalImage = await loadImage(src as string);
    
    const width = originalImage.width;
    const height = originalImage.height;

    const image = originalImage;


    const scaledWidth = Math.floor(width * (1.001 - scale) * 4);
    const scaledHeight = Math.floor(height * (1.001 - scale) * 4);
    const canvas = await createCanvas(width, height);
    const context = canvas.getContext("2d");

    context.imageSmoothingEnabled = false;
    context.patternQuality = "fast";


    //Stretch image
    const resized = await sharp(image.src)
        .resize(scaledWidth, scaledHeight, { fit: 'inside', })
        .toBuffer();
    const scaledImage = new Image();
    scaledImage.src = resized;
    context.drawImage(scaledImage, 0, 0, width, width);
    const buffer = await canvas.toDataURL("image/png");
    return buffer;
    
}