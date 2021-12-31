export function Truncate(width: number) {
    return `
        width: ${width};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `;
}