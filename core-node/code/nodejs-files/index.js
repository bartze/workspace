import { fileURLToPath } from 'url';
import { dirname, join, extname } from 'path';
import fs from 'fs/promises';

// Obtener la ruta del archivo actual y el directorio
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function findSalesFiles(folderName) {
	let results = [];

	const items = await fs.readdir(folderName, { withFileTypes: true });

	for (const item of items) {
		if (item.isDirectory()) {
			const resultsReturned = await findSalesFiles(join(folderName, item.name));
			results = results.concat(resultsReturned);
		} else {
			if (extname(item.name) === '.json') {
				results.push(join(folderName, item.name));
			}
		}
	}

	return results;
}

// Nueva función para calcular el total de ventas
async function calculateSalesTotal(salesFiles) {
	let salesTotal = 0;

	for (const file of salesFiles) {
		const fileContents = await fs.readFile(file);
		const data = JSON.parse(fileContents);
		salesTotal += data.total;
	}

	return salesTotal;
}

async function main() {
	const salesDir = join(__dirname, 'stores');
	const salesTotalsDir = join(__dirname, 'salesTotals');

	try {
		await fs.mkdir(salesTotalsDir, { recursive: true });
	} catch (err) {
		console.log(`${salesTotalsDir} ya existe o ocurrió un error:`, err);
	}

	const salesFiles = await findSalesFiles(salesDir);

	// Llamada a la función calculateSalesTotal
	const salesTotal = await calculateSalesTotal(salesFiles);

	// Escribir el total en el archivo totals.txt
	await fs.writeFile(join(salesTotalsDir, 'totals.txt'), `${salesTotal}\r\n`, { flag: 'a' });

	console.log(`Se escribieron los totales de ventas en ${salesTotalsDir}`);
}

main();
