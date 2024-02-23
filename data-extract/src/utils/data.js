import { fileURLToPath } from "url";
import * as fs from "fs/promises";
import path from "path";

import {
  KeysToNormalize,
  KeysToNumber,
  NormalizeDataMap,
} from "../common/normalize.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const readFiles = async (fileName) => {
  try {
    const data = await fs.readFile(
      path.resolve(__dirname, `../data/${fileName}.json`),
      "utf-8"
    );
    return data;
  } catch (error) {
    console.error(`Erro ao ler arquivo ${fileName}.json:`, error.message);
  }
}

export const saveData = async (data, fileName) => {
  try {
    if (!data) {
      throw new Error(`Arquivo ${fileName}.json não foi salvo!`);
    }

    await fs.writeFile(
      path.resolve(__dirname, `../data/${fileName}.json`),
      JSON.stringify(data)
    );

    console.log(`Arquivo ${fileName}.json salvo com sucesso!`);
  } catch (error) {
    console.error("Erro ao salvar arquivos JSON:", error.message);
    throw error;
  }
};

export const normalizeData = (data) => {
  try {
    const dataToNormalize = JSON.parse(data); // converte o arquivo json em um array de objetos

    // percorre o array de objetos
    const normalizedData = dataToNormalize.map((item) => {
      const normalizedItem = { ...item };

      // percorre as chaves que devem ser normalizadas
      KeysToNormalize.forEach((key) => {
        if (normalizedItem[key]) {
          // percorre o array de objetos com as regras de normalização
          NormalizeDataMap.forEach((map) => {
            normalizedItem[key] = normalizedItem[key].replace(
              new RegExp(map.from, "g"),
              map.to
            );
          });
        }
      });

      KeysToNumber.forEach((key) => {
        if (normalizedItem[key]) {
          normalizedItem[key] = Number(normalizedItem[key]);
        }
      });

      return normalizedItem;
    });

    console.log("==============================================");
    console.log("Todas as chaves normalizadas com sucesso!");
    console.log("==============================================");

    return normalizedData;
  } catch (error) {
    console.error("Erro ao ler ou processar arquivos JSON:", error.message);
    return null;
  }
};
