export function truncate(lines: number, orientation: string) {
    return `
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: ${orientation};  
        word-break: break-all, 'none';
    `;
}