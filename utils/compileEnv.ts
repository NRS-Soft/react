import path from 'path';
import dotenv from 'dotenv';
import {promises as fs} from 'fs';

type Environment = {
    "ENVIRONMENT": "development"
}

async function compileEnv(env: Environment) {
    const currentPath = path.resolve(`./`);
    const basePath = currentPath + '/.env';
    const envPath = basePath + '.' + env.ENVIRONMENT;
    const finalPath = await fs.stat(envPath) ? envPath : basePath;

    const fileEnv = dotenv.config({ path: finalPath }).parsed;

    return Object.keys(fileEnv).reduce<Record<string, string>>((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
        return prev;
    }, {});
}
module.exports = compileEnv;
