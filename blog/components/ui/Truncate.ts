export function truncate(width: number) {
    return `
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `;
}