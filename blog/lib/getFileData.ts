
import { PathLike, Stats, statSync } from "fs";

export type FileDate = {
    created: Date
    updated: Date | null
}


export const getFileDate = (path: PathLike): FileDate => {
    const stats: Stats = statSync(path);
    return {
        created: stats?.mtime? stats.birthtime : new Date(),
        updated: stats?.mtime? stats.mtime : null,
    }
}

