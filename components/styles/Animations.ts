import { keyframes } from "styled-components";

export const fadeInAnimation = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`;

export const slideInAnimation = keyframes`
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform:
        rotate(0deg) translateX(0%);
        opacity: 1;
    }
`
export const slideInLeft = keyframes`
 0% {
   transform: translateX(-100%);
   opacity: 0;
 }
 100% {
   transform: translateX(0);
   opacity: 1;
 }
`;


export const slideInRight = keyframes`
 0% {
   transform: translateX(100%);
   opacity: 0;
 }
 100% {
   transform: translateX(0);
   opacity: 1;
 }
`;

export const slideOutRight = keyframes`
 0% {
   transform: translateX(0);
   opacity: 1;
 }
 100% {
   transform: translateX(1000px);
   opacity: 0;
 }
`;


export const rotateForwards =  keyframes`
0% {
  transform-origin: center;
  transform: rotate(0deg);
  opacity: 0;
}
100% {
  transform: rotate(180deg);
  opacity: 1;
}
`;


export const rotateBackwards =  keyframes`
0% {
  transform-origin: center;
  transform: rotate(180deg);
  opacity: 0;
}
100% {
  transform: rotate(0deg);
  opacity: 1;
}
`;
export const slideInBottom = keyframes`
 0% {
   transform: translateY(100%);
   opacity: 0;
 }
 100% {
   transform: translateY(0%);
   opacity: 1;
 }
`;


export const rotateInCenter = keyframes`
0% {
    transform: rotateY(-360deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0deg);
    opacity: 1;
  }
`;