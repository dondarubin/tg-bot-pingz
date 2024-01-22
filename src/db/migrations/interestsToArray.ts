import * as fs from 'fs';
import * as path from 'path';

function readFileToArray(filePath: string): string[] {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const lines = fileContent.split('\n');

    // Убираем пустые строки и удаляем возможные пробелы в начале и конце строк
    const interestsArray = lines
    .filter(line => line.trim() !== '')
    .map(line => line.trim());

    return interestsArray;
  } catch (error: any) {
    console.error('Ошибка при чтении файла:', error.message);
    return [];
  }
}

const relativeFilePath = 'src/db/migrations/interestsList.txt';

const filePath = path.resolve(process.cwd(), relativeFilePath);

const interestsArray = readFileToArray(filePath);

console.log('Массив интересов:', interestsArray);
