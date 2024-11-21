// Archivo: stores/201/sales/someScript.mjs
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);

const directoryPath = path.resolve('stores/201/sales');
console.log(directoryPath);
