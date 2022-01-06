
import fs from "fs";

export type FileDate = {
    created: Date
    updated: Date | null
}

export const getFileDate = (path: fs.PathLike): FileDate => {
    const stats: fs.Stats = fs.statSync(path);
    return {
        created: stats?.mtime? stats.birthtime : new Date(),
        updated: stats?.mtime? stats.mtime : null,
    }
}