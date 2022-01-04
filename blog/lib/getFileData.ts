
import fs from "fs";


export const getFileDate = (path: fs.PathLike) => {
    console.log("HERE?")
    const stats = fs.statSync(path);
    return {
        created: stats?.mtime? stats.birthtime : new Date().toISOString,
        updated: stats?.mtime? stats.mtime: null,
    }
}